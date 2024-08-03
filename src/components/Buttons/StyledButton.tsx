import { styled } from "@mui/material";
import React, { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode    
    onclick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onclick }) => {
    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "50vh",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        cursor: 'pointer',
        textTransform: "uppercase",
        fontSize: '12px',

        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            border: `1px solid ${theme.palette.primary.dark}`,
        }
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
