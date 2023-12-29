import styled from "styled-components";

interface ButtonContainerProps {
    variant: 'primary'
}

const buttonVariants = {
    primary: 'purple'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`


    ${props => {
        return `background-color: ${buttonVariants[props.variant]}`
    }}
`