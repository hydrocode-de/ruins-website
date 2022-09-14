import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import HoverTooltip from "../components/HoverTooltip";
import StepImage from "../components/StepImage";
import TopicWrapper from "../components/TopicWrapper";
import { RootState } from "../store";
import { TopicStep } from "../topics.model";

/**
 * Build the text elements using React-MUI (material ui)
 * 
 * To adjust to screen sizes, use the <Typography> component: https://mui.com/material-ui/react-typography/
 * 
 * For Tooltips, use the <HoverTooltip linkName="link-text" />
 * with image: <HoverTooltip img="/local/path" linkName="link-text" /> or <HoverTooltip img="https://external.url/path/to/img.png" linkName="link-text"/> 
 * load text from wikipedia: <HoverTooltip wikipedia="PageName" /> ie. <HoverTooltip wikipedia="Normalverteilung" /> in steps_de
 * and <HoverTooltip wikipedia="Normal distribution" linkName="link-text"> in steps_en
 * If you want to write the text yourself do it like: <HoverTooltip linkName="link-text">This is my own tooltip text...</Tooltip>
 */
const steps_de: TopicStep[] = [
    {
        content: <>
            <Typography variant="h1">Windenergie</Typography>
            <Typography variant="h2" component="p" sx={{marginTop: '2rem'}}>
                Krummhörn - Windenergieproduktion unter Klimawandel
            </Typography>
        </>
    },
    {
        content: <>
            <Typography variant="h3">Überschirft des Schrittes</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Ein kurzer Text zur Abbildung auf der Seite
            </Typography>
        </>
    },
];

const steps_en: TopicStep[] = steps_de;


const Windpower: React.FC = () => {
    // get the correct steps
    const lang = useSelector((state: RootState) => state.settings.lang);
    const steps = lang === 'de' ? steps_de : steps_en;

    return (
        <Grid container spacing={1}>
            
            <Grid item xs={6}>
                <TopicWrapper steps={steps} />
            </Grid>

            <Grid item xs={6}>
                <StepImage />
            </Grid>
        </Grid>
    );
}

export default Windpower;