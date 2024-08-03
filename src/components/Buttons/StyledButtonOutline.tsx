import { styled } from "@mui/material";
import React, { ReactNode } from "react";

interface StyledButtonOutlineProps {
    children: ReactNode
}

const StyledButtonOutline: React.FC<StyledButtonOutlineProps> = ({ children }) => {
    const StyledButtonOutline = styled("button")(({ theme }) => ({
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.primary.contrastText}`,
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

        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        }
    }));


    return (
        <>
            <StyledButtonOutline>
                {children}
            </StyledButtonOutline>
        </>
    )
}

export default StyledButtonOutline
