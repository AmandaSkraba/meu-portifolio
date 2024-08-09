import { Container, Grid, styled, Typography } from "@mui/material"
import StyledOutlineChip from "../../../../components/Chip/StyledChip";
import ProgressLinear from "../../../../components/LinearProgress/LinearProgress";

const Skills = () => {
    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        alignItems: "center",
        height: '75vh',
    }));
    return (
        <>

            <StyledSkills>
                <Container>
                    <Grid container display="flex" flexDirection="column" alignContent="center">
                        <Grid display="flex" flexDirection="column" alignItems="center" >
                            <StyledOutlineChip label="Skills"></StyledOutlineChip>
                            <Typography marginTop={2} color="primary.contrastText" variant="h4">Confira minhas habilidades!</Typography>
                        </Grid>
                        <Grid xs item>
                            <ProgressLinear label="HTML e CSS" />
                        </Grid>
                    </Grid>
                </Container>
            </StyledSkills>
        </>
    )
}

export default Skills
