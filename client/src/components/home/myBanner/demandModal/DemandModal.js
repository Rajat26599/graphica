import { useState } from "react"
import { Modal } from "../../../common/modal/Modal"
import { endpoints } from "../../../constants/endpoints"

import { DocType } from "./DocType"
import { Requirement } from "./Requirement"
import { ThankYouPage } from "./ThankYouPage"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {
        isLogin: state.authReducers.isLogin,
        userData: state.authReducers.userData
    }
}

const DemandModal = (props) => {
    const [pageInd, setPageInd] = useState(0);

    const [documentType, setDocumentType] = useState('')
    const [documentSize, setDocumentSize] = useState('')

    const [title, setTitle] = useState('')
    const [bodyContent, setBodyContent] = useState('')
    const [designRequirement, setDesignRequirement] = useState('')

    const pageArray = [
        <DocType 
            documentType={documentType}
            setDocumentType={setDocumentType}
            documentSize={documentSize} 
            setDocumentSize={setDocumentSize} 
        />,
        <Requirement 
            title={title}
            setTitle={setTitle}
            bodyContent={bodyContent}
            setBodyContent={setBodyContent}
            designRequirement={designRequirement}
            setDesignRequirement={setDesignRequirement}
        />,
        <ThankYouPage />
    ]

    const clearForm = () => {
        setDocumentType('')
        setDocumentSize('')
        setTitle('')
        setBodyContent('')
        setDesignRequirement('')
    }

    const onSendRequirement = () => {
        console.log('sending: ', {
            email: props.userData.email,
            documentType,
            size: documentSize,
            title,
            bodyContent,
            designRequirement
          })
        fetch(process.env.REACT_APP_SERVER_URL + endpoints.DESIGN_REQUIREMENT, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                creator: {
                  email: props.userData.email
                },
                requirement: {
                  documentType,
                  size: documentSize,
                  title,
                  bodyContent,
                  designRequirement
                }
              })
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.status==='success') {
                    console.log(data)
                    setPageInd(pageInd+1)
                    clearForm()
                }
            })
            .catch(e => console.log(e))
    }

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
            primaryBtnClick={() => {
                if (pageInd === pageArray.length-2) {
                    onSendRequirement()
                } else {
                    setPageInd(pageInd+1)
                }
            }}
            closeBtnText={'Close'}
            onClose={() => onClose()}
            thirdBtnText={pageInd === 0 || pageInd === pageArray.length-1 ? '' : 'Back'}
            thirdBtnClick={() => setPageInd(pageInd-1)}
        >
            { getPage(pageInd, setPageInd) }
        </Modal>
    )
}

export default connect(mapStateToProps)(DemandModal)