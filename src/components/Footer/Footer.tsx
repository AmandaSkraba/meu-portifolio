import { Container, Grid, styled, Typography } from "@mui/material";
import StyledSocialButtons from "../SocialButtons/StyledSocialButtons";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
    const StyledFooter = styled("div")(({ theme }) => ({
        height: '15vh',
        width: '100%',
        display: 'flex',
        alignItems: "center",
        backgroundColor: theme.palette.secondary.main,


    }));

    return (
        <>
            <StyledFooter>
                <Container>
                    <Grid container display="flex">
                        <Grid item xs={6} md={10} display="flex" alignItems="center">
                            <FavoriteIcon color="primary"/>
                            <Typography marginLeft={1} color="white" variant="body1">Criado com carinho por Amanda Skraba!</Typography>
                        </Grid>
                        <Grid item xs={6} md={2} display="flex" justifyContent="end">
                            <StyledSocialButtons></StyledSocialButtons>
                        </Grid>
                    </Grid>
                </Container>
            </StyledFooter>
        </>
    )
}

export default Footer
