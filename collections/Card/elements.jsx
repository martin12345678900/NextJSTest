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
    justify-content: center;
    //transition: .3s;
    &:hover {
        border: 2px solid #1589FF;
        width: 105%;
        //transform: scaleX(1.1);
        & h4 {
            color: #1589FF;
            text-decoration: underline;
        }
    }
`;

export const StyledIconWrapper = styled(({ ...props}) => <div {...props} />)`
    padding: 1.5rem;
`;

export const StyledCardDetailsWrapper = styled(({ ...props}) => <div {...props} />)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 1rem 1rem 2rem;
    @media all and (max-width: 1024px) {
        padding-top: 2rem;
        & div {
            font-size: 1rem;
        }
        & p {
            font-size: .85rem;
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



