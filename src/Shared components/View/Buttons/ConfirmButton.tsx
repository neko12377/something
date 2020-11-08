import React from "react";
import styled from "styled-components";
import { Confirm } from "../../Controller/Confirm event";

export interface ButtonProps {
    width: number;
    buttonColor: string;
    borderColor?: string;
    borderRadius?: number;
    onClick?: Confirm;
    children: React.ReactNode;
}

const StyledButton = styled.button`
      width: ${({ width }) => width}px;
      height: ${({ width }) => 0.6 * width}px;
      background-color: ${({ buttonColor }) => buttonColor || "white"};
      color: white;
      border: ${({ width }) => width * 0.02}px ${({ borderColor }) => borderColor || "black"} solid;
      border-radius: ${({ borderRadius }) => borderRadius}px;
      outline: none;
      cursor: pointer;
 `;

const Button: React.FC<ButtonProps> = (
    {
        width, buttonColor, borderColor, borderRadius, onClick, children,
    }: ButtonProps,
) => (
    <StyledButton
        width={width}
        buttonColor={buttonColor}
        borderColor={borderColor}
        borderRadius={borderRadius}
        onClick={onClick}
    >
        {children}
    </StyledButton>
);

export default Button;
