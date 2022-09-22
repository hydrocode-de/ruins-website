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
        'content': <>
            <Typography variant="body1" component="p">
                Küstenregionen sind durch den steigenden Meeresspiegel besonders vom Klimawandel betroffen.
                An der deutschen Nordseeküste leben die Menschen schon lange mit dem Meer und nutzen aufwändige Entwässerungssysteme,
                um die Landschaft hinter dem Deich, die vielerorts unterhalb des aktuellen Meeresspiegels liegt,
                nutzbar und sicher bewohnbar zu machen. Doch diese Maßnahmen haben ihre technischen Grenzen, wenn vor dem Deich
                der Meeresspiegel ansteigt und Sturmfluten häufiger werden, hinter dem Deich winterliche Starkregenereignisse
                zu einer Überflutung des Hinterlandes führen und sommerliche Trockenperioden zunehmen. Wie genau verschiedene
                Anpassungsoptionen in unterschiedlichen Zukunftsszenarien wirken, und welche Rolle für die Handlungsentscheidung
                die Unsicherheit der Vorhersagen spielt, sind die Kernfragen dieses Forschungsprojekts.
            </Typography>
            <Typography variant="body1" component="p" sx={{marginTop: '0.5rem'}}>
                Mit diesem Wissen wollen wir dabei helfen, individuelle Entscheidungen angesichts einer unsicheren Zukunft treffen zu können:
            </Typography>
            <ul>
                <li>Welche Nutzpflanzen lassen sich auch unter veränderten Temperatur- und Niederschlagsbedingungen noch gewinnbringend in der Krummhörn anbauen?</li>
                <li>Welche Kombination von Turbinentypen bringt den größten Ertrag an Windenergie bei begrenzter Fläche?</li>
                <li>Mit welchen Anpassungsmaßnahmen lassen sich Hochwasserschäden durch zukünftige Extremniederschläge gering halten?</li>
            </ul>
        </>
    }
];

const steps_en: TopicStep[] = steps_de;


const Introduction: React.FC = () => {
    // get the correct steps
    const lang = useSelector((state: RootState) => state.settings.lang);
    const steps = lang === 'de' ? steps_de : steps_en;

    return (
        <>
            <Grid container spacing={1}>
                
                <Grid item xs={6}>
                    <TopicWrapper steps={steps} />
                </Grid>

                <Grid item xs={6}>
                    <StepImage />
                </Grid>
            </Grid>
            <hr />
        </>
    );
}

export default Introduction;