import { Chip, styled } from "@mui/material";

interface StyledChipProps {
    label: String
}


const StyledOutlineChip: React.FC<StyledChipProps> = ({ label }) => {
    const StyledOutlineChip = styled(Chip)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        borderColor: theme.palette.primary.main,
        textTransform: 'uppercase',
        padding: 5
    }));

    return (
        <>
            <StyledOutlineChip label={label} variant="outlined" size="small"></StyledOutlineChip>
        </>
    )
}

export default StyledOutlineChip
