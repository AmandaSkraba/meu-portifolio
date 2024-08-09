import { Container, Grid, styled, Typography } from "@mui/material"
import StyledOutlineChip from "../../../../components/Chip/StyledChip";
import ProgressLinear from "../../../../components/LinearProgress/LinearProgress";

const Skills = () => {
    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        alignItems: "center",
        height: '75vh',       

        [theme.breakpoints.down('md')]: { 
            paddingTop:40, 
            paddingBottom:40, 
            height: '100%',          
        },
    }));
    return (
        <>
            <StyledSkills>
                <Container>
                    <Grid container display="flex" flexDirection="column" alignContent="center">
                        <Grid item md={12} display="flex" flexDirection="column" alignItems="center" marginBottom={4}>
                            <StyledOutlineChip label="Skills"></StyledOutlineChip>
                            <Typography marginTop={2} color="primary.contrastText" variant="h4">Confira minhas habilidades!</Typography>
                        </Grid>
                        <Grid container rowSpacing={1} columnSpacing={4}>
                            <Grid xs={12} sm={12} md={4} item>
                                <ProgressLinear label="HTML" value={100} />
                            </Grid>
                            <Grid xs={12} sm={12} md={4} item>
                                <ProgressLinear label="CSS" value={100} />
                            </Grid>
                            <Grid xs={12} sm={12} md={4} item>
                                <ProgressLinear label="Javascript" value={65} />
                            </Grid>
                            <Grid xs={12} sm={12} md={4} item>
                                <ProgressLinear label="Bootstrap" value={100} />
                            </Grid>
                            <Grid xs={12} sm={12} md={4} item>
                                <ProgressLinear label="Jquery" value={75} />
                            </Grid>
                            <Grid xs={12} sm={12} md={4} item>
                                <ProgressLinear label="Typescript" value={45} />
                            </Grid>
                            <Grid xs={12} sm={12} md={4} item>
                                <ProgressLinear label="Angular" value={45} />
                            </Grid>
                            <Grid xs={12} sm={12} md={4} item>
                                <ProgressLinear label="React" value={20} />
                            </Grid>
                            <Grid xs={12} sm={12} md={4} item>
                                <ProgressLinear label="Figma" value={90} />
                            </Grid>
                            <Grid xs={12} sm={12} md={4} item>
                                <ProgressLinear label="GIT/Github" value={55} />
                            </Grid>
                            <Grid xs={12} sm={12} md={4} item>
                                <ProgressLinear label=".Net" value={25} />
                            </Grid>
                            <Grid xs={12} sm={12} md={4} item>
                                <ProgressLinear label="MySQL" value={25} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledSkills>
        </>
    )
}

export default Skills
