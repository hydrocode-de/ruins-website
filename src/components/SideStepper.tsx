import { Box, Button, Icon, Step, StepButton, StepContent,  Stepper, Typography } from "@mui/material";
import { TOPIC_TYPE } from "../topics.model";

import { WindPowerOutlined, Public, FloodOutlined, BubbleChartOutlined, InfoOutlined, AgricultureOutlined, Slideshow, Quiz, QueryStats } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

interface SideStepperProps {
    jumpToTopic: (topic: TOPIC_TYPE) => void,
    activeTopic: TOPIC_TYPE;
}

const TOPIC_ORDER = {
    info: 0,
    portfolio: 1,
    uncertainty: 2,
    weather: 3,
    agriculture: 4,
    wind: 5,
    extremes: 6,
    other: 7,
}

const SideStepper: React.FC<SideStepperProps> = ({ jumpToTopic, activeTopic }) => {
    const navigate = useNavigate();
    return (
        <Box sx={{height: 'calc(100vh - 120px)', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Stepper  orientation="vertical" activeStep={TOPIC_ORDER[activeTopic]} nonLinear>

                <Step key="0">
                    <StepButton color="inherit" onClick={() => jumpToTopic('info')} icon={<InfoOutlined />}>
                        <Typography variant="caption">Introduction</Typography>
                    </StepButton>
                    <StepContent>
                        <Typography variant="caption" style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                            <Quiz  style={{marginRight: '0.3rem'}} />  Theory
                        </Typography>
                        <Typography variant="caption" style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                            <Slideshow  style={{marginRight: '0.3rem'}} />  Examples
                        </Typography>
                    
                        
                    </StepContent>
                </Step>

                <Step key="1">
                    <StepButton color="inherit" onClick={() => jumpToTopic('portfolio')} icon={<QueryStats />}>
                        <Typography variant="caption" style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                        <Quiz style={{fontSize: '1rem', marginRight: '0.3rem'}} /> Portfolio Analysis
                        </Typography>
                    </StepButton>
                    <StepContent>
                        {/* <Button variant="contained" onClick={() => navigate('/app/uncertainty')}>Open App</Button> */}
                    </StepContent>
                </Step>

                <Step key="2">
                    <StepButton color="inherit" onClick={() => jumpToTopic('uncertainty')} icon={<BubbleChartOutlined />}>
                        <Typography variant="caption" style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                        <Quiz style={{fontSize: '1rem', marginRight: '0.3rem'}} /> Uncertainty and Risk
                        </Typography>
                    </StepButton>
                    <StepContent>
                        <Button variant="contained" onClick={() => navigate('/app/uncertainty')}>Open App</Button>
                    </StepContent>
                </Step>

                <Step key="3">
                    <StepButton color="inherit" onClick={() => jumpToTopic('weather')} icon={<Public />}>
                        <Typography variant="caption" style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                            <Quiz style={{fontSize: '1rem', marginRight: '0.3rem'}} /> Weather and Climate
                        </Typography>
                    </StepButton>
                    <StepContent>
                        <Button variant="contained" onClick={() => navigate('/app/weather')}>Open App</Button>
                    </StepContent>
                </Step>

                <Step key="4">
                    <StepButton color="inherit" onClick={() => jumpToTopic('agriculture')} icon={<AgricultureOutlined />}>
                        <Typography variant="caption" style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                        <Slideshow style={{fontSize: '1rem', marginRight: '0.3rem'}} />  Landuse
                        </Typography>
                    </StepButton>
                    <StepContent>
                        <Button variant="contained" onClick={() => navigate('/app/landuse')}>Open App</Button>
                    </StepContent>
                </Step>

                <Step key="5">
                    <StepButton color="inherit" onClick={() => jumpToTopic('wind')} icon={<WindPowerOutlined />}>
                        <Typography variant="caption" style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                        <Slideshow style={{fontSize: '1rem', marginRight: '0.3rem'}} /> Windpower
                        </Typography>
                    </StepButton>
                    <StepContent>
                        <Button variant="contained" onClick={() => navigate('/app/landuse')} disabled>Open App</Button>
                    </StepContent>
                </Step>

                <Step key="6">
                    <StepButton color="inherit" onClick={() => jumpToTopic('extremes')} icon={<FloodOutlined />}>
                        <Typography variant="caption" style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                        <Slideshow style={{fontSize: '1rem', marginRight: '0.3rem'}} /> Extremes
                        </Typography>
                    </StepButton>
                    <StepContent>
                        <Button variant="contained" onClick={() => navigate('/app/extremes')}>Open App</Button>
                    </StepContent>
                </Step>

                {/* <Step key="4">
                    <StepButton color="inherit" onClick={() => jumpToTopic('other')}>
                        <Typography variant="caption">Other / Not specified</Typography>
                    </StepButton>
                    <StepContent>
                        <Button variant="contained" disabled>Open App</Button>
                    </StepContent>
                </Step> */}

            </Stepper>
        </Box>
    );
}

export default SideStepper;