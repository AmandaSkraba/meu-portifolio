import { LinearProgress, styled, Typography } from "@mui/material"

interface ProgressLinearProps {
    label: String
}

const ProgressLinear: React.FC<ProgressLinearProps> = ({ label }) => {
    const StyledProgressLinear = styled(LinearProgress)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        height: '10px',
        backgroundColor: 'rgb(19 22 23)',
        borderRadius: 20
    }));


    return (
        <>
            <Typography marginTop={2} color="primary.contrastText" variant="body1">{label}</Typography>
            <StyledProgressLinear value={100} variant="determinate" title="test" />
        </>
    )
}

export default ProgressLinear
