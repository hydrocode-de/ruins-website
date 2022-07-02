import { Fab, FabProps } from "@mui/material";
import { ArrowDropDown, ArrowDropUp, KeyboardArrowUp } from '@mui/icons-material';

interface ScrollButtonProp extends FabProps {
    mode: "pageUp" | "pageDown" | "top"
}

const ScrollButton: React.FC<ScrollButtonProp> = ({ mode, ...fabProps }) => {
    // get the right icon
    let icon: any;
    if (mode==='top') icon = <KeyboardArrowUp />
    if (mode==='pageUp') icon = <ArrowDropUp />
    if (mode==='pageDown') icon = <ArrowDropDown />
    
    const scrollHandler = () => {
        if (mode === 'top') {
            window.scrollTo({top: 0, behavior: 'smooth'});
        } else {
            const px = mode === 'pageDown' ? window.innerHeight : -window.innerHeight;
            window.scrollBy({behavior: 'smooth', top: px});
        }
    }

    return (
        <Fab {...fabProps} onClick={scrollHandler}>{ icon }</Fab>
    );
}

export default ScrollButton;