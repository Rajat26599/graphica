import styled from "styled-components";

export const MyBoard = styled.div`
    ${props => (
        `   
            max-height: 50vh;
            width: ${props.width};
            border: ${props.$borderStyles.width} ${props.$borderStyles.type} ${props.$borderStyles.color};
            border-radius: ${props.$borderStyles.radius};
            background-color: ${props.$bgColor};
            padding: 0.5rem;
            overflow-y: scroll;
            overflow-x: hidden;
            scrollbar-color: ${props.$borderStyles.color} transparent;
            scrollbar-width: thin;
            text-overflow: ellipsis;
        `
    )}
`