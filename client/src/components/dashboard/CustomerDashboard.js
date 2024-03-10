import { useEffect } from "react"
import { connect, useDispatch } from 'react-redux'
import { endpoints } from '../constants/endpoints'
import { BackgroundBoard } from "../common/backgroundBoard/BackgroundBoard"
import { DateWrapper, MyDesignRequirementWrapper } from "./styles"
import { useNavigate } from "react-router-dom"
import { saveDesignRequirements } from "../../redux/actions/designRequirementsActions"
import { formatDate } from "../../util/commonMethods"

const mapStateToProps = (state) => {
    return {
        userData: state.authReducers.userData,
        designRequirements: state.designRequirementsReducers.designRequirements
    }
}

const CustomerDashboard = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const getMyDesignRequirement = () => {
            fetch(process.env.REACT_APP_SERVER_URL + endpoints.MY_DESIGN_REQUIREMENTS, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: props.userData.email
                })
            })
                .then((res) => res.json())
                .then((data) => {
                    dispatch(saveDesignRequirements(data))
                })
                .catch(e => console.log(e))
        }
        getMyDesignRequirement()
    }, [props.userData.email, dispatch])

    return (
        <>
            <h2>Customer Dashboard</h2>
            <BackgroundBoard
                $borderStyles={{
                    width: '1px',
                    type: 'solid',
                    color: '#ffb052',
                    radius: '0.5rem'
                }}
                $bgColor='bisque'
                width='30%'
                heading='Design requirements'
            >            
                { 
                    props.designRequirements.map((el, index) => (
                        <div key={el._id}>                        
                            <MyDesignRequirementWrapper key={el._id} onClick={() => navigate(`/designRequirementDetails/${el._id}`)}>                 
                                <dt>{el.requirement.title}</dt>
                                <DateWrapper>{formatDate(el.createdAt)}</DateWrapper>
                            </MyDesignRequirementWrapper>
                            {index !== props.designRequirements.length-1 && <hr />}
                        </div>
                    ))
                }
            </BackgroundBoard>
            <hr />
        </>
    )
}

export default connect(mapStateToProps)(CustomerDashboard)