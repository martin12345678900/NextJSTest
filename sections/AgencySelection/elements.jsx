import styled from "styled-components";
import { SectionHeading, SectionSubheading } from "~/components";

export { Card } from "~/collections";

export const StyledContainter = styled(({ ...props}) => <div {...props} />)`
    height: 90vh;
    position: relative;
    font-family: inherit;
`;

export const StyledCardsContainer = styled((props) => <div {...props} />)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    margin-left: 6%;
    margin-top: 2rem;
    @media (max-width: 1024px) {
        width: 70%;
        margin-left: -10%;
    }
`;

export const StyledBackgroundImageWrapper = styled(({ ...props}) => <div {...props}/>)`
    width: 870px;
    height: 500px;
    position: absolute;
    top: 20%;
    left: 5%;
    z-index: -1;
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
            width: 80%;
        }
    }
`;


