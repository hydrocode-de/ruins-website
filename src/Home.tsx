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
import HoverTooltip from './components/HoverTooltip';



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
                
                
                <InView>
                    {({inView, ref}) => (
                        <Box ref={ref} sx={{
                            width: '100%', 
                            height: '100%',
                            p: 3,
                            backgroundColor: 'rgba(1,1,1,0.5)', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'left',
                            flexDirection: 'column'
                        }}>
                            <Zoom in={inView} style={{transitionDuration: '0.8s', transitionDelay: '400ms'}}>
                            <Typography variant="h4" sx={{color: 'white', marginTop: '2rem'}}>
                                    {lang === 'en' ? (
                                        'Taking confident actions under incomplete Information'
                                    ) : (
                                        'Wie kommen wir trotz unvollständiger Information zum überzeugten Handeln?'
                                    )}
                                </Typography>
                            </Zoom>
                            
                            <Box sx={{maxWidth: '60vw'}}>

                                <Zoom in={inView} style={{color: 'white', transitionDuration: '400ms', transitionDelay: '1.6s', marginTop: '1rem'}}>
                                    <Typography variant="body1">
                                        Die Anpassung an und Vorbereitung auf Veränderungen durch den Klimawandel erfordert Entscheidungen auf Basis von unsicheren Informationen über die Zukunft. 
                                    </Typography>
                                </Zoom>

                                <Zoom in={inView} style={{color: 'white', transitionDuration: '400ms', transitionDelay: '1.7s'}}>
                                    <Typography variant="body1">
                                        Dass sich das Klima aktuell ändert und in Zukunft weiter ändern wird, ist <HoverTooltip linkName="Fakt" external="https://www.klimafakten.de/fakten-statt-behauptungen/fakt-ist" />, 
                                        aber wie genau die Änderungen aussehen, ist mit großer Unsicherheit behaftet, d
                                        ie z.B. aus unzureichendem Prozessverständnis und komplexem Zusammenwirken entsteht.
                                    </Typography>
                                </Zoom>

                                <Zoom in={inView} style={{color: 'white', transitionDuration: '400ms', transitionDelay: '1.8s'}}>
                                    <Typography variant="body1" component="p" sx={{marginTop: '0.5rem'}}>
                                        Trotz dieser Unsicherheit müssen jetzt Entscheidungen über meist langfristige Anpassungsmaßnahmen getroffen werden,
                                        bevor es dafür zu spät ist. Zwischen verschiedenen Handlungsoptionen mit ihrer jeweiligen Unsicherheit zu entscheiden,
                                        ist eine besondere Herausforderung für die Gesellschaft. Zweifel wurden gezielt ausgenutzt und haben 
                                        <HoverTooltip linkName="Handeln verhindert" external="https://www.spiegel.de/wissenschaft/mensch/lobbyismus-gegen-klimaschutz-die-macht-des-zweifels-gastbeitrag-a-1c8b7e6b-dd1d-43f1-8665-74f4bcfbd30c" img="https://cdn.prod.www.spiegel.de/images/84976374-c192-4552-87ab-2bc9d53e6511_w948_r1.778_fpx43_fpy23.webp" />
                                    </Typography>
                                </Zoom>

                                <Zoom in={inView} style={{color: 'white', transitionDuration: '400ms', transitionDelay: '1.9s'}}>
                                    <Typography variant="body1" component="p" sx={{marginTop: '0.5rem'}}>
                                        Diese Herausforderung kann nur bewältigt werden, wenn sich Entscheidungsträger mit diesem komplexen Thema auseinandersetzen.
                                        Da jedes Mitglied der Gesellschaft mit seinen Entscheidungen zur Reaktion auf den aktuellen Klimawandel beiträgt,
                                        ist diese App bewusst an die breite Öffentlichkeit gerichtet und soll helfen, einen einfachen Zugang zu einem nicht
                                        einfachen Thema zu finden. Zusätzlich sollen auch Fachpersonen die Möglichkeit erhalten, auf Ergebnisse und Daten aus unserem
                                        Forschungsprojekt[L] zuzugreifen. Wir stellen unsere Ergebnisse entlang von drei Anwendungsbeispielen für reale 
                                        Landmanagemententscheidungen in der Küstenregion Krummhörn vor.
                                    </Typography>
                                </Zoom>

                            </Box>
                        </Box>
                    )}
                </InView>
                
                
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
                            <Introduction scrollHandler={scrollHandler}/>
                        </Box>
                    </InView>
                    
                    <InView onChange={( inView ) => inView ? setActiveTopic('uncertainty') : null} >
                        <Box ref={TOPICS.uncertainty}>
                            <TemperatureShift />
                            <UncertaintyTopic />
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