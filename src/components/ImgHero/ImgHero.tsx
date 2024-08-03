import { styled } from "@mui/material";
import Avatar from "../../../src/assets/images/testeimg.jpg"

const ImgHero = () => {
    const ImgHero = styled("div")(({ theme }) => ({
        width: "calc(100%/1.2)",      
        backgroundImage: `url(${Avatar})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50vw 0 0 50vw",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "flex-end",
        backgroundPositionY: "calc(100% / 4)",
    }));

    const ShapeAbove = styled("div")(({ theme }) => ({
        width: "42%",
        height: "20px",
        background: `${theme.palette.primary.main}`,
        transform: "translateY(-9px)",
        borderRadius: "15px 0 0 15px"
    }));

    const ShapeBelow = styled("div")(({ theme }) => ({
        width: "65%",
        height: "20px",
        background: `${theme.palette.primary.main}`,
        transform: "translateY(9px)",
        borderRadius: "15px 0 0 15px"
    }));

    return (
        <>
            <ImgHero sx={{height:{xs:"70%", md:"calc(100%/1.55)"}}}>
                <ShapeAbove></ShapeAbove>
                <ShapeBelow></ShapeBelow>
            </ImgHero>
        </>
    )
}

export default ImgHero
