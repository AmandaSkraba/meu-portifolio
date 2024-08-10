import { styled } from "@mui/material";
import React, { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode,
    onclick: () => void,
    backgroundColor: any,
    textColor: any
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onclick, backgroundColor, textColor }) => {

    const StyledButton = styled("button")(() => ({
        border: `1px solid ${backgroundColor}`,
        borderRadius: "50vh",
        padding: "5px 15px",
        width: "100%",
        color: textColor,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        cursor: 'pointer',
        textTransform: "uppercase",
        fontSize: '12px',
        backgroundColor: backgroundColor,

       
    }));

    return (
        <>
            <StyledButton onClick={onclick}>
                {children}
            </StyledButton>
        </>
    )
}

export default StyledButton
