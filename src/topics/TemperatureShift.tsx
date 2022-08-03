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
            <Typography variant="h1">Verteilungen ändern sich auch</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>

            </Typography>
        </>
    },
    {
        imgSrc: '/steps/tshift_step1.png',
        content: <>
            <Typography variant="h3">Temperaturverteilung</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Die Abbildung zeigt eine angenommene Verteilung von <strong style={{color: 'red'}}>warmen</strong> und&nbsp;
                <strong style={{color: 'blue'}}>kalten</strong> Tagen. Dies ist der Ist-Zustand. Meist hat es Tagestemperaturen
                ähnlich dem Mittelwert, manchmal wird es aber heiß oder frostig.
            </Typography>
        </>
    },
    {
        imgSrc: '/steps/tshift_step2.png',
        content: <>
            <Typography variant="h3">Es wird wärmer</Typography>
            <Typography variant="body2" component="div" sx={{marginTop: '2rem'}}>
                Durch den Klimawandel wird es wärmer. In der Abbildung ist die mittlere Temperatur der 
                <HoverTooltip wikipedia="Normalverteilung" linkName="Verteilung" />
                um gerade einmal <strong style={{fontSize: '1.rem'}}>1,5 °C</strong> verschoben. 
                Alleine diese Verschiebung hat bereits mehr heiße Tage zur Folge.
            </Typography>
            <Typography variant="body2" component="p">
                Allerdings legt die Abbildung auch nahe, dass es zu keinen Frosttagen mehr kommt.
                Aus Wetterbeobachtungen wissen wir aber, dass das nicht stimmt. Demnach muss sich an der 
                Verteilung mehr ändern, als nur der Mittelwert.
            </Typography>
        </>
    },
    {
        imgSrc: '/steps/tshift_step3.png',
        content: <>
            <Typography variant="h3">Die Variabilität nimmt zu</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Wenn wir die <HoverTooltip wikipedia="Varianz" linkName="Varianz" /> der Verteilung von Tagestemperaturen erhöhen,
                werden die Schwänze der Verteilung fetter. Nun sind bereits wieder Frosttage zu sehen.
                Gelichzeitig hat diese Veränderung aber noch mehr heiße, und sogar einige tropische 
                Tage zur Folge. 
            </Typography>
        </>
    },
];

const steps_en: TopicStep[] = steps_de;


const TemperatureShift: React.FC = () => {
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

export default TemperatureShift;