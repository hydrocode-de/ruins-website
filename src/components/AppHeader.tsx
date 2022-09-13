import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import LangSwitch from "./LangSwitch";
import QuickAccessMenu from "./QuickAccessMenu";
import useScrollPosition from "./useScrollPosition";

const AppHeader: React.FC = () => {
    // get the scroll position
    const scrollPosition = useScrollPosition();
    const startView = scrollPosition < 128;
    
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="sticky" color="default" sx={{
                position: 'fixed',
                backgroundColor: startView ? 'transparent' : 'white',
                transition: '1s ease-in-out',
                boxShadow: startView ? 'none' : '0px 2px 4px -1px rgba(0 ,0, 0, 0.2)'
            }}>
                <Toolbar sx={{height: startView ? '128px' : '64px', transition: '1s ease-in-out'}}>
                   
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    {startView ? '' : 'Uncertainty matters'}
                    </Typography>
                    
                    <Box>
                        <QuickAccessMenu />
                        <LangSwitch />
                    </Box>
                </Toolbar>

            </AppBar>
        </Box>
    )
}

export default AppHeader;