import { styled, Typography } from "@mui/material"

const TextWork = () => {
    const StyledText = styled(Typography)(() => ({
        fontSize: 95,
        lineHeight: 1,
        textTransform:'uppercase',
        fontWeight:900,
        userSelect: 'none'
    }));

    const list = [0.2, 0.4, 0.6, 0.8, 1];

    return (
        <>
            {list.map((_, index) =>
                <StyledText key={index} color="white" sx={{ opacity: list[index] }}>Works</StyledText>
            )}

        </>
    )
}

export default TextWork
