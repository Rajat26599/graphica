import { MyBoard } from "./styles"

export const BackgroundBoard = (props) => {
    return (
        <>
            <MyBoard
                $borderStyles={props.$borderStyles}
                width={props.width}
                $bgColor={props.$bgColor}
            >
                <h4>{props.heading}</h4>
                {props.children}
            </MyBoard>
        </>
    )
} 

BackgroundBoard.defaultProps = {
    width: '200px',
    $borderStyles: {
        width: '1px',
        type: 'solid',
        color: 'black',
        radius: '0px'
    },
    $bgColor: 'lightgray',
}