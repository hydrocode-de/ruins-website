import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import LangSwitch from "./LangSwitch";
import QuickAccessMenu from "./QuickAccessMenu";

const AppHeader: React.FC = () => (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="sticky" color="default" sx={{position: 'fixed'}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        RUINS 
                    </Typography>
                    <Box>
                        <QuickAccessMenu />
                        <LangSwitch />
                    </Box>
                </Toolbar>

            </AppBar>
        </Box>
    )

export default AppHeader;