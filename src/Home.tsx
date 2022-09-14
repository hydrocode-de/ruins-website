import { useState } from 'react';
import { Box, Grid, Typography, Zoom } from "@mui/material";
import { InView } from 'react-intersection-observer'
import { useSelector } from 'react-redux';
import { RootState } from './store';

// load components
import AppHeader from "./components/AppHeader"
import AppFooter from './components/AppFooter';
import SideStepper from "./components/SideStepper";
import { TOPICS, TOPIC_TYPE } from './topics.model';
import ScrollButtonArea from './components/ScrollButtonArea';


// import the Topics
import Introduction from './topics/Intro';
import UncertaintyTopic from './topics/Uncertainty';
import WeatherClimate from './topics/WeatherClimate';
import TemperatureShift from './topics/TemperatureShift';
import LanduseTopic from './topics/Landuse';
import ExtremesTopic from './topics/Extremes';
import Windpower from './topics/Windpower';



const Home = () => {
    // get the language
    const lang = useSelector((state: RootState) =>  state.settings.lang);

    // create state for active topic
    const [activeTopic, setActiveTopic] = useState<TOPIC_TYPE>('info');

    // The SideStetter needs a handler that sets active topic and scrolls
    const scrollHandler = (topic: TOPIC_TYPE) => {
        setActiveTopic(topic);
        TOPICS[topic].current!.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <>
            <AppHeader transition />

            <Box sx={{height: '100vh', width: '100%'}}>
                <video loop autoPlay muted style={{width: '100%', height: '100vh', position: 'absolute', zIndex: -1, objectFit: 'cover'}} src="background.mov">
                    {/* <source src="background.mov" type="video/mp4" /> */}
                </video>
                <Box sx={{width: '100%', height: '100%', backgroundColor: 'rgba(1,1,1,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                
                <InView>
                    {({inView, ref}) => (
                        <Box ref={ref}>
                            <Zoom in={inView} style={{transitionDuration: '0.8s', transitionDelay: '400ms'}}>
                            <Typography variant="h4" sx={{color: 'white', marginTop: '4rem', textAlign: 'center', maxWidth: '60vw'}}>
                                    {lang === 'en' ? (
                                        'Making decisions for a future under climate change'
                                    ) : (
                                        'Anpassungsentscheidungen für eine Zukunft mit dem globalen Wandel'
                                    )}
                                </Typography>
                            </Zoom>
                            
                            <Zoom in={inView} style={{transitionDuration: '0.6s', transitionDelay: '800ms'}}>
                                <Typography variant="h4">
                                    Wie kommen wir trotz unvollständiger Information zum überzeugten Handeln?
                                </Typography>
                            </Zoom>

                            <Zoom in={inView} style={{transitionDuration: '400ms', transitionDelay: '2s', marginTop: '1rem'}}>
                                <Typography variant="body1">
                                    Die Anpassung an und Vorbereitung auf Veränderungen durch den Klimawandel erfordert Entscheidungen auf Basis von unsicheren Informationen über die Zukunft. 
                                </Typography>
                            </Zoom>
                        </Box>
                    )}
                </InView>
                
                </Box>
            </Box>
            
            <Grid container spacing={0}>
                
                <Grid item xs={2}>
                    <Box sx={{position: 'sticky', top: 0, padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <SideStepper jumpToTopic={scrollHandler} activeTopic={activeTopic} />    
                    </Box>
                </Grid>

                <Grid item xs={10} sx={{backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                    
                    <InView onChange={( inView ) => inView ? setActiveTopic('info') : null}>
                        <Box ref={TOPICS.info}>
                            <Introduction />
                        </Box>
                    </InView>
                    
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

                    <InView onChange={( inView ) => inView ? setActiveTopic('wind') : null} >
                        <Box ref={TOPICS.wind}>
                            <Windpower />
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

            <AppFooter />
        </>
    )
}

export default Home;