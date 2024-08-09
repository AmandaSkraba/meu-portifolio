import { LinearProgress, styled, Typography } from "@mui/material"

interface ProgressLinearProps {
    label: String,
    value: number
}

const ProgressLinear: React.FC<ProgressLinearProps> = ({ label, value }) => {
    const StyledProgressLinear = styled(LinearProgress)(() => ({
        display: "flex",
        alignItems: "center",
        height: '10px',
        backgroundColor: 'rgb(19 22 23)',
        borderRadius: 20
    }));


    return (
        <>
            <Typography marginTop={2} color="primary.contrastText" variant="body1">{label}</Typography>
            <StyledProgressLinear value={value} variant="determinate" title={value + "%"} />
        </>
    )
}

export default ProgressLinear
