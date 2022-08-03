import { Box, Card, CardMedia, IconButton, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios';
import { Close, LaunchOutlined } from '@mui/icons-material';
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface HoverTooltipProps {
    wikipedia?: string;
    img?: string;
    linkName?: string;
}

const HoverTooltip: React.FC<React.PropsWithChildren<HoverTooltipProps>> = ({ children, wikipedia, img, linkName }) => {
    // define the anchor element
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [bodyText, setBodyText] = useState<any>('no text available');
    const [imgSrc, setImgSrc] = useState<string | null>(null);

    // determine language settings
    const lang = useSelector((state: RootState) => state.settings.lang);

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

    // get the linkName
    let link: string = 'external link';
    if (linkName) {
        link = linkName;
    }

    if (wikipedia) {
        const apiUrl = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${wikipedia}`
        axios.get(apiUrl).then(res => {
            // get the summary
            if (res.data.extract) {
                setBodyText(res.data.extract);
            } else {
                setBodyText('The wikipedia extract cannot be found')
            }

            // check if there is a img
            if(res.data.originalimage?.source) {
                setImgSrc(res.data.originalimage.source);
            }
        });
    } else {
        setBodyText(children ? children : 'No Tooltip info available')
    }

    // overwrite imgSrc if necessary
    if (img) {
        setImgSrc(img);
    }

    // build the content
    let hoverBody: any;

    if (bodyText && !imgSrc) {
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
    } else if (bodyText && imgSrc ) {
        hoverBody = (
            <Card sx={{display: 'flex', maxWidth: '600px'}}>
                <div style={{position: 'absolute', right: 0}}>
                    <IconButton sx={{backgroundColor: 'rgba(0,0,0,0.05)'}} onClick={() => handlePopoverClose()}><Close /></IconButton>
                </div>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="caption" component="p" sx={{p: '1rem'}}>{ bodyText }</Typography>
                    { wikipedia ? <>
                    <Typography variant="caption" component="p" sx={{m: 'auto'}}>
                        <a href={`https://${lang}.wikipedia.org/wiki/${wikipedia}`} target="blank">
                            <LaunchOutlined fontSize="small" sx={{fontSize: '1rem', verticalAlign: 'middle'}} />
                            {lang==='en' ? 'source: Wikipedia page' : 'Quelle: Wikipedia Seite'}
                        </a>
                        </Typography>
                    </> : null}
                </Box>
                <CardMedia
                    component="img"
                    sx={{maxWidth: '200px', maxHeight: '200px'}}
                    image={imgSrc}
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
                // onMouseLeave={handlePopoverClose}
            >
                <strong>&nbsp;<LaunchOutlined fontSize="small" sx={{fontSize: '1rem', verticalAlign: 'text-bottom'}} />{ link }&nbsp;</strong>
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
