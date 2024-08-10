import { Grid, styled, Typography } from "@mui/material"
import StyledButton from "../Buttons/StyledButton";
import theme from "../../theme";

const CardContact = () => {

    const onButtonContact = () => {
        console.log("contato");
        const link = document.createElement("a");
        link.href = "https://api.whatsapp.com/send?phone=5541988222242&text=Ol%C3%A1,%20encontrei%20seu%20portif%C3%B3lio%20e%20gostaria%20de%20conversar!";
        link.target = "_blank";
        link.click();
    }

    const StyledCardContact = styled("div")(({ theme }) => ({
        display: 'flex',
        alignItems: "center",
        height: '280px !important',
        width: "280px !important",
        backgroundColor: theme.palette.primary.main,
        justifyContent: "center"
    }));


    return (
        <>
            <StyledCardContact>
                <Grid container spacing={2} rowGap={3} justifyContent="center">
                    <Grid item md={10}>
                        <Typography textAlign="center" variant="h5" color={theme.palette.common.white}>Seu projeto pode <br/> ser o próximo!</Typography>
                        <Typography marginTop={2} textAlign="center" color={theme.palette.common.white}>Me mande uma mensagem, <br/> é só clicar aqui embaixo!</Typography>
                    </Grid>
                    <Grid item md={10}>
                        <StyledButton backgroundColor={theme.palette.common.white} textColor={theme.palette.primary.main} onclick={() => onButtonContact()}>
                            <Typography variant="button">Entrar em contato</Typography>
                        </StyledButton>
                    </Grid>
                </Grid>
            </StyledCardContact>
        </>
    )
}

export default CardContact
