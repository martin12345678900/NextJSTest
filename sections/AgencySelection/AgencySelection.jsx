import { Card } from "~/collections";
import {
    StyledCardsContainer, 
    StyledContainter, 
    StyledImageWrapper, 
    StyledSubContainer, 
    StyledSubtitle, 
    StyledTitle 
} from "./elements";

import Image from 'next/image';


export const AgencySelection = ({ title, subtitle, image, cards  }) => {
    return (
        <StyledContainter>
            <StyledTitle>{title}</StyledTitle>
            <StyledSubtitle>{subtitle}</StyledSubtitle>
            <StyledSubContainer>
                <StyledImageWrapper width={image.width} height={image.height}>
                    <Image src={image.src} layout="responsive" width={image.width} height={image.height} />
                </StyledImageWrapper>                        
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