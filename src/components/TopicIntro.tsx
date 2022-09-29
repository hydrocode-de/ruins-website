import { Box, Typography } from "@mui/material";

interface TopicIntroProps {
    title: string;
    imgSrc: string;
}

const TopicIntro: React.FC<TopicIntroProps> = ({ title, imgSrc }) => {
    return <>
        <Box sx={{height: '100vh', p: '5rem'}}>
            <Typography variant="h1" component="div">
                { title }
            </Typography>
            <Box sx={{
                height: 'calc(100% - 70px - 64px - 3rem)',
                width: '100%',
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover',
                boxShadow: '0 0 8px 8px white inset',
                borderRadius: '5px',
                mt: '5rem'
            }}></Box>
        </Box>
    </>
}

export default TopicIntro