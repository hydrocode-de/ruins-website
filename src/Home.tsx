import { useState } from 'react';
import { Box, Grid } from "@mui/material";
import { InView } from 'react-intersection-observer'

import AppHeader from "./components/AppHeader"
import SideStepper from "./components/SideStepper";
import { TOPICS, TOPIC_TYPE } from './topics.model';
import ScrollButtonArea from './components/ScrollButtonArea';


// import the Topics
import UncertaintyTopic from './topics/Uncertainty';
import WeatherClimate from './topics/WeatherClimate';
import TemperatureShift from './topics/TemperatureShift';
import LanduseTopic from './topics/Landuse';
import ExtremesTopic from './topics/Extremes';


const Home = () => {
    // create state for active topic
    const [activeTopic, setActiveTopic] = useState<TOPIC_TYPE>('uncertainty');

    // The SideStetter needs a handler that sets active topic and scrolls
    const scrollHandler = (topic: TOPIC_TYPE) => {
        setActiveTopic(topic);
        TOPICS[topic].current!.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <>
            <AppHeader />
            
            <Grid container spacing={1} sx={{paddingTop: '64px'}}>
                
                <Grid item xs={2}>
                    <Box sx={{position: 'fixed', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <SideStepper jumpToTopic={scrollHandler} activeTopic={activeTopic} />    
                    </Box>
                </Grid>

                <Grid item xs={10} sx={{backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                    
                    <InView onChange={( inView ) => inView ? setActiveTopic('uncertainty') : null} >
                        <Box ref={TOPICS.uncertainty}>
                            <UncertaintyTopic />
                            <TemperatureShift />
                        </Box>
                    </InView>

                    <InView onChange={( inView ) => inView ? setActiveTopic('weather') : null} >
                        <Box ref={TOPICS.weather}><WeatherClimate /></Box>
                    </InView>
                    
                    <InView onChange={( inView ) => inView ? setActiveTopic('agriculture') : null} >
                        <Box ref={TOPICS.agriculture}>
                            <LanduseTopic />
                        </Box>
                    </InView>

                    <InView onChange={( inView ) => inView ? setActiveTopic('extremes') : null} >
                        <Box ref={TOPICS.extremes}>
                            <ExtremesTopic />
                        </Box>
                    </InView>

                    <InView onChange={( inView ) => inView ? setActiveTopic('other') : null} >
                        <Box ref={TOPICS.other} sx={{minHeight: '100vh', backgroundColor: 'lightblue', width: '100%'}} />
                    </InView>

                </Grid>
            </Grid>

            <ScrollButtonArea />
        </>
    )
}

export default Home;