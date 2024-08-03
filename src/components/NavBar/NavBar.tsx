import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const NavBar = () => {

    const StyledToobar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: theme.palette.secondary.main
    }));

    const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: theme.palette.secondary.main,

        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        }
    }));

    return (
        <>
            <AppBar position="relative">
                <StyledToobar>
                    <StyledMenuItem>Início</StyledMenuItem>
                    <StyledMenuItem>Sobre mim</StyledMenuItem>
                    <StyledMenuItem>Projetos</StyledMenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar
