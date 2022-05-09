import { useState } from 'react';
import { Box, Grid } from "@mui/material";
import AppHeader from "./components/AppHeader"
import SideStepper from "./components/SideStepper";
import { TOPICS, TOPIC_TYPE } from './topics.model';

import VisibilitySensor from 'react-visibility-sensor';

// import the Topics
import UncertaintyTopic from './topics/Uncertainty';
import WeatherClimate from './topics/WeatherClimate';


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
                    
                    <VisibilitySensor onChange={(isVisible: boolean) => isVisible ? setActiveTopic('uncertainty') : null} partialVisibility minTopValue={500} intervalCheck>
                        <Box ref={TOPICS.uncertainty}><UncertaintyTopic /></Box>
                    </VisibilitySensor>

                    <VisibilitySensor onChange={(isVisible: boolean) => isVisible ? setActiveTopic('weather') : null} partialVisibility minTopValue={500} intervalCheck>
                        <Box ref={TOPICS.weather}><WeatherClimate /></Box>
                    </VisibilitySensor>

                    <VisibilitySensor onChange={(isVisible: boolean) => isVisible ? setActiveTopic('agriculture') : null} partialVisibility minTopValue={500} intervalCheck>
                        <Box ref={TOPICS.agriculture} sx={{minHeight: '100vh', backgroundColor: 'yellow', width: '100%'}} />
                    </VisibilitySensor>

                    <VisibilitySensor onChange={(isVisible: boolean) => isVisible ? setActiveTopic('extremes') : null} partialVisibility minTopValue={500} intervalCheck>
                        <Box ref={TOPICS.extremes} sx={{minHeight: '100vh', backgroundColor: 'lightsalmon', width: '100%'}} />
                    </VisibilitySensor>

                    <VisibilitySensor onChange={(isVisible: boolean) => isVisible ? setActiveTopic('other') : null} partialVisibility minTopValue={500} intervalCheck>
                        <Box ref={TOPICS.other} sx={{minHeight: '100vh', backgroundColor: 'lightblue', width: '100%'}} />
                    </VisibilitySensor>

                </Grid>
            </Grid>
        </>
    )
}

export default Home;