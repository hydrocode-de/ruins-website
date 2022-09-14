import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../store";

const AppFooter: React.FC = () => {
    // get language
    const lang = useSelector((state: RootState) => state.settings.lang);

    // get a navigate func
    const navigate = useNavigate();
    
    return (
        <Box sx={{m: 0, p: 0, height: '35px', bottom: 0, width: '100%', backgroundColor: 'rgb(0,0,0,0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button color="inherit" size="small" onClick={() => navigate('imprint')}>
                {lang === 'en' ? 'Imprint' : 'Impressum' }
            </Button>
            <Button color="inherit" size="small">
                {lang === 'en' ? 'Privacy Policy' : 'Datenschutzerklärung' }
            </Button>
        </Box>
    );
}

export default AppFooter;