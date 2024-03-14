import { useEffect, useState } from "react"
import { DoubleColumnWrapper, Column } from "./styles"
import { endpoints } from "../../../constants/endpoints"

import { Input } from "../../../common/input/Input"
import { AutoComplete } from "../../../common/autoComplete/AutoComplete"
import { CustomSizeInput } from "../../../common/customSizeInput/CustomSizeInput"

export const DocType = (props) => {
    
    const [suggestedDocs, setSuggestedDocs] = useState([])
    const [showCustomDocumentInput, setShowCustomDocumentInput] = useState(false)

    const [suggestedSize, setSuggestedSize] = useState([])
    const [showCustomSizeInput, setShowCustomSizeInput] = useState(false)

    const [documents, setDocuments] = useState([])
    const [sizes, setSizes] = useState([])

    const getDocumentsData = () => {
        fetch(process.env.REACT_APP_SERVER_URL + endpoints.DESIGN_DOCUMENTS, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => setDocuments(data.documents))
            .catch(e => console.log(e))
    }

    const getSizesData = () => {
        fetch(process.env.REACT_APP_SERVER_URL + endpoints.DESIGN_SIZES)
            .then((res) => res.json())
            .then((data) => setSizes(data.sizes))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getDocumentsData()
        getSizesData()

        props.documentType === 'Other' && setShowCustomDocumentInput(true)
        props.documentSize === 'Other' && setShowCustomSizeInput(true)
    }, [props.documentType, props.documentSize])

    const handleDocumentTypeChange = (value) => {
        props.setDocumentType(value)
        const filteredDocs = documents.filter(doc => value && doc.toLowerCase().includes(value.toLowerCase()))
        setSuggestedDocs(filteredDocs)
    }
    const handleOnDocumentTypeSelect = (doc) => {
        props.setDocumentType(doc)
        if(doc==='Other') setShowCustomDocumentInput(true)
        else setShowCustomDocumentInput(false)
    }

    const handleDocumentSizeChange = (value) => {
        props.setDocumentSize(value)
        const filteredSizes = sizes.filter(doc => value && doc.toLowerCase().includes(value.toLowerCase()))
        setSuggestedSize(filteredSizes)
    }
    const handleOnDocumentSizeSelect = (size) => {
        props.setDocumentSize(size)
        if(size==='Other') setShowCustomSizeInput(true)
    }
    return (
        <div>
            <DoubleColumnWrapper>
                <Column>
                    <AutoComplete
                        label='Document type'
                        subLabel='(eg. flex, banner, poster etc.)'
                        allItems={documents}
                        items={suggestedDocs}
                        value={props.documentType}
                        onChange={(e) => handleDocumentTypeChange(e.target.value)}
                        onSelect={(doc) => handleOnDocumentTypeSelect(doc)}
                        />
                </Column>
                <Column>
                    {
                        showCustomDocumentInput &&
                        <Input
                            label='Document name' 
                            width='95%'
                            />
                    }
                </Column>
            </DoubleColumnWrapper>
            <DoubleColumnWrapper>
                <Column>
                    <AutoComplete
                        label='Size'
                        subLabel='(eg. A4, B1 etc.)'
                        allItems={sizes}
                        items={suggestedSize}
                        value={props.documentSize}
                        onChange={(e) => handleDocumentSizeChange(e.target.value)}
                        onSelect={(size) => handleOnDocumentSizeSelect(size)}
                        />
                </Column>
                <Column>
                    {
                        showCustomSizeInput &&
                        <CustomSizeInput />
                    }
                </Column>
            </DoubleColumnWrapper>
        </div>
    )
}