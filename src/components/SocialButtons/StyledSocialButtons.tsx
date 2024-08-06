import { IconButton, styled } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const StyledSocialButtons = () => {
    const StyledSocialButtons = styled(IconButton)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        marginTop: 15
    }));

    return (
        <>
            <StyledSocialButtons aria-label="delete">
                <InstagramIcon />
            </StyledSocialButtons>
            <StyledSocialButtons aria-label="delete">
                <FacebookRoundedIcon />
            </StyledSocialButtons>
            <StyledSocialButtons aria-label="delete">
                <WhatsAppIcon />
            </StyledSocialButtons>
        </>
    )
}

export default StyledSocialButtons
