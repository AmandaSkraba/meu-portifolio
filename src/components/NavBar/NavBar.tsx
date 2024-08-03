import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const NavBar = () => {

    const StyledToobar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: theme.palette.secondary.main
    }));

    return (
        <>
            <AppBar position="relative">
                <StyledToobar>
                    <MenuItem>Início</MenuItem>
                    <MenuItem>Projetos</MenuItem>
                    <MenuItem>Contato</MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar
