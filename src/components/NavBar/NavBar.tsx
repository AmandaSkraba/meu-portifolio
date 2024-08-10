import { AppBar, Button, styled, Toolbar } from "@mui/material"
import { Link } from 'react-scroll'

const NavBar = () => {

    const StyledToobar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: theme.palette.secondary.main
    }));

    /*const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: theme.palette.secondary.main,

        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        }
    }));*/

    return (
        <>
            <AppBar position="fixed">
                <StyledToobar>
                    <Link to="hero" smooth={true} duration={500}>
                        <Button color="inherit">Início</Button>
                    </Link>
                    <Link to="about" smooth={true} duration={500}>
                        <Button color="inherit">Sobre mim</Button>
                    </Link>
                    <Link to="skills" smooth={true} duration={500}>
                        <Button color="inherit">Habilidades</Button>
                    </Link>
                    <Link to="projects" smooth={true} duration={500}>
                        <Button color="inherit">Projetos</Button>
                    </Link>
                </StyledToobar>
            </AppBar>
        </>
    )


}

export default NavBar
