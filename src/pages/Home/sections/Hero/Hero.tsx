import { Grid, styled, Typography } from "@mui/material";
import ImgHero from "../../../../components/ImgHero/ImgHero";
import StyledButtonOutline from "../../../../components/Buttons/StyledButtonOutline";
import StyledButton from "../../../../components/Buttons/StyledButton";
import PDFDocument from "../../../../assets/documents/Curriculo.pdf"
import theme from "../../../../theme";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        alignItems: "center"
    }));

    const onButtonDowloadClick = () => {
        const pdfUrl = PDFDocument;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Curriculo.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const onButtonContact = () =>{
        console.log("contato");
        const link = document.createElement("a");
        link.href = "https://api.whatsapp.com/send?phone=5541988222242&text=Ol%C3%A1,%20encontrei%20seu%20portif%C3%B3lio%20e%20gostaria%20de%20conversar!";
        link.target = "_blank";
        link.click();
    }

    return (
        <>
            <StyledHero>
                <Grid container spacing={2} display="flex" alignItems="center">
                    <Grid item={true} xs={12} md={6} sx={{ order: { xs: 2, sm: 1 } }}>
                        <Typography color="primary.contrastText" variant="h6" textAlign="center">Desenvolvedora Front-end</Typography>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center">Amanda Skraba</Typography>
                        <Grid container justifyContent="center" spacing={3} marginTop={1}>
                            <Grid item={true} xs={12} md={4} sx={{ marginInline: { xs: "50px", md: "0" } }} justifyContent="center">
                                <StyledButtonOutline onclick={() => onButtonDowloadClick()}>
                                    <Typography variant="button">Baixar meu curriculo</Typography>
                                </StyledButtonOutline>
                            </Grid>
                            <Grid item={true} xs={12} md={4} sx={{ marginInline: { xs: "50px", md: "0" } }} mb={2} justifyContent="center">
                                <StyledButton backgroundColor={theme.palette.primary.main} textColor={theme.palette.primary.contrastText} onclick={() => onButtonContact()}>
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
