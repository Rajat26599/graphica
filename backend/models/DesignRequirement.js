const mongoose = require("mongoose")

const DesignRequirementSchema = new mongoose.Schema({
    creator: {
        email: {
            type: String,
            required: true,
            unique: true,
        }
    },
    requirement: {
        documentType: {
            type: String
        },
        size: {
            type: String
        },
        title: {
            type: String
        },
        bodyContent: {
            type: String
        },
        designRequirement: {
            type: String
        }
    }

}, { timestamps: true })

const DesignRequirementModel = mongoose.model("design-requirements", DesignRequirementSchema)
module.exports = DesignRequirementModel