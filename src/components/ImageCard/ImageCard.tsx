import { styled } from "@mui/material"

interface ImageCardProps {
    img: string,
    link: string
}

const ImageCard: React.FC<ImageCardProps> = ({ img, link }) => {

    const StyledImage = styled("div")(() => ({
        alignItems: "center",
        height: '280px !important',
        width: "280px !important",
        backgroundImage: 'url("' + img + '")',
        backgroundSize: "cover"
    }));


    return (
        <>
            <a href={link} target="_blank">
                <StyledImage />
            </a>
        </>
    )
}

export default ImageCard
