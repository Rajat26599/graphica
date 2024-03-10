import styled from "styled-components";

export const DashboardWrapper = styled.div`
    padding: 0 1rem;
`

export const SubDashboardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const MyDesignRequirementWrapper = styled.div`
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.5rem;

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
`
export const DateWrapper = styled.p`
    font-size: 0.8rem;
`
export const BackgroundBoardWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`