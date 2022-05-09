import { Box } from "@mui/material";
import VisibilitySensor from 'react-visibility-sensor';
import { useDispatch  } from 'react-redux';
import { setStep, resetStep } from '../features/settings';

import { TopicStep } from "../topics.model";


interface TopicWrapperProps {
    steps: TopicStep[];
}

const TopicWrapper: React.FC<TopicWrapperProps> = ({ steps }) => {
    // get a dispatcher
    const dispatch = useDispatch();
    
    const scrollHandler = (isVisible: boolean, step: TopicStep) => {
        if (isVisible) {
            if (step.imgSrc) {
                dispatch(setStep(step.imgSrc));
            } else {
                dispatch(resetStep());
            }
        }
    }
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
            {steps.map((step, index) => {
                return (
                    <Box sx={{minHeight: '100vh', paddingTop: '2rem', paddingBottom: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} key={index}>
                        <span></span>
                        <VisibilitySensor onChange={(isVisible: boolean) => scrollHandler(isVisible, step)}>
                            <Box>{ step.content }</Box>
                        </VisibilitySensor>
                        <span></span>
                    </Box>
                )
            })}
        </Box>
    );
}

export default TopicWrapper;

function useDispatcher() {
    throw new Error("Function not implemented.");
}
