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
            <Typography variant="body1" component="p">
                Dass sich das Klima aktuell ändert und in Zukunft weiter ändern wird, ist <HoverTooltip linkName="Fakt" external="https://www.klimafakten.de/fakten-statt-behauptungen/fakt-ist" />, 
                aber wie genau die Änderungen aussehen, ist mit großer Unsicherheit behaftet, d
                ie z.B. aus unzureichendem Prozessverständnis und komplexem Zusammenwirken entsteht.
            </Typography>
            <Typography variant="body1" component="p" sx={{marginTop: '0.5rem'}}>
                Trotz dieser Unsicherheit müssen jetzt Entscheidungen über meist langfristige Anpassungsmaßnahmen getroffen werden,
                bevor es dafür zu spät ist. Zwischen verschiedenen Handlungsoptionen mit ihrer jeweiligen Unsicherheit zu entscheiden,
                ist eine besondere Herausforderung für die Gesellschaft. Zweifel wurden gezielt ausgenutzt und haben 
                <HoverTooltip linkName="Handeln verhindert" external="https://www.spiegel.de/wissenschaft/mensch/lobbyismus-gegen-klimaschutz-die-macht-des-zweifels-gastbeitrag-a-1c8b7e6b-dd1d-43f1-8665-74f4bcfbd30c" img="https://cdn.prod.www.spiegel.de/images/84976374-c192-4552-87ab-2bc9d53e6511_w948_r1.778_fpx43_fpy23.webp" />
            </Typography>
            <Typography variant="body1" component="p" sx={{marginTop: '0.5rem'}}>
                Diese Herausforderung kann nur bewältigt werden, wenn sich Entscheidungsträger mit diesem komplexen Thema auseinandersetzen.
                Da jedes Mitglied der Gesellschaft mit seinen Entscheidungen zur Reaktion auf den aktuellen Klimawandel beiträgt,
                ist diese App bewusst an die breite Öffentlichkeit gerichtet und soll helfen, einen einfachen Zugang zu einem nicht
                einfachen Thema zu finden. Zusätzlich sollen auch Fachpersonen die Möglichkeit erhalten, auf Ergebnisse und Daten aus unserem
                Forschungsprojekt[L] zuzugreifen. Wir stellen unsere Ergebnisse entlang von drei Anwendungsbeispielen für reale 
                Landmanagemententscheidungen in der Küstenregion Krummhörn vor.
            </Typography>
        </>
    },
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