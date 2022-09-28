import { Fab, FabProps, Tooltip } from "@mui/material";
import { ArrowDropDown, ArrowDropUp, KeyboardArrowUp } from '@mui/icons-material';
import { useEffect } from "react";

interface ScrollButtonProp extends FabProps {
    mode: "pageUp" | "pageDown" | "top";
    addKeyEvent?: boolean;
}

const ScrollButton: React.FC<ScrollButtonProp> = ({ mode, addKeyEvent: keyDown, ...fabProps }) => {
    // get the right icon
    let icon: any;
    let title: string = '';
    if (mode==='top') {
        icon = <KeyboardArrowUp />
        title = 'Press [Pos 1]'
    }
    if (mode==='pageUp') {
        icon = <ArrowDropUp />
        title = 'Press [Arrow Up]'
    }
    if (mode==='pageDown') {
        icon = <ArrowDropDown />
        title = 'Press [Arrow Down]'
    }
    
    const handleKeyDown = (event: KeyboardEvent) => {
        if ((mode==='pageDown' && event.key === 'ArrowDown') || (mode==='pageUp' && event.key === 'ArrowUp')) {
            event.preventDefault();
            scrollHandler();
        }
    }
    // check if the global keyDown event needs to be registered
    useEffect(() => {
        if (keyDown) {
            document.addEventListener('keydown', handleKeyDown)
        }

        return () => document.removeEventListener('keydown', handleKeyDown)
    });

    const scrollHandler = () => {
        if (mode === 'top') {
            window.scrollTo({top: 0, behavior: 'smooth'});
        } else {
            const px = mode === 'pageDown' ? window.innerHeight : -(window.innerHeight);
            window.scrollBy({behavior: 'smooth', top: px});
        }
    }

    return (
        <Tooltip title={title}>
            <Fab {...fabProps} onClick={scrollHandler}>{ icon }</Fab>
        </Tooltip>
    );
}

export default ScrollButton;