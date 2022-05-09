import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import StepImage from '../components/StepImage';
import TopicWrapper from '../components/TopicWrapper';
import { RootState } from '../store';
import { TopicStep } from '../topics.model';

/**
 * Build the text elements using React-MUI (material ui)
 * 
 * To adjust to screen sizes, use the <Typography> component: https://mui.com/material-ui/react-typography/
 */
const steps_de: TopicStep[] = [
    {
        content: <>
        <Typography variant="h1">Wetterdaten und Klimamodelle</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Dieser Kurze Teasertext führ auf den Sinn und Zweck des ganzen Kapitels hin.
                Der User soll verstehen, warum es überhaupt sinnvoll ist Wetterdaten zu verstehen,
                bevor eine der Themen Apps geladen wird
            </Typography>
        </>
    },
    {
        imgSrc: '/steps/weather_step1.png',
        content: <>
            <Typography variant="h3">Wetter in Norddeutschland</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Die Abbildung zeigt die Wetterdaten von nur einigen wenigen Stationen im Norden
                Deutschlands. Genauer gesagt, wird die Tageshöchsttemperatur dargestellt.<br />
                Es es gut zu erkennen, dass nicht viel zu erkennen ist. Unterschiede zwischen Stationen
                sind nicht auszumachen, ebenso wenig wie saisonale Unterschiede.<br />
                Wirklich relevant sind langjährige Trends, also die systematische Veränderung über Jahrzente,
                die trotz Jahreszeitlicher Unterschiede bestand haben. Auch diese sind in der Grafik nicht
                auszumachen.
            </Typography>
        </>
    },
    {
        imgSrc: '/steps/weather_step2.png',
        content: <>
            <Typography variant="h3">Wetterdaten von 1980</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Zunächst müssen wir ein besseres Gefühl für die verschiedenen Zeitskalen bekommen,
                auf denen sich Wetterdaten verändern.
                Nun sind von die Tageshöchsttemperaturen von <strong style={{fontSize: '120%'}}>1980&nbsp;</strong>
                 dargestellt.</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                 Nun sind bereits einige wärmere und kältere Episoden sichtbar und auch einzele besonder warme oder
                 kalte Tage können identifiziert werden.
            </Typography>
        </>
    },
    {
        imgSrc: '/steps/weather_step3.png',
        content: <>
            <Typography variant="h3">Wetter in Cuxhaven</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Von nun an betrachten wir die Wetterstation in <strong style={{fontSize: '130%'}}>Cuxhaven&nbsp;</strong>, in der
                Grafik gelb dargestellt. 
            </Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Hier sind einige Unterschiede zu anderen Stationen sichtbar, jedoch können wir diese (noch) nicht 
                systematisch analysieren. Es ist nach wie vor schwer, langfristige Trends zu erkennen.
            </Typography>
            
        </>
    },
    {
        imgSrc: '/steps/weather_step4.png',
        content: <>
            <Typography variant="h3">Monatliche Aggregate</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Als nächsten brechen wir die Daten für je einen Monat auf nur einen Wert runter: Das 
                Tagestemperaturmaximum <strong style={{fontSize: '120%'}}>je Monat&nbsp;</strong>.
            </Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Außerdem werden die Temperaturen über der bisherigen Grafik nun nicht mehr als Zahl dargestellt,
                sondern über eine Farbe kodiert. <strong style={{fontSize: '120%', color: 'darkred'}}>Rot&nbsp;</strong>
                markiert höhere Temperaturen, <strong style={{fontSize: '120%', color:'darkblue'}}>Blau&nbsp;</strong>
                markiert niedrigere Temperaturen. Jedoch, niedrigere Tages<strong>höchst</strong>temperaturen.
            </Typography>
            <Typography variant="h5" sx={{marginTop: '2rem'}}>Wir betrachten Daten also relativ zu einander</Typography>
        </>
    },
    {
        imgSrc: '/steps/weather_step5.png',
        content: <>
            <Typography variant="h3">Zurück zum vollen Datensatz</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Im letzten Schritt entfernen wir die Zeitreihen. Dafür stellen wir die Daten aller anderen Jahre
                genau wie die Daten in Cuxhaven von 1980 dar.
            </Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Dadurch können wir mehrere Dinge gleichzeitig betrachten: Wir sehen jeden Jahresgang und können diese 
                visuell vergleichen, auch für Jahre, die nicht direkt aufeinander folgen. Verfolgen wir eine Spalte, also 
                einen bestimmten Monat, so können wir sehen wie sich die Tageshöchsttemperaturen über die Jahrzehnte entwickelt 
                haben. 
            </Typography>
            <Typography variant="h5" sx={{marginTop: '2rem'}}>
                Gehe noch weiter ins Detail in im Wetter und Klima Explorer
            </Typography>
        </>
    },
];

const steps_en: TopicStep[] = steps_de;


const WeatherClimate: React.FC = () => {
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

export default WeatherClimate;