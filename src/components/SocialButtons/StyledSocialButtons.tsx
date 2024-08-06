import { IconButton, styled } from "@mui/material";
import { Instagram, FacebookRounded, WhatsApp, LinkedIn } from '@mui/icons-material';

/*import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';*/

const onButtonSocial = (socialButton: string) => {
    const link = document.createElement("a");
    switch (socialButton) {
        case 'instagram':
            link.href = "https://www.instagram.com/ei_skraba/";
            break;
        case 'facebook':
            link.href = "https://www.facebook.com/amanda.skraba.5/";
            break;
        case 'linkedin':
            link.href = "https://www.linkedin.com/in/amanda-skraba/";
            break;
        case 'whatsapp':
            link.href = "https://api.whatsapp.com/send?phone=5541988222242&text=Ol%C3%A1,%20encontrei%20seu%20portif%C3%B3lio%20e%20gostaria%20de%20conversar!";
            break;
    }
    link.target = "_blank";
    link.click();
}

const StyledSocialButtons = () => {
    const StyledSocialButtons = styled(IconButton)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        marginTop: 15
    }));

    return (
        <>
            <StyledSocialButtons aria-label="delete" onClick={() => onButtonSocial('instagram')}>
                <Instagram />
            </StyledSocialButtons>
            <StyledSocialButtons aria-label="delete" onClick={() => onButtonSocial('facebook')}>
                <FacebookRounded />
            </StyledSocialButtons>
            <StyledSocialButtons aria-label="whatsapp" onClick={() => onButtonSocial('whatsapp')}>
                <WhatsApp />
            </StyledSocialButtons>   
            <StyledSocialButtons aria-label="linkedin" onClick={() => onButtonSocial('linkedin')}>
                <LinkedIn />
            </StyledSocialButtons>       
        </>
    )
}

export default StyledSocialButtons
