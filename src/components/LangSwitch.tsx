import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../features/settings";
import { RootState } from "../store";

const LangSwitch: React.FC = () => {
    const lang = useSelector((state: RootState) => state.settings.lang);
    const dispatch = useDispatch();

    return <Button color="inherit" onClick={() => dispatch(setLanguage(lang==='de' ? 'en' : 'de'))}>{lang === 'de' ? 'EN' : 'DE'}</Button>
}

export default LangSwitch;