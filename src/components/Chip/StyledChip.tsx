import { Chip, styled } from "@mui/material";

const StyledOutlineChip = () => {
    const StyledOutlineChip = styled(Chip)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        borderColor: theme.palette.primary.main,
        textTransform: 'uppercase',
        padding: 5
    }));

    return (
        <>
            <StyledOutlineChip label="Minha História" variant="outlined" size="small"></StyledOutlineChip>
        </>
    )
}

export default StyledOutlineChip
