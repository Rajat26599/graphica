import { useEffect } from "react"
import { connect, useDispatch } from 'react-redux'
import { endpoints } from '../constants/endpoints'
import { BackgroundBoard } from "../common/backgroundBoard/BackgroundBoard"
import { DateWrapper, MyDesignRequirementWrapper } from "./styles"
import { useNavigate } from "react-router-dom"
import { saveAllDesignRequirements } from "../../redux/actions/designRequirementsActions"
import { formatDate } from "../../util/commonMethods"

const mapStateToProps = (state) => {
    return {
        userData: state.authReducers.userData,
        allDesignRequirements: state.designRequirementsReducers.allDesignRequirements
    }
}

const DesignerDashboard = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const getAllDesignRequirement = () => {
            fetch(process.env.REACT_APP_SERVER_URL + endpoints.ALL_DESIGN_REQUIREMENTS)
                .then((res) => res.json())
                .then((data) => {
                    dispatch(saveAllDesignRequirements(data))
                })
                .catch(e => console.log(e))
        }
        getAllDesignRequirement()
    }, [props.userData.email, dispatch])

    return (
        <>
            <h2>Designer dashboard</h2>
            <BackgroundBoard
                $borderStyles={{
                    width: '1px',
                    type: 'solid',
                    color: '#d7d781',
                    radius: '0.5rem'
                }}
                $bgColor='lightgoldenrodyellow'
                width='30%'
                heading='Design requirements'
            >            
                { 
                    props.allDesignRequirements.map((el, index) => (
                        <div key={el._id}>                        
                            <MyDesignRequirementWrapper onClick={() => navigate(`/designRequirementDetails/${el._id}`)}>                 
                                <dt>{el.requirement.title}</dt>
                                <DateWrapper>{formatDate(el.createdAt)}</DateWrapper>
                            </MyDesignRequirementWrapper>
                            {index !== props.allDesignRequirements.length-1 && <hr />}
                        </div>
                    ))
                }
            </BackgroundBoard>
            <hr />
        </>
    )
}

export default connect(mapStateToProps)(DesignerDashboard)