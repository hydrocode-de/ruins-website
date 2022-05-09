import { Box, Button, Card, CardContent, CardHeader, Step, StepButton, StepContent,  Stepper, Typography } from "@mui/material";
import { TOPIC_TYPE } from "../topics.model";

import { AgricultureOutlined, WbSunnyOutlined, FloodOutlined, BubbleChartOutlined } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

interface SideStepperProps {
    jumpToTopic: (topic: TOPIC_TYPE) => void,
    activeTopic: TOPIC_TYPE;
}

const TOPIC_ORDER = {
    uncertainty: 0,
    weather: 1,
    agriculture: 2,
    extremes: 3,
    other: 4,
}

const SideStepper: React.FC<SideStepperProps> = ({ jumpToTopic, activeTopic }) => {
    const navigate = useNavigate();
    return (
        <Box sx={{height: 'calc(100vh - 120px)', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Stepper  orientation="vertical" activeStep={TOPIC_ORDER[activeTopic]} nonLinear>

                <Step key="0">
                    <StepButton color="inherit" onClick={() => jumpToTopic('uncertainty')} icon={<BubbleChartOutlined />}>
                        <Typography variant="caption">Uncertainty and Risk</Typography>
                    </StepButton>
                    <StepContent>
                        <Typography> First topic bla </Typography>
                        <Button onClick={() => navigate('/app/uncertainty')}>Open App</Button>
                    </StepContent>
                </Step>

                <Step key="1">
                    <StepButton color="inherit" onClick={() => jumpToTopic('weather')} icon={<WbSunnyOutlined />}>
                        <Typography variant="caption">Weather and Climate</Typography>
                    </StepButton>
                    <StepContent>
                    <Typography variant="caption"> First topic bla </Typography><br />
                        <Button variant="outlined" onClick={() => navigate('/app/weather')}>Open App</Button>
                    </StepContent>
                </Step>

                <Step key="2">
                    <StepButton color="inherit" onClick={() => jumpToTopic('agriculture')} icon={<AgricultureOutlined />}>
                        <Typography variant="caption">Agriculture</Typography>
                    </StepButton>
                    <StepContent>
                        <Typography> Third topic bla </Typography>
                    </StepContent>
                </Step>

                <Step key="3">
                    <StepButton color="inherit" onClick={() => jumpToTopic('extremes')} icon={<FloodOutlined />}>
                        <Typography variant="caption">Extremes</Typography>
                    </StepButton>
                    <StepContent>
                        <Typography> Fourth topic bla </Typography>
                    </StepContent>
                </Step>

                <Step key="4">
                    <StepButton color="inherit" onClick={() => jumpToTopic('other')}>
                        <Typography variant="caption">Other / Not specified</Typography>
                    </StepButton>
                    <StepContent>
                        <Typography> Fifth topic bla </Typography>
                    </StepContent>
                </Step>

            </Stepper>
        </Box>
    );
}

export default SideStepper;