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
            <Typography variant="body1">
            Unsicherheit und Risiko sind wichtige Begriffe zum Verständnis von Klimadaten und Modellen.
            Beide Begriffe werden auch im allgemeinen Sprachgebrauch verwendet. Um Verwirrungen zu vermeiden,
            gehen wir hier kurz auf die wichtigsten Definitionen ein. Danach folgt ein Alltagsbeispiel für Entscheidungen
            über eine unsichere Situation:
            </Typography>
        </>
    },
    {
        imgSrc: '/steps/tshift_step1.png',
        content: <>
            <Typography variant="h3">Mittelwerte und Verteilungen</Typography>
            <Typography variant="h5" sx={{marginTop: '2rem'}}>Die Verteilung der Lufttemperatur</Typography>
            <Typography variant="body1" component="p" sx={{marginTop: '0.5rem'}}>
                Die Abbildung zeigt eine angenommene 
                <HoverTooltip wikipedia="Normalverteilung" img="https://upload.wikimedia.org/wikipedia/commons/7/74/Normal_Distribution_PDF.svg" linkName="Verteilung"/> 
                von <strong style={{color: 'red'}}>warmen</strong> und&nbsp;
                <strong style={{color: 'blue'}}>kalten</strong> Tagen, f.h. die Häufigkeit bestimmter Werte. Je häufiger ein Wert auftritt, 
                desto höher steigt die Kurve. In vielen Fällen liegen seltene Werte an den Rändern, wo die Kurve flach verläuft. 
                Häufige Werte liegen in der Mitte, wo die Kurve hoch angestiegen ist. 
                Der Mittelpunkt der Verteilung ist die allgemeine Durchschnittstemperatur. 
                Manchmal wird es aber auch heiß oder frostig.
            </Typography>
        </>
    },
    {
        imgSrc: '/steps/tshift_step2.png',
        content: <>
            <Typography variant="h5">Es wird wärmer</Typography>
            <Typography variant="body1" component="p" sx={{marginTop: '0.5rem'}}>
                Durch den Klimawandel wird es wärmer. In der Abbildung ist die mittlere Temperatur der 
                <HoverTooltip wikipedia="Normalverteilung" img="https://upload.wikimedia.org/wikipedia/commons/7/74/Normal_Distribution_PDF.svg" linkName="Verteilung"/> 
                um gerade einmal <HoverTooltip linkName="1,2°C" external="https://climate.copernicus.eu/esotc/2021/globe-in-2021">Woher haben wir diese Zahl? Der link unten führt direkt zur Quelle</HoverTooltip> 
                verschoben. Diese Veränderung wird auch Trend genannt. 
                Allein diese Verschiebung hat bereits sieben mal so viele heiße Tage zur Folge. 
                Gleichzeitig gibt es in diesem Beispiel nun keine Frosttage mehr. 
                Aus Wetterbeobachtungen wissen wir aber, dass das nicht stimmt. 
                Demnach muss sich an der Verteilung mehr verändert haben als nur der Mittelwert.
            </Typography>
        </>
    },
    {
        imgSrc: '/steps/tshift_step3.png',
        content: <>
            <Typography variant="h5">Häufige Werte werden seltener, seltene Werte werden häufiger</Typography>
            <Typography variant="body1" component="p" sx={{marginTop: '0.5rem'}}>
                Wenn wir die <HoverTooltip wikipedia="Varianz" linkName="Varianz" /> der Verteilung von Tagestemperaturen erhöhen, 
                verläuft unsere Verteilung flacher. Damit werden die bisher häufigen Werte seltener und entsprechend die bisher 
                selteneren Werte häufiger. Nun sind bereits wieder Frosttage zu sehen. Gleichzeitig hat diese Veränderung aber 
                noch mehr heiße und sogar einige tropische Tage zur Folge, obwohl der Mittelwert noch immer nur um 1,2°C angestiegen ist. 
            </Typography>
            <Typography variant="body1" component="p" sx={{marginTop: '0.5rem'}}>
                Dieses Beispiel zeigt, dass es nur ein kleiner Teil der Geschichte ist, die Veränderung der Mittelwerte zu betrachten. 
                Die gleichzeitige Veränderung der gesamten Verteilung führt dazu, dass sich für manche Fragen - wie z.B. Hitzeperioden - deutlich 
                stärkere Effekte ergeben, als es die mittlere Temperaturerhöhung erwarten lässt. 
                <br />
                Verteilungen können ihre Form auch noch stärker ändern als in unserem Beispiel. Wenn die Verteilung nicht mehr symmetrisch verläuft, 
                kommt der Mittelwert nicht mehr am häufigsten vor und Extremereignisse auf einer Seite sind häufiger als auf der anderen 
                Seite der Verteilung.
                <br />
                Die Varianz ist für eine Bewertung von und die Vorbereitung auf Veränderungen sehr wichtig. 
                Unter bestimmten Voraussetzungen kann man Varianz auch als Risiko verstehen.
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
        <>
            <Typography variant="h1" component="div" sx={{mt: 3}}>
                {lang === 'en' ? 'Uncertainty and Risk' : 'Unsicherheit und Risiko'}
            </Typography>

            <Grid container spacing={1}>
                
                <Grid item xs={6}>
                    <TopicWrapper steps={steps} />
                </Grid>

                <Grid item xs={6}>
                    <StepImage />
                </Grid>
            </Grid>
        </>
    );
}

export default TemperatureShift;