import { Grid, styled, Typography } from "@mui/material";
import ImgHero from "../../../../components/ImgHero/ImgHero";
import StyledButtonOutline from "../../../../components/Buttons/StyledButtonOutline";
import StyledButton from "../../../../components/Buttons/StyledButton";


const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        alignItems: "center"
    }));

    return (
        <>
            <StyledHero>
                <Grid container spacing={2} display="flex" alignItems="center">
                    <Grid item={true} xs={12} md={6} sx={{ order: { xs: 2, sm: 1 } }}>
                        <Typography color="primary.contrastText" variant="h6" textAlign="center">Desenvolvedora Front-end</Typography>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center">Amanda Skraba</Typography>
                        <Grid container justifyContent="center" spacing={3} marginTop={1}>
                            <Grid item={true} xs={12} md={4} sx={{ marginInline: {xs: "50px", md:"0"} }} justifyContent="center">
                                <StyledButtonOutline>
                                    <Typography variant="button">Baixar meu curriculo</Typography>
                                </StyledButtonOutline>
                            </Grid>
                            <Grid item={true} xs={12} md={4} sx={{ marginInline: {xs: "50px", md:"0"} }} justifyContent="center">
                                <StyledButton>
                                    <Typography variant="button">Entrar em contato</Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item={true} xs={12} md={6}
                        sx={{ order: { xs: 1, sm: 2 }, height: { xs: '60vh', md: '100vh' }, width: { xs: '20vw', md: '100vw' } }}
                        display="flex" alignItems="center" justifyContent="end">
                        <ImgHero></ImgHero>
                    </Grid>
                </Grid>
            </StyledHero >
        </>
    )
}

export default Hero
