import { AlertWrapper, MyAlert } from "./styles"

export const Alert = (props) => {
    return (
        <AlertWrapper>
            <MyAlert>
                <dt>{props.errorDesc}</dt>
            </MyAlert>
        </AlertWrapper>
    )
}

Alert.defaultProps = {
    errorDesc: ''
}