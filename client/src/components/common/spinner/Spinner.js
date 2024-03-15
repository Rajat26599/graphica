import { MySpinner, MySpinnerWrapper, SpinnerWrapper } from "./styles"
import { useEffect } from "react"

const Spinner = (props) => {

    useEffect(() => {
        if(props.isLoading) {
            window.scrollTo(0, 0);
            document.body.style.overflowY = 'hidden';
        }
        return () => document.body.style.overflowY = 'auto';
    }, [props.isLoading])

    return (
        <SpinnerWrapper>
            <MySpinnerWrapper>
                <MySpinner></MySpinner>
            </MySpinnerWrapper>
        </SpinnerWrapper>
    )    
}

export default Spinner