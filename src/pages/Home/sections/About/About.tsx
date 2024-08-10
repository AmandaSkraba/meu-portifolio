import { Box, Container, Grid, styled, Typography } from "@mui/material"
import IAGirl from "../../../../assets/images/IAGirl.png"
import StyledOutlineChip from "../../../../components/Chip/StyledChip";
import StyledSocialButtons from "../../../../components/SocialButtons/StyledSocialButtons";

const About = () => {
    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: '#131617',
        display: "flex",
        alignItems: "center",
        height: '75vh',
        paddingTop: 80,
        paddingBottom: 80,
        [theme.breakpoints.up('xs')]: {
            height: '100%',
        }
    }));

    return (
        <>
            <StyledAbout>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item={true} xs={12} md={5} display="flex" alignItems="center" justifyContent="center">
                            <Box component="img"
                                sx={{
                                    borderRadius: 3,
                                    height: 380,
                                    width: 380,
                                    maxHeight: { xs: '100%', md: 450 },
                                    maxWidth: { xs: '100%', md: 450 },
                                }}
                                alt="The house from the offer."
                                src={IAGirl}
                            />
                        </Grid>
                        <Grid item={true} xs={12} md={7} display="flex" justifyContent="center" sx={{ textAlign: { xs: 'justify', md: 'justify' } }} >
                            <Grid item sx={{ maxWidth: { xs: 380, md: '100%' } }}>
                                <StyledOutlineChip label="Minha História"></StyledOutlineChip>
                                <Typography marginTop={2} color="primary.contrastText" variant="h4">Um Pouco de mim...</Typography>
                                <Typography marginTop={2} color="primary.contrastText" variant="body1">
                                    Sou estudante de Engenharia de Software, cursando o penúltimo ano na Universidade UniCV e estou focada em me tornar uma especialista em desenvolvimento Full-Stack.
                                </Typography>
                                <Typography color="primary.contrastText" variant="body1" marginBottom="15px">
                                    Iniciei na área aos 14 anos, quando fiz meu primeiro curso “Eu posso programar minha página web”, da Microsoft, voltado para meninas na TI.
                                </Typography>
                                <StyledSocialButtons></StyledSocialButtons>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledAbout>
        </>
    )
}

export default About
