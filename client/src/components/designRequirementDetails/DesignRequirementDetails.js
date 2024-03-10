import { connect } from "react-redux"
import { DesignRequirementDetailsWrapper, LeftCell, RightCell } from "./styles"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { formatDate } from "../../util/commonMethods"

const mapStateToProps = (state) => {
    return {
        designRequirements: state.designRequirementsReducers.designRequirements,
        allDesignRequirements: state.designRequirementsReducers.allDesignRequirements
    }
}

const DesignRequirementDetails = (props) => {
    const [ selectedRequirement, setSelectedRequirement ] = useState(null)

    const { id } = useParams()

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
        </DesignRequirementDetailsWrapper>
    )
}

export default connect(mapStateToProps)(DesignRequirementDetails)