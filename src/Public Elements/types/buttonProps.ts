import React from "react";
type onClick = () => void;

export interface buttonProps {
    width: number;
    buttonColor: string;
    borderColor?: string;
    borderRadius?: number;
    onClick?: onClick;
    children: React.ReactNode;
}
