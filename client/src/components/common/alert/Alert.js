import { AlertWrapper, MyAlert } from "./styles"

export const Alert = (props) => {
    return (
        <AlertWrapper>
            <MyAlert>
                <p>{props.errorDesc}</p>
            </MyAlert>
        </AlertWrapper>
    )
}

Alert.defaultProps = {
    errorDesc: ''
}