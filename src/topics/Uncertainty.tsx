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
            <Typography variant="h1">Unsicherheit und Risiko</Typography>
            <Typography variant="h3"sx={{marginTop: '5rem'}}>Die Schranke des Grauens</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '3rem'}}>
                Stellen Sie sich vor, von Ihrem Wohnort zu Ihrem Arbeitsplatz gibt es zwei Routen: 
                Der kürzeste Weg (Option A) führt über einen Bahnübergang und wenn die Schranke offen ist, 
                brauchen Sie 15 Minuten. Wenn die Schranke geschlossen ist, verursacht das oft einen langen 
                Stau und Sie brauchen 45 Minuten. Alternativ können Sie die Schranke weiträumig umfahren (Option B). 
                Dann dauert die Fahrt zwar etwas länger (25 Minuten), aber Sie riskieren nicht, 
                lange an der Schranke im Stau zu stehen. 
            </Typography>
            <Typography variant="body2" component="p">
                Ob die Schranke geschlossen sein wird oder nicht, lässt sich nicht vorhersagen, 
                aber Sie müssen sich an der Wegkreuzung für eine der beiden Routen entscheiden- welche nehmen Sie?
            </Typography>
        </>
    },
    {
        imgSrc: '/steps/uncertainty_step1.png', 
        content: <>
            <Typography variant="h3">Knightsche Unsicherheit</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                In diesem Beispiel sind also die möglichen Zustände der Welt bekannt: 
                die Schranke ist offen oder geschlossen. Über die Wahrscheinlichkeit 
                der Zustände wissen wir nichts. Dafür kennen wir das Ergebnis der 
                Handlungsoptionen (Option A: direkte Route, Option B: Umweg) für 
                jeden Zustand der Welt ►Abb. 1. Diese besondere Form der Unsicherheit 
                nennt man <strong>Knightsche Unsicherheit</strong> nach dem amerikanischen 
                <a href="https://de.wikipedia.org/wiki/Frank_Knight" target="_blank">Ökonomen Frank Knight (1885-1972)</a>.  
            </Typography>
            </>
    },
    {
        imgSrc: '/steps/uncertainty_step2.png', 
        content: <>
            <Typography variant="h3">Verteilung, Mittelwert, Schiefe, Risiko</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Tatsächlich ist die Fahrzeit unabhängig von Route und Schrankenstellung nicht jeden Tag gleich, sondern abhängig 
                von Verkehrsdichte, Ampelschaltungen, Wetter etc. Statt eines Einzelwertes gibt es also eine <strong>Verteilung</strong> von 
                Fahrzeiten um einen <strong>Mittelwert</strong> herum. Dabei sind die Fahrzeiten nahe des Mittelwerts 
                <strong>wahrscheinlicher</strong> als extrem kurze oder extrem lange Fahrzeiten. 
                Wenn die Fahrzeit gleich oft länger bzw. kürzer ist als der Mittelwert, handelt es sich um eine 
                (symmetrische) <strong>Normalverteilung</strong> ►Abb. 2 links. Typisch für unser Beispiel ist 
                allerdings eine (rechts)<strong>schiefe Verteilung</strong> der Fahrzeiten, d.h. es kommt häufiger 
                zu längeren Fahrzeiten als zu kürzeren ►Abb. 2 links. Das liegt daran, dass die Mindestfahrdauer nicht 
                unterschritten werden, es aber durch Glatteis, Panne oder Unfall beliebig länger dauern kann. 
                Man spricht dann von einem schweren/fetten rechten Schwanz der Verteilung. 
            </Typography>
            <Typography variant="body2" component="p">
                Unabhängig von der Schiefe der Verteilung kann sie schmaler oder breiter sein ►Abb. 2 rechts. 
                Die Form der Verteilung beschreibt das Risiko: Ist die Verteilung schmal, weichen die möglichen Werte nicht stark 
                vom Mittelwert ab- das Risiko ist gering. Ist die Verteilung breit, kann es starke 
                Abweichungen vom Mittelwert geben- das <strong>Risiko</strong> ist groß.
            </Typography>
            </>
    },
    {
        imgSrc: '/steps/uncertainty_step3.png', 
        content: <>
            <Typography variant="h3">Risikoreiche Schranken</Typography>
            <Typography variant="body2" component="p">
                Mit der Information über die Wahrscheinlichkeitsverteilungen der Fahrzeiten für verschiedene Zustände und Handlungsoptionen 
                ergibt sich ein neues Bild für die Entscheidungsfindung: ►Abb. 3 Bei Handlungsoption A hängt die Fahrzeit sehr von der 
                Schrankenstellung ab. Ist die Schranke geöffnet, dauert die Fahrt nur 15 Minuten (Bestzeit bei grüner Welle und ohne Bremsen) 
                bis 22 Minuten. Ist die Schranke geschlossen, können Sie Glück haben und nur 1 Minute warten müssen 
                (16 Minuten Fahrzeit zur Arbeit). Oder Sie haben Pech und müssen wegen Staus zwei Schrankenöffnungen abwarten 
                (45 Minuten Fahrzeit). Im zweiten Fall ist die Verteilung breiter als im ersten Fall, das Risiko ist größer.
                Bei Handlungsoption B ist die Fahrzeit überhaupt nicht von der Schrankenöffnung abhängig. Beide Verteilungen sind 
                deckungsgleich, das Risiko ist also gleich groß.
            </Typography>
            </>
    },
    {
        imgSrc: '/steps/uncertainty_step4.png',
        content: <>
            <Typography variant="h3">Unsicherheits- und Risikoverhalten</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Für welche Route Sie sich entscheiden, ist nicht nur von objektiven Informationen über die Fahrzeiten und ihre 
                Wahrscheinlichkeit abhängig, sondern von Ihrem individuellen Unsicherheits- und Risikoverhalten. Sind Sie ein 
                risikoliebender Mensch, entscheiden Sie sich eher für Route A und drücken die Daumen, dass die Schranke offen ist. 
                Sind Sie ein sicherheitsliebender Mensch, fahren Sie lieber den Umweg und umgehen damit das Risiko eines 
                langen Staus am Bahnübergang.
            </Typography>
        </>
    }
];

const steps_en: TopicStep[] = steps_de;

const Uncertainty: React.FC = () => {
    // get the correct steps
    const lang = useSelector((state: RootState) => state.settings.lang);
    const steps = lang === 'de' ? steps_de : steps_en;
    
    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <TopicWrapper steps={steps}/>
            </Grid>

            <Grid item xs={6}>
                <StepImage />
            </Grid>

        </Grid>
        
    );
}

export default Uncertainty;