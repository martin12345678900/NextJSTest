// Styled elements for the Card go here
import styled from "styled-components";
import { SectionInnerHeading, SectionParagraph } from "~/components";

export const StyledCard =  styled(({ ...props}) => <div {...props} />)`
    background-color: whitesmoke;
    width: 100%;
    height: 85px;
    margin-bottom: 1.8rem;
    padding: 1.5rem;
    border-radius: 8px;
    display: flex;
    position: relative;
    &:hover {
        border: 2px solid #1589FF;
        & h4 {
            color: #1589FF;
            text-decoration: underline;
        }
    }
`;

export const StyledIconWrapper = styled(({ ...props}) => <div {...props} />)`
    position: absolute;
    left: 5%;
    top: 15%;
    padding: 1.5rem;
`;

export const StyledCardDetailsWrapper = styled(({ ...props}) => <div {...props} />)`
    position: absolute;
    left: 20%;
    top: -20%;
    display: flex;
    flex-direction: column;
    padding: 1.3rem 1rem 1rem 2.3rem;
    @media all and (max-width: 1024px) {
        padding-top: 2.5rem;
        & div {
            font-size: .8rem;
        }
        & h4 {
            font-size: 1rem;
        }
    }
`;

export const StyledCardTitle = styled((props) => <SectionInnerHeading {...props} /> )`
    margin-bottom: -1.7rem;
    font-size: 1.2rem;
    font-weight: bold;
`;

export const StyledCardDescription = styled((props) => <SectionParagraph {...props} />)`
    font-size: .95rem;
`;



