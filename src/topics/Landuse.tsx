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
 */
const steps_de: TopicStep[] = [
    {
        content: <>
            <Typography variant="h1">Landnutzungs Management unter Unsicherheit</Typography>
            <Typography variant="h2" component="p" sx={{marginTop: '2rem'}}>
                Wie wirkt sich die Unsicherheit der Klimamodelle schon auf Entscheidungen heute aus?
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


const Landuse: React.FC = () => {
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

export default Landuse;