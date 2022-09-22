import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import LangSwitch from "./LangSwitch";
import QuickAccessMenu from "./QuickAccessMenu";
import useScrollPosition from "./useScrollPosition";

interface AppHeaderProps {
    transition?: boolean;
    backLink?: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({ transition, backLink }) => {
    // get the scroll position
    const scrollPosition = useScrollPosition();
    const startView = scrollPosition < 128 && transition;
    
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="sticky" color="default" sx={{
                position: 'fixed',
                backgroundColor: startView ? 'transparent' : 'white',
                transition: '1s ease-in-out',
                boxShadow: startView ? 'none' : '0px 2px 4px -1px rgba(0 ,0, 0, 0.2)'
            }}>
                <Toolbar sx={{height: startView ? '128px' : '64px', transition: '1s ease-in-out', flexDirection: 'row', justifyContent: 'space-between'}}>

                    {backLink ? (
                        <Button>back</Button>
                    ) : (
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant="h1" component="div" sx={{
                                flexGrow: 1,
                                fontSize: startView ? '4rem' : '1.3rem',
                                color: startView ? 'white' : 'inherit',
                                transition: '1s ease-in-out'
                            }}>
                                Uncertainty Matters
                            </Typography>
                            <Typography variant="body2" component="div" sx={{
                                flexGrow: 1,
                                color: 'white',
                                transition: '1s ease-in-out',
                                fontSize: startView ? '1rem' : '0rem',
                                height: startView ? 'inherit' : '0px'
                            }}>
                                Die wichtige Rolle von Unsicherheiten bei Anpassungsentscheidungen für eine Zukunft mit dem globalen Wandel
                            </Typography>
                        </Box>
                        
                    )}
                    
                    
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