import styled from "styled-components";

export const StyledContainter = styled.div`
    padding: 5rem;
    height: 85vh;
    background: url("img/background.png");
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: left 15% top 80%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media (max-width: 1024px) {
        background-position: left 20% top 80%;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 2.6rem;
    font-weight: bold;
    text-align: center;
    font-family: inherit;
`;

export const StyledSubtitle = styled.h4`
    font-family: inherit;
    font-size: 1.4rem;
    text-align: center;
    font-weight: 300;
    margin-top: -.8rem;
`;

export const StyledSubContainer = styled.div`
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

export const StyledImage = styled.img`
    width: ${(props) => props.width}%;
    height: ${(props) => props.height}px;
    border-radius: 8px;
`;

export const StyledCardsContainer = styled.div`
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


