import { useEffect, useState } from "react"
import { Modal } from "../../../common/modal/Modal"
import { Textarea } from "../../../common/textarea/Textarea"
import { Input } from "../../../common/input/Input"
import { AutoComplete } from "../../../common/autoComplete/AutoComplete"
import { DoubleColumnWrapper, Column, ThankYouPageWrapper } from "./styles"
import { CustomSizeInput } from "../../../common/customSizeInput/CustomSizeInput"
import { endpoints } from "../../../constants/endpoints"

const DocType = () => {
    const [documentType, setDocumentType] = useState('')
    const [suggestedDocs, setSuggestedDocs] = useState([])
    const [showCustomDocumentInput, setShowCustomDocumentInput] = useState(false)

    const [documentSize, setDocumentSize] = useState('')
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
    }, [])

    // const documents = [
    //     'Poster',
    //     'Banner / Flex',
    //     'Brochure',
    //     'Invitation',
    //     'Presentation',
    // ]
    // const sizes = [
    //     'A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4'
    // ]
    const handleDocumentTypeChange = (value) => {
        setDocumentType(value)
        const filteredDocs = documents.filter(doc => value && doc.toLowerCase().includes(value.toLowerCase()))
        setSuggestedDocs(filteredDocs)
    }
    const handleOnDocumentTypeSelect = (doc) => {
        setDocumentType(doc)
        if(doc==='Other') setShowCustomDocumentInput(true)
        else setShowCustomDocumentInput(false)
    }

    const handleDocumentSizeChange = (value) => {
        setDocumentSize(value)
        const filteredSizes = sizes.filter(doc => value && doc.toLowerCase().includes(value.toLowerCase()))
        setSuggestedSize(filteredSizes)
    }
    const handleOnDocumentSizeSelect = (size) => {
        setDocumentSize(size)
        if(size==='Other') setShowCustomSizeInput(true)
    }
    return (
        <div>
            <DoubleColumnWrapper>
                <Column>
                    <AutoComplete
                        label={'Document type'}
                        allItems={documents}
                        items={suggestedDocs}
                        value={documentType}
                        onChange={(e) => handleDocumentTypeChange(e.target.value)}
                        onSelect={(doc) => handleOnDocumentTypeSelect(doc)}
                        />
                </Column>
                <Column>
                    {
                        showCustomDocumentInput &&
                        <Input
                            label={'Document name'} 
                            width={'95%'}
                            />
                    }
                </Column>
            </DoubleColumnWrapper>
            <DoubleColumnWrapper>
                <Column>
                    <AutoComplete
                        label={'Size'}
                        allItems={sizes}
                        items={suggestedSize}
                        value={documentSize}
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
const Requirement = () => {
    const [title, setTitle] = useState('')
    return (
        <div>
            <Input 
                onChange={(e) => setTitle(e.target.value)} 
                value={title} 
                placeholder={'Enter title of your design...'}
                label={'Title'}
                />
            <Textarea 
                rows={5} 
                placeholder='Enter the content you want on your design...' 
                label={'Body Content'}
                />
            <Textarea 
                rows={5} 
                placeholder='Any design requirement or wish for your creative...' 
                label={'Design requirement '}
                />
        </div>
    )
}
const ThankYouPage = () => {
    return (
        <ThankYouPageWrapper>
            <h1>Thank you for using our service!</h1>
            <h3>Our designers will get back to you soon.</h3>
        </ThankYouPageWrapper>
    )
}

const pageArray = [
    <DocType />,
    <Requirement />,
    <ThankYouPage />
]

export const DemandModal = (props) => {
    const [pageInd, setPageInd] = useState(0);

    const getPage = (pageInd, setPageInd) => {
        if(pageInd > pageArray.length-1) setPageInd(0)
        return pageArray[pageInd]
    }
    const onClose = () => {
        props.setIsOpen(false)
        setPageInd(0)
    }
    return (
        <Modal 
            width={'60vw'}
            isOpen={props.isOpen} 
            text={'Feature Unavailable'}
            primaryBtnText={pageInd === pageArray.length-2 ? 'Submit' : pageInd === pageArray.length-1 ? 'Request Another Design' : 'Next'}
            primaryBtnClick={() => setPageInd(pageInd+1)}
            closeBtnText={'Close'}
            onClose={() => onClose()}
            thirdBtnText={pageInd === 0 || pageInd === pageArray.length-1 ? '' : 'Back'}
            thirdBtnClick={() => setPageInd(pageInd-1)}
            >
                { getPage(pageInd, setPageInd) }
            </Modal>
    )
}