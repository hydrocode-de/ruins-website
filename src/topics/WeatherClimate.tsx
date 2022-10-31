import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import HoverTooltip from "../components/HoverTooltip";
import StepImage from '../components/StepImage';
import TopicIntro from '../components/TopicIntro';
import TopicWrapper from '../components/TopicWrapper';
import { RootState } from '../store';
import { TopicStep } from '../topics.model';

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
            <Typography variant="h3">Das tägliche Wetter</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
            Das tägliche Wetter ist berüchtigt für seine Wechselhaftigkeit. Im Herbst ist es völlig normal, 
            für alle Fälle einen Regenschirm in der Tasche zu haben, wenn man das Haus verlässt. Wir sind auf diese erwartete 
            Unterschiedlichkeit des Wetters vorbereitet und gehen mit ihr ganz selbstverständlich um.
            </Typography>
            <Typography variant="body2" component="p">
            An einem Spätsommertag haben wir uns an das immer schöne Wetter gewöhnt und sind vom erwischt das Hitzegewitter überrascht. 
            Das Wetter war lange wenig variabel und wir hatten diese Möglichkeit gar nicht mehr im Blick. 
            Seltene Ereignisse werden also schnell so unwahrscheinlich bewertet, dass wir sie für unsere Bewertung der Lage vernachlässigen. 
            Wenn wir uns nun an das Beispiel mit der Veränderung der Verteilung erinnern, müssen wir Erderwärmung nicht 
            mit Sommer (weniger Wechselhaftigkeit) sondern vielmehr mit Aprilwetter (große Wechselhaftigkeit) in Verbindung 
            bringen und ihr als überwiegend sicherheitsliebende Spezies viel Abwertung entgegen bringen.
            </Typography>
        </>
    },
    {
        content: <>
            <Typography variant="h3">Das Wetter ist in Raum und Zeit unterschiedlich</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
            Um von Wetter zu Klima zu kommen, müssen lange Beobachtungen von vielen Wettergrößen zusammengefasst werden. 
            Weil Wettergrößen wie Temperatur oder Niederschlag sowohl zeitlich als auch räumlich sehr unterschiedlich sind, 
            ist es nicht einfach, das aktuelle oder vergangene Wetter zu sammengefasst zu messen und deren Verteilungen im Blick zu behalten. 
            Für die Temperatur spielen z.B. neben regelmäßigen Verläufen über den Tag oder die Jahreszeiten auch Großwetterlagen, 
            Bewölkung und die Beschaffenheit der Landfläche eine Rolle. 
            </Typography>
        </>
    },
    {
        content: <>
            <Typography variant="h3">Verteilungen werden für den Überblick zu Einzelwerten zusammengefasst</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
            Um von vielen Einzelmessungen zu einem größeren Bild zu kommen, fasst man die verschiedenen Einzelwerte zusammen. 
            Stündliche Messungen werden zu Tageswerten, Monats- oder sogar Jahresmitteln verrechnet. 
            Aus einer Verteilung von Werten (wie die der Fahrzeiten oben) wird also rechnerisch ein Einzelwert gemacht. 
            Je nach Anwendung und Fragestellung ist dabei nicht nur der Mittelwert interessant, 
            sondern z.B. die niedrigste oder höchste Temperatur oder die Niederschlagssumme.
            </Typography>
        </>
    },
    {
        content: <>
            <Typography variant="h3">Klima ist langfristiges Wetter</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
            So lässt sich von Momentaufnahmen an einer Wetterstation eine längerfristige Aussage über das Klima in einer 
            Region wie der deutschen Nordseeküste ableiten.
            </Typography>
            <Typography variant="body2" component="p">
            Um das langfristige Klima in Ostfriesland zu beschreiben, eignet sich der Jahresgang der Temperatur 
            mit Minima und Maxima und den monatlichen Niederschlagssummen für eine Referenzperiode (typisches Klimadiagramm).
            </Typography>
        </>
    },
    {
        content: <>
            <Typography variant="h3">Stabile Muster verändern sich</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
            Trotz der normalen Variabilität und einzelner Extremereignissen war dieses Muster 
            (z.B. die mittlere Jahrestemperatur) lange Zeit stabil, aber die gemessenen Zeitreihen zeigen, 
            dass sich dieses Muster verändert - es wird durchschnittlich wärmer!
            </Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
            Noch klarer wird dieser Trend, wenn nicht die absoluten Werte, sondern der Vergleich zu einem Bezugswert gezeigt werden. 
            Hier sind wärmere Jahre mit einer höheren mittleren Jahrestemperatur als … zunehmend rot 
            (je wärmer, desto kräftiger) und kältere Jahre blau eingezeichnet. 
            Zum Ende der Zeitreihe wird es eindeutig wärmer (röter). 
            </Typography>
        </>
    },
    {
        content: <>
            <Typography variant="h3">Klima ist mehr als Temperatur und Niederschlag</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
            Trotz der normalen Variabilität und einzelner Extremereignissen war dieses Muster 
            (z.B. die mittlere Jahrestemperatur) lange Zeit stabil, aber die gemessenen Zeitreihen zeigen, 
            dass sich dieses Muster verändert - es wird durchschnittlich wärmer!
            </Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
            Noch klarer wird dieser Trend, wenn nicht die absoluten Werte, sondern der Vergleich zu einem Bezugswert gezeigt werden. 
            Hier sind wärmere Jahre mit einer höheren mittleren Jahrestemperatur als … zunehmend rot 
            (je wärmer, desto kräftiger) und kältere Jahre blau eingezeichnet. 
            Zum Ende der Zeitreihe wird es eindeutig wärmer (röter). 
            </Typography>
        </>
    },
    {
        content: <>
            <Typography variant="h3">Atmosphäre als chaotisches System mit intrinsischer Unsicherheit</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
            Das Wetter vorherzusagen ist dank aufwändiger Computersimulationen in den letzten Jahrzehnten einfacher 
            und genauer geworden. Aber die Atmosphäre ist ein chaotisches System, d.h. kleine Änderungen zu Beginn 
            können am Ende einen großen Effekt haben und umso aufgewirbelter die Atmosphäre gerade ist, desto schwieriger 
            sind präzise Vorhersagen.
            </Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
            Ausgehend von den aktuell beobachteten Zuständen liefern unterschiedlicheverschiedene Modelle läufe aufgrund der 
            Zufälligkeit kleiner Abweichungen am Ausgangspunkt verschiedene Verläufe mit z.T. erheblichen AbweichungenUnterschieden 
            (sog. Anfangswertprobleme[L]). Entsprechend spannen sich vielfältige Varianten möglicher Zustände in der Zukunft auf. 
            Ein Beispiel dafür sind Vorhersagen der Lufttemperatur.
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

    return <>
        <TopicIntro 
            title={lang === 'en' ? 'Weather - uncertain and widely ordinary' : 'Wetter – unsicher und weitgehend alltäglich'}
            imgSrc="https://via.placeholder.com/1920x1080"
        />

        <Grid container spacing={1}>
            <Grid item xs={6}>
                <TopicWrapper steps={steps}/>
            </Grid>

            <Grid item xs={6}>
                <StepImage />
            </Grid>

        </Grid>

        <hr />
        
    </>;
}

export default WeatherClimate;