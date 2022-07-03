import { Box, Zoom } from "@mui/material";
import { useState } from "react";
import ScrollButton from "./ScrollButton";

const ScrollButtonArea: React.FC = () => {
    const [inView, setInview] = useState<boolean>(false);

    return (       
        <Box
            onMouseEnter={() => setInview(true)} 
            onMouseLeave={() => setInview(false)}
            sx={{
                width: '100vw',
                position: 'fixed',
                bottom: 0,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'end',
                pb: 1,
                height: '20vh'
            }}
        >
            <Box></Box>
            <Zoom in={inView} timeout={400}>
                <Box>
                    <ScrollButton mode="pageDown" color="default" style={{marginRight: '1rem'}} variant="extended" addKeyEvent />
                    <ScrollButton mode="pageUp" color="default" style={{marginRight: '1rem'}} variant="extended" addKeyEvent />
                </Box>
            </Zoom>
            <Zoom in={inView} timeout={600}>
                <Box sx={{mr: '1.5rem'}}>
                    <ScrollButton mode="top" color="default" />
                </Box>
            </Zoom>
        </Box>
    );
}

export default ScrollButtonArea;
