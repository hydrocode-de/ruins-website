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
            <Typography variant="h1">Wetter und Klima</Typography>
            <Typography variant="h2" sx={{marginTop: '2rem'}}>
                Kurzfristiges lokales Wetter - alles andere als sicher!
            </Typography> 
        </>
    },
    {
        content: <>
            <Typography variant="h3">Atmosphäre als chaotisches System</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
            Das Wetter vorherzusagen ist dank aufwändiger Computersimulationen in den letzten Jahrzehnten einfacher und genauer geworden. 
            Aber die Atmosphäre ist ein chaotisches System, d.h. kleine Änderungen zu Beginn können am Ende einen großen Effekt haben. 
            Und das ist immer noch schwer vorherzusagen. 
            </Typography>
        </>
    },
    {
        content: <>
            <Typography variant="h3">Raum-zeitliche Variabilitiät des Wetters</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Aber selbst das aktuelle oder vergangene Wetter zu messen ist nicht einfach, denn Wettergrößen wie Temperatur oder 
                Niederschlag sind sehr variabel, sowohl zeitlich als auch räumlich. Für die Temperatur spielen neben gerichteten 
                Trends wie Tagesgängen und jahreszeitlichen Verläufen auch Großwetterlagen, Bewölkung und die Beschaffenheit der 
                Landfläche eine Rolle. Niederschläge können so lokal auftreten, dass es schwierig ist, an einem heißen 
                Sommernachmittag vorherzusagen, welches Dorf gegen Abend von einem heftigen Gewitterguss erwischt wird und welches nicht.
            </Typography>
        </>
    },
    {
        content: <>
            <Typography variant="h3">Aggregierung von Messungen für langfristige Verallgemeinerungen</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
            Um von der Momentaufnahme an einer Wetterstation zu einer längerfristigen Aussage über das Klima in einer Region wie der 
            deutschen Nordseeküste zu kommen, werden die variablen Einzelwerte aggregiert. Stündliche Messungen werden zu Tageswerten, 
            Monats- oder sogar Jahresmitteln verrechnet. Je nach Anwendung und Fragestellung ist dabei nicht nur der Mittelwert 
            interessant, sondern z.B. die Minimal-/Maximaltemperatur oder die Niederschlagssumme.
            </Typography>
        </>
    },
    {
        content: <>
            <Typography variant="h2">
                Langfristiges Klima einer Region - stabile Muster verändern sich
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