import React from "react";
import styled from "styled-components";
import { buttonProps } from "../types/buttonProps";

export default function ({
    width, buttonColor, borderColor, borderRadius, children,
}: buttonProps) {
    const Button = styled.button`
      width: ${width}px;
      height: ${0.6 * width}px;
      background-color: ${buttonColor};
      color: white;
      border: ${width * 0.02}px ${borderColor} solid;
      border-radius: ${borderRadius}px;
      outline: none;
      cursor: pointer;
  `;

    return (
        <Button>
            {children}
        </Button>
    );
}
