import styled from "styled-components";
import { SectionHeading, SectionSubheading } from "~/components";

export const StyledContainter = styled(({ ...props}) => <div {...props} />)`
    height: 90vh;
    background: url("img/background.png");
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: left 10% top 70%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media (max-width: 1024px) {
        background-position: left 20% top 80%;
    }
`;

export const StyledImageWrapper = styled(({ ...props}) => <div {...props} />)`
    width: 310px;
    height: 500px;
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
    text-align: center;
`;


export const StyledSubtitle = styled((props) => <SectionSubheading {...props} />)`
    text-align: center;
    margin-top: -2.2rem;
`;

export const StyledSubContainer = styled(({ ...props}) => <div {...props} />)`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    padding-top: 2rem;
    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        & img {
            width: 70%;
        }
    }
`;


export const StyledCardsContainer = styled(({ ...props }) => <div {...props} />)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    margin-left: 6%;
    margin-top: 2rem;
    @media (max-width: 1024px) {
        width: 70%;
        margin-left: -12%;
        margin-top: 4rem;
    }
`;


