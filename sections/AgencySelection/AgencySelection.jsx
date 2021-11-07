import {
    StyledBackgroundImageWrapper,
    StyledCardsContainer, 
    StyledContainter, 
    StyledImageWrapper, 
    StyledSubContainer, 
    StyledSubtitle, 
    StyledTitle,
    Card
} from "./elements";

import Image from 'next/image';

export const AgencySelection = ({ title, subtitle, image, cards, backgroundImage }) => {
    return (
        <StyledContainter>
            <StyledTitle>{title}</StyledTitle>
            <StyledSubtitle>{subtitle}</StyledSubtitle>
            <StyledBackgroundImageWrapper>
                <Image src={backgroundImage.src} alt={backgroundImage.alt} layout="responsive" width={backgroundImage.width} height={backgroundImage.height} />
            </StyledBackgroundImageWrapper>
            <StyledSubContainer>
                <StyledImageWrapper width={image.width} height={image.height}>
                    <Image src={image.src} alt={image.alt} layout="responsive" width={image.width} height={image.height} />
                </StyledImageWrapper>                        
                <StyledCardsContainer>
                    {cards.map((card, index) => <Card key={index} index={index + 1} {...card} />)}
                </StyledCardsContainer>
            </StyledSubContainer>
        </StyledContainter>
    )
}   
