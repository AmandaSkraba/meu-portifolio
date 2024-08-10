import { Container, Grid, styled } from "@mui/material";
import ImageCard from "../../../../components/ImageCard/ImageCard";
import ImgZimmer from "../../../../assets/images/projectZimmer.png";
import ImgCooperhec from "../../../../assets/images/projectCooperhec.png";
import ImgSallocin from "../../../../assets/images/projectSallocin.png";
import TextWork from "../../../../components/TextWork/TextWork";
import CardContact from "../../../../components/CardContact/CardContact";


const Projects = () => {
    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: '#131617',
        alignItems: "center",
        height: '100%',
        paddingTop: "10vh",
        paddingBottom: "10vh",

        [theme.breakpoints.down('md')]: {
            paddingTop: 40,
            paddingBottom: 40,
            height: '100%',
        },
    }));

    const StyledGridContainer = styled(Grid)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            justifyContent: "center"
        },
    }));

    const StyledGridItem = styled(Grid)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    }));

    return (
        <>
            <StyledProjects>
                <Container>
                    <StyledGridContainer container rowSpacing={2} columnSpacing={2}>
                        <Grid item md={4} display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Grid item md={12}>
                                <ImageCard img={ImgZimmer} link="https://www.transportadorazimmer.com.br/"/>
                            </Grid>
                            <Grid item md={12}>
                                <ImageCard img={ImgCooperhec} link="https://www.cooperhec.com.br/"/>
                            </Grid>
                        </Grid>

                        <StyledGridItem item md={4} display="flex" justifyContent="center" >
                            <Grid item md={12} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <TextWork></TextWork>
                            </Grid>
                        </StyledGridItem>

                        <Grid item md={4} display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Grid item md={12}>
                                <ImageCard img={ImgSallocin} link="https://sallocin.com/" />
                            </Grid>
                            <Grid item md={12}>
                                <CardContact />
                            </Grid>
                        </Grid>
                    </StyledGridContainer>
                </Container>
            </StyledProjects>
        </>
    )
}

export default Projects
