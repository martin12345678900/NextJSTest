import { StyledCard, StyledCardDescription, StyledCardDetailsWrapper, StyledCardTitle, StyledIconWrapper } from "./elements"

// The Card to be exported goes here
export const Card = ({ title, icon, description }) => {
    return (
        <StyledCard>
            <StyledIconWrapper>{icon}</StyledIconWrapper>
            <StyledCardDetailsWrapper>
                <StyledCardTitle>{title}</StyledCardTitle>
                <StyledCardDescription>{description}</StyledCardDescription>
            </StyledCardDetailsWrapper>
        </StyledCard>
    )
}