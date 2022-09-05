import { Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { AgricultureOutlined, WbSunnyOutlined, FloodOutlined, BubbleChartOutlined } from '@mui/icons-material';
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

const QuickAccessMenu: React.FC = () => {
    // get the language
    const lang = useSelector((state: RootState) => state.settings.lang);

    // create the menu anchor element
    const [anchor, setAnchor] = useState<HTMLElement | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    // event Handlers
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(event.currentTarget);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setAnchor(null);
    }

    // get the navigate hook
    const navigate = useNavigate();

    return (
        <>
            <Button onClick={handleClick} color="inherit">{lang === 'en' ? 'Applications' : 'Anwendungen'}</Button>
            <Menu open={open} anchorEl={anchor} onClose={handleClose}>
                
                <MenuItem onClick={() => navigate('app/uncertainty')}>
                    <ListItemIcon>
                        <BubbleChartOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Uncertainty and Risk</ListItemText>
                </MenuItem>
                
                <MenuItem onClick={() => navigate('app/weather')}>
                    <ListItemIcon>
                        <WbSunnyOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Weather and Climate</ListItemText>
                </MenuItem>

                <MenuItem onClick={() => navigate('app/landuse')}>
                    <ListItemIcon>
                        <AgricultureOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Landuse</ListItemText>
                </MenuItem>


                <MenuItem onClick={() => navigate('app/extremes')}>
                    <ListItemIcon>
                        <FloodOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Flood and extremes</ListItemText>
                </MenuItem>

                <Divider />
                <MenuItem>{lang === 'en' ? 'Imprint' : 'Impressum'}</MenuItem>
                <MenuItem>{lang === 'en' ? 'Privacy Policy' : 'Datenschutzerklärung'}</MenuItem>


            </Menu>
        </>
    );
}

export default QuickAccessMenu;