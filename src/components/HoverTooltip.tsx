import { Box, Card, CardMedia, IconButton, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios';
import { Close, HelpOutlineOutlined, LaunchOutlined } from '@mui/icons-material';

interface HoverTooltipProps {
    text?: string;
    wikipedia?: string;
    img?: string;
}

const HoverTooltip: React.FC<React.PropsWithChildren<HoverTooltipProps>> = ({ children, text, wikipedia, img }) => {
    // define the anchor element
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [bodyText, setBodyText] = useState<string>('no text available');

    // popover handlers
    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handlePopoverClose = () => {
        // setTimeout(() => setAnchorEl(null), 400);
        setAnchorEl(null);
    };

    // determine open state
    const open = Boolean(anchorEl);

    if (wikipedia) {
        axios.get(wikipedia).then(res => {
            if (res.data.extract) {
                setBodyText(res.data.extract);
            } else {
                setBodyText('The wikipedia extract cannot be found')
            }
        });
    } else {
        setBodyText(text ? text : 'No Tooltip info available')
    }

    // build the content
    let hoverBody: any;

    if (bodyText && !img) {
        hoverBody = (
            <div style={{maxWidth: '600px'}}>
            <div style={{position: 'absolute', right: 0}}>
                    <IconButton onClick={() => handlePopoverClose()}><Close /></IconButton>
                </div>
                <Typography variant="caption" component="p" sx={{p: 1, pr: '2rem'}}>
                    
                    { bodyText }
                </Typography>
            </div>
        );
    } else if (bodyText && img ) {
        hoverBody = (
            <Card sx={{display: 'flex', maxWidth: '600px'}}>
                <div style={{position: 'absolute', right: 0}}>
                    <IconButton sx={{backgroundColor: 'rgba(0,0,0,0.05)'}} onClick={() => handlePopoverClose()}><Close /></IconButton>
                </div>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="caption" component="p" sx={{p: '1rem'}}>{ bodyText }</Typography>
                </Box>
                <CardMedia
                    component="img"
                    sx={{width: '150px', height: '150px'}}
                    image={img}
                    alt="Preview Image"
                />
            </Card>
        );
    }
    
    return (
        <>
            <span
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                /* onMouseLeave={handlePopoverClose} */
            >
                <strong>&nbsp;<LaunchOutlined fontSize="small" sx={{fontSize: '1rem', verticalAlign: 'text-bottom'}} />{ children }&nbsp;</strong>
            </span>
            <Popover
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                transformOrigin={{vertical: 'bottom', horizontal: 'center'}}
                onClose={handlePopoverClose}
                disableRestoreFocus
                disableAutoFocus
            >
                { hoverBody }
            </Popover>
        </>
    );
}

export default HoverTooltip;
