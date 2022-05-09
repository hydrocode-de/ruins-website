import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const StepImage: React.FC = () => {
    // get the image source
    const imgSrc = useSelector((state: RootState) => state.settings.activeStep);

    // if there is no imgSrc, return nothing
    if (!imgSrc) {
        return null;
    }

    return (
        // <Box sx={{height: '100%', width: '40vw', position: 'fixed', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        //     <Box sx={{position: 'relative', width: '100%', height: '100%', backgroundImage: `url(${imgSrc})`, 
        //     transition: 'background-image 2.5s', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
        // </Box>
        <Box sx={{height: '100%', width: '100%', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box sx={{display: 'flex', position: 'sticky', width: '50vh', height: '50vw', top: 0, backgroundImage: `url(${imgSrc})`, 
            transition: 'background-image 2.5s', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
        </Box>

    );
}

export default StepImage;