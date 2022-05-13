import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material";
import { AgricultureOutlined, WbSunnyOutlined, FloodOutlined, BubbleChartOutlined } from '@mui/icons-material';
import AppHeader from "./components/AppHeader";
import { useState } from "react";
import { TOPIC_TYPE } from "./topics.model";


const MobileHome: React.FC = () => {
    const [activeTopic, setActiveTopic] = useState<TOPIC_TYPE>('uncertainty');

    return (
        <>
            <AppHeader />
            
            <Box sx={{p: 2, pb: 7, pt: 5}}>
                <h1>Please visit the Desktop version.</h1>    
            </Box>

            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={4}>
                <BottomNavigation value={activeTopic} onChange={(event, newTopic) => setActiveTopic(newTopic)} showLabels>
                    <BottomNavigationAction label="Uncertainty" icon={<BubbleChartOutlined />} />
                    <BottomNavigationAction label="Weather" icon={<WbSunnyOutlined />} />
                    <BottomNavigationAction label="Agriculture" icon={<AgricultureOutlined />} />
                    <BottomNavigationAction label="Extremes" icon={<FloodOutlined />} />
                </BottomNavigation>
            </Paper>

            
        </>
    )
}

export default MobileHome;