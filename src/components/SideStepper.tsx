import { Box, Button, Step, StepButton, StepContent,  Stepper, Typography } from "@mui/material";
import { TOPIC_TYPE } from "../topics.model";

import { WindPowerOutlined, Public, FloodOutlined, BubbleChartOutlined, InfoOutlined, AgricultureOutlined } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

interface SideStepperProps {
    jumpToTopic: (topic: TOPIC_TYPE) => void,
    activeTopic: TOPIC_TYPE;
}

const TOPIC_ORDER = {
    info: 0,
    uncertainty: 1,
    weather: 2,
    agriculture: 3,
    wind: 4,
    extremes: 5,
    other: 6,
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
                    </StepContent>
                </Step>

                <Step key="1">
                    <StepButton color="inherit" onClick={() => jumpToTopic('uncertainty')} icon={<BubbleChartOutlined />}>
                        <Typography variant="caption">Uncertainty and Risk</Typography>
                    </StepButton>
                    <StepContent>
                        <Button variant="contained" onClick={() => navigate('/app/uncertainty')}>Open App</Button>
                    </StepContent>
                </Step>

                <Step key="2">
                    <StepButton color="inherit" onClick={() => jumpToTopic('weather')} icon={<Public />}>
                        <Typography variant="caption">Weather and Climate</Typography>
                    </StepButton>
                    <StepContent>
                        <Button variant="contained" onClick={() => navigate('/app/weather')}>Open App</Button>
                    </StepContent>
                </Step>

                <Step key="3">
                    <StepButton color="inherit" onClick={() => jumpToTopic('agriculture')} icon={<AgricultureOutlined />}>
                        <Typography variant="caption">Agriculture and Landuse</Typography>
                    </StepButton>
                    <StepContent>
                        <Button variant="contained" onClick={() => navigate('/app/landuse')}>Open App</Button>
                    </StepContent>
                </Step>

                <Step key="5">
                    <StepButton color="inherit" onClick={() => jumpToTopic('wind')} icon={<WindPowerOutlined />}>
                        <Typography variant="caption">Windpower</Typography>
                    </StepButton>
                    <StepContent>
                        <Button variant="contained" onClick={() => navigate('/app/landuse')} disabled>Open App</Button>
                    </StepContent>
                </Step>

                <Step key="5">
                    <StepButton color="inherit" onClick={() => jumpToTopic('extremes')} icon={<FloodOutlined />}>
                        <Typography variant="caption">Extremes</Typography>
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