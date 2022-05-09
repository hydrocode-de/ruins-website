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
        imgSrc: '/steps/uncertainty_step1.png', 
        content: <>
            <Typography variant="h1">Unsicherheit und Risiko</Typography>
            <Typography variant="caption" component="p">
                Unsicherheit und Risiko sind wichtige Bregriffe zum Verständnis von Klimadaten und Modellen.
            </Typography>
            <Typography variant="h4" sx={{marginTop: '5rem'}}>Wie lange brauchst du morgens zur Arbeit?</Typography>
            <Typography variant="caption" component="p">
                Für dieses Beispiel gehen wir einmal von <span style={{fontSize: '120%'}}>12 Minuten</span> aus.
                Haben wir nicht mehr Informationen, können wir dies z.B. wie auf der Grafik darstellen: Der Weg zur Arbeit 
                dauert 12 Minuten, also gibt es nur einen Datenpunkt bei 12, der zu 100% eintreten wird
            </Typography>
            </>
    },
    {
        imgSrc: '/steps/uncertainty_step2.png', 
        content: <>
            <Typography variant="h3">Der Weg ist unsicher</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Jeder kennt das. Man braucht eben ungefähr 12 Minuten, oder meistens 12 Minuten.
                Genauer gesagt, haben wir nun also mehr Informationen. Wir können also zB. sagen:
                Ich brauche 12 Minuten zur Arbeit, mit einer Abweichung von 2 Minuten. 
                Nun betrachten wir also die Zeit zur Arbeit als Wahrscheinlichkeitsverteilung.
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