import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

import StreamlitLoader from "./components/StreamlitLoader";
import { RootState } from "./store";
import LangSwitch from "./components/LangSwitch";

interface StreamlitPageProps {
    src: string;
    title: string;
}

const StreamlitPage: React.FC<StreamlitPageProps> = ({ src, title }) => {
    // get the language
    const lang = useSelector((state: RootState) => state.settings.lang);
    const navigate = useNavigate();

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar color="default" sx={{position: 'fixed'}}>
                    <Toolbar>
                        <IconButton color="inherit" onClick={() => navigate('/')} children={<ArrowBack fontSize="large" />} size="large" />
                        <Typography variant="h6" component="div" sx={{flexGrow: 1, marginLeft: '1rem'}}>
                            { title }
                        </Typography>
                        <LangSwitch />
                    </Toolbar>
                </AppBar>
            </Box>

            <Box sx={{margin:0, marginTop: '64px', padding: 0, width: '100vw', height: 'calc(100vh - 64px)'}}>
                <StreamlitLoader src={`${src}?layout=wide&lang=${lang}`} title={title} />
           </Box>
        </> 
    );
}

export default StreamlitPage;