import { connect } from "react-redux"
import { DesignRequirementDetailsWrapper, DetailsActionBtnWrapper, LeftCell, RightCell } from "./styles"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { formatDate } from "../../util/commonMethods"
import { Button } from "../common/button/Button"
import { endpoints } from "../constants/endpoints"

const mapStateToProps = (state) => {
    return {
        designRequirements: state.designRequirementsReducers.designRequirements,
        allDesignRequirements: state.designRequirementsReducers.allDesignRequirements,
    }
}

const DesignRequirementDetails = (props) => {
    const [ selectedRequirement, setSelectedRequirement ] = useState(null)

    const navigate = useNavigate()
    const { id } = useParams()

    const deleteMyDesignRequirement = (id) => {
        fetch(process.env.REACT_APP_SERVER_URL + endpoints.DELETE_DESIGN_REQUIREMENT, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id
            })
        })
            .then((res) => res.json())
            .then((data) => {
                navigate('/dashboard')
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        const matchedRequirements = [...props.allDesignRequirements, ...props.designRequirements].filter(r => r._id === id)
        matchedRequirements && setSelectedRequirement(matchedRequirements[0])
    }, [props.allDesignRequirements, props.designRequirements, id])

    return (
        <DesignRequirementDetailsWrapper>
            {
                selectedRequirement?.requirement && Object.entries(selectedRequirement?.requirement).map((item, index) => (
                    <div key={index}>
                        <LeftCell>{item[0]}</LeftCell>
                        <RightCell>{item[1]}</RightCell>
                        <br />
                    </div>
                ))
            }
            <LeftCell>Created by</LeftCell>
            <RightCell>{selectedRequirement?.creator.email}</RightCell><br />
            <LeftCell>Created on</LeftCell>
            <RightCell>{formatDate(selectedRequirement?.createdAt)}</RightCell>

            <DetailsActionBtnWrapper>
                <Button onClick={() => deleteMyDesignRequirement(id)}>Delete</Button>
            </DetailsActionBtnWrapper>
        </DesignRequirementDetailsWrapper>
    )
}

export default connect(mapStateToProps)(DesignRequirementDetails)