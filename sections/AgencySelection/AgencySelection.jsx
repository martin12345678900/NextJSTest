import { Card } from "../../collections/Card/Card";
import { StyledCardsContainer, StyledContainter, StyledImage, StyledSubContainer, StyledSubtitle, StyledTitle } from "./elements";
//тук ли си
export const AgencySelection = ({ title, subtitle, image, cards  }) => {
    return (
        <StyledContainter>
            <StyledTitle>{title}</StyledTitle>
            <StyledSubtitle>{subtitle}</StyledSubtitle>
            <StyledSubContainer>
                <StyledImage
                    width={image.width}
                    height={image.height}
                    src={image.src}
                    alt={image.alt}
                />
                <StyledCardsContainer>
                    <Card 
                        icon={cards[0].icon}
                        title={cards[0].title}
                        description={cards[0].description}
                    />
                    <Card
                        icon={cards[1].icon}
                        title={cards[1].title}
                        description={cards[1].description}
                    />
                    <Card
                        icon={cards[2].icon}
                        title={cards[2].title}
                        description={cards[2].description} 
                    />
                </StyledCardsContainer>
            </StyledSubContainer>
        </StyledContainter>
    )
}   