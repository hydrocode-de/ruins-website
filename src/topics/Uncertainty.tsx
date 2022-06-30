import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
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
            <Typography variant="h3">Wenn Unvorhergesehens passiert.</Typography>
            <Typography variant="body2" component="p">
                Auf dem Weg zur Arbeit gibt es einen Bahnübergang. Ist dieser geschlossen, brauchst du
                leider im Schnitt 22 Minuten, immer noch mit einer Abweichung von 2 Minuten. 
                Dieser Umstand wird durch die zweite, blaue Verteilung dargestellt.<br />
                Wir können für beide Varianten das <strong style={{fontSize: '120%'}}>Risiko</strong> zu spät zu kommen statistisch
                beschreiben, jedoch herrscht <strong style={{fontSize: '120%'}}>Unsicherheit</strong>, also Unwissen 
                über die Wahrscheinlichkeit mit der die Schranke offen sein wird.
            </Typography>
            </>
    },
    {
        imgSrc: '/steps/uncertainty_step4.png',
        content: <>
            <Typography variant="h3">Einen Umweg fahren?</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Es gibt eine alternative Route ohne Bahnschranke. Allderings musst du dann <strong>immer</strong>
                etwas weiter fahren. Im Schnitt wirst du immer <strong style={{fontSize: '120%'}}>19 Minuten</strong>
                brauchen.
            </Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Dazu kommt noch, dass der längere Weg, auch das <strong>Risiko</strong> erhöht länger zu brauchen.
                Nun liegt die Abweichung mit der gerechnet werden muss bereits bei <strong style={{fontSize: '120%'}}>4 Minuten</strong>
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