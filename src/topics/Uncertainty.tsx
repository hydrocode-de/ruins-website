import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import HoverTooltip from "../components/HoverTooltip";
import StepImage from "../components/StepImage";
import TopicIntro from '../components/TopicIntro';
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
        imgSrc: '/steps/hiernochbildeinfügen.png',
        content: <>
            <Typography variant="h3">Wie komme ich am schnellsten ins Büro?</Typography>
            <Typography variant="body1" component="p" sx={{marginTop: '2rem'}}>
                Angenommen vom Wohnort zum Arbeitsplatz gibt es zwei Routen: Der kürzeste Weg (Route A) 
                führt über einen Bahnübergang und wenn die Schranke offen ist, dauert die Strecke 15 Minuten. 
                Wenn die Schranke geschlossen ist, verursacht das oft einen langen Stau und es dauert 45 Minuten. 
                Alternativ lässt sich die Schranke weiträumig umfahren (Route B). Dann dauert es zwar etwas länger (25 Minuten), 
                aber das Risiko, lange an der Schranke im Stau zu stehen, wird vermieden. 
            </Typography>
            <Typography variant="body1" component="p">
                Ob die Schranke geschlossen sein wird oder nicht, lässt sich nicht vorhersagen, 
                aber Sie müssen sich an der Wegkreuzung für eine der beiden Routen entscheiden – welche nehmen Sie?
            </Typography>
        </>
    },
    {
        imgSrc: '/steps/uncertainty_step1.png', 
        content: <>
            <Typography variant="h3">Eine besondere Form von Unsicherheit</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                In diesem Beispiel sind also die möglichen Zustände der Welt bekannt: 
                die Schranke ist offen oder geschlossen. Über die 
                <HoverTooltip wikipedia="Wahrscheinlichkeit" linkName="Wahrscheinlichkeit" /> 
                der Zustände wissen wir nichts. Dafür kennen wir das Ergebnis der 
                Handlungsoptionen (Option A: direkte Route, Option B: Umweg) für 
                jeden Zustand der Welt. Diese besondere Form der Unsicherheit 
                nennt man <HoverTooltip wikipedia="Knightsche_Unsicherheit" linkName="Knightscher Unsicherheit" /> nach dem amerikanischen 
                Ökonomen <HoverTooltip wikipedia="Frank_Knight" linkName="Frank Knight" /> (1885-1972).  
            </Typography>
            </>
    },
    {
        imgSrc: '/steps/uncertainty_step2.png', 
        content: <>
            <Typography variant="h3">Die Fahrzeit ist nicht jeden Tag gleich</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Tatsächlich ist die Fahrzeit unabhängig von Route und Schrankenstellung nicht jeden Tag gleich, sondern abhängig 
                von Verkehrsdichte, Ampelschaltungen, Wetter etc. Statt eines Einzelwertes gibt es also eine <strong>Verteilung</strong> von 
                Fahrzeiten um einen <strong>Mittelwert</strong> herum. Dabei sind die Fahrzeiten nahe des Mittelwerts 
                <strong>wahrscheinlicher</strong> als extrem kurze oder extrem lange Fahrzeiten. 
                Wenn die Fahrzeit gleich oft länger bzw. kürzer ist als der Mittelwert, handelt es sich um eine 
                (symmetrische) <strong>Normalverteilung</strong>. Typisch für unser Beispiel ist 
                allerdings eine (rechts)<strong>schiefe Verteilung</strong> der Fahrzeiten, d.h. es kommt häufiger 
                zu längeren Fahrzeiten als zu kürzeren. Das liegt daran, dass die Mindestfahrdauer nicht 
                unterschritten werden, es aber durch Glatteis, Panne oder Unfall beliebig länger dauern kann. 
                Man spricht dann von einem schweren/fetten rechten <strong>Schwanz der Verteilung</strong>. 
            </Typography>
            <Typography variant="body2" component="p">
                Unabhängig von der Schiefe der Verteilung kann sie schmaler oder breiter sein. 
                Die Form der Verteilung beschreibt das <strong>Risiko</strong> (im Sinne von Unklarheit über das 
                Eintreten eines bestimmten Wertes). Ist die Verteilung schmal, weichen die möglichen Werte 
                nicht stark vom Mittelwert ab – das Risiko ist gering. Ist die Verteilung breit, gibt es 
                häufigere und stärkere Abweichungen vom Mittelwert – das Risiko ist größer.
            </Typography>
            </>
    },
    {
        imgSrc: '/steps/uncertainty_step3.png', 
        content: <>
            <Typography variant="h3">Entscheidung trotz unvollständiger Information</Typography>
            <Typography variant="body2" component="p">
                Mit der Information über die Verteilungen der Fahrzeiten für verschiedene Zustände und 
                Handlungsoptionen ergibt sich ein neues Bild für die Entscheidungsfindung. Bei Route A hängt 
                die Fahrzeit sehr von der Schrankenstellung ab. Ist die Schranke geöffnet, dauert die Fahrt 
                nur 15 Minuten (Bestzeit bei grüner Welle und ohne Bremsen) bis 22 Minuten. Ist die 
                Schranke geschlossen, wartet man mit Glück nur 1 Minute (16 Minuten Fahrzeit zur Arbeit). 
                Mit Pech muss man wegen eines Staus zwei Schrankenöffnungen abwarten (45 Minuten Fahrzeit). 
                Im zweiten Fall ist die Verteilung breiter als im ersten Fall; das Risiko ist größer.
            </Typography>
            <Typography variant="body2" component="p">
                Bei Route B dauert die Fahrt im besten Fall 22 Minuten und nur sehr selten länger als 30 Minuten. 
                Die Fahrzeit ist überhaupt nicht von der Schrankenöffnung abhängig. Beide Verteilungen sind 
                deckungsgleich; das Risiko ist also gleich groß.
            </Typography>
            </>
    },
    {
        imgSrc: '/steps/uncertainty_step4.png',
        content: <>
            <Typography variant="h3">Entscheidungen sind individuell und subjektiv</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Für welche Route Sie sich entscheiden, ist nicht nur von objektiven Informationen über 
                die Fahrzeiten und deren Wahrscheinlichkeit abhängig, sondern auch von Ihrer individuellen 
                <HoverTooltip wikipedia="Nutzenfunktion_(Mikroökonomie)" linkName="Nutzenfunktion" />, 
                die sie intuitiv benutzen, um die benötigte Fahrzeit zu bewerten. Je länger die Fahrt dauert, 
                desto weniger relativen Nutzen würden wir der Option beimessen. Wir können uns nur zwischen 
                den beiden Routen entscheiden, über die Schranke wissen wir nichts. Damit kann es passieren, 
                dass Option A mit extrem viel oder extrem wenig Nutzen ausgeht. Option B bringt immer relativ mäßigen Nutzen. 
            </Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Nun hört unsere subjektive Bewertung hier nicht auf. Die Optionen unterscheiden sich ganz besonders 
                in ihrer Unklarheit über ihren Ausgang. Mit ihrem individuellen  Unsicherheits- und Risikoverhalten 
                bewerten Sie diese Eigenschaft der Optionen ebenfalls. Sind Sie risikofreudig, entscheiden Sie sich 
                eher für Route A und drücken die Daumen, dass die Schranke offen ist. Sind Sie sicherheitsliebend, 
                fahren Sie eher den Umweg und umgehen damit das Risiko eines langen Staus am Bahnübergang. In unserem 
                Beispiel können wir uns das als eine Art “Sonderabzug” des Nutzens je nach Unsicherheit oder 
                Wahrscheinlichkeit ungünstiger Ausgänge vorstellen. Wenn wir den Gesamtnutzen einer Option als 
                Fläche unter der Kurve denken, dann würden wir also die Kurve nach unten verschieben. Je nach 
                Risikoverhalten kann Option B nun sehr viel attraktiver dastehen.
            </Typography>
        </>
    },
    {
        imgSrc: '/steps/uncertainty_step4.png',
        content: <>
            <Typography variant="h3">Kleine Änderungen verändern das Bild</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                In unserem Fall würden die meisten sicherlich das Risiko der Schranke eingehen, weil die Chance auf 
                eine kürzere Fahrzeit groß ist und die lange Fahrzeit mit Stau an der Schranke nur 
                selten deutlich länger als der Umweg ist. Würden sich die erwarteten Fahrzeiten aber z.B. durch eine 
                Baustelle auf Route A nur um wenige Minuten angleichen, verändert sich das Bild schnell.
            </Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Das Bild würde sich auch verändern, wenn Ihnen bei geschlossener Schranke z.B. ein Kaffee angeboten wird, 
                sodass die längere Fahrzeit für die 6 Minuten Kaffeetrinken gar keinen Verlust darstellt. 
                Wir würden also einen Teil des Risikos über eine Risikoprämie oder Versicherung ausgleichen. 
                In unserem graphischen Beispiel würde sich die Nutzenfunktion für Option A mit geschlossener 
                Schranke um 6 Minuten nach rechts verschieben und dadurch die Wahrscheinlichkeit 
                besonders kleiner Nutzen verringert werden. Entsprechend wird auch die Unsicherheit über 
                einen nützlichen Ausgang von Option A kleiner. Insgesamt steht Option A wieder deutlich besser da als Option B.
            </Typography>
        </>
    },
    {
        imgSrc: '/steps/uncertainty_step4.png',
        content: <>
            <Typography variant="h3">Was nun die “richtige” Entscheidung ist, bleibt Sache des gesellschaftlichen Aushandlungsprozesses</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Es gibt also viele Einflüsse auf die Bewertung von Handlungsoptionen, die jenseits 
                der objektiv ermittelbaren Größen liegen und die im Aushandlungsprozess häufig nicht 
                explizit adressiert werden. Auf der einen Seite können Kommunikation und angepasste 
                Rahmenbedingungen die individuelle Bewertung von Nutzen und Risiken verändern. Auf der 
                anderen Seite können bereits kleine relative Verschiebungen die Optionen in einem anderen Licht erscheinen lassen. 
            </Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                In unserer App können diese Verteilungen, Nutzenfunktionen und Risikoausgleichsprämien weiter untersucht werden.
            </Typography>
        </>
    }, 
    {
        imgSrc: '/steps/uncertainty_step4.png',
        content: <>
            <Typography variant="h3">Von der Schranke zum Klimawandel</Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Auf einer abstrakteren Ebene als unserem Alltagsbeispiel ist der Klimawandel ein weiterer Fall 
                von <HoverTooltip wikipedia="Knightsche_Unsicherheit" linkName="Knightscher Unsicherheit" />: 
                Die Treibhauswirkung von CO2 in der Atmosphäre ist zwar seit den 
                1980ern relativ 
                <HoverTooltip linkName="gut bekannt" external="https://www.nytimes.com/interactive/2018/08/01/magazine/climate-change-losing-earth.html"></HoverTooltip>  
                und mit den Berichten des 
                <HoverTooltip linkName="IPCC" external="https://www.carbonbrief.org/in-depth-qa-the-ipccs-sixth-assessment-on-how-climate-change-impacts-the-world/"></HoverTooltip> 
                 haben wir eine grobe Vorstellung, 
                welche Ausmaße der Klimawandel entlang verschiedener 
                <HoverTooltip wikipedia="Repräsentativer_Konzentrationspfad" linkName="Emissionspfade" /> 
                bis 2100 annehmen könnte 
                (= Zustände der Welt bzw. Schrankenstellung im Beispiel oben), aber wie wahrscheinlich die einzelnen 
                Emissionspfade sind, hängt maßgeblich von unserem aktuellen und 
                <HoverTooltip linkName="zukünftigen Handeln" external="https://www.deutschlandfunkkultur.de/figueres-rivett-carnac-klimakrise-100.html"></HoverTooltip> 
                 ab und 
                kann daher nicht exakt eingegrenzt werden. Die Eintretenswahrscheinlichkeit ist also für 
                unsere Handlungsentscheidung unbekannt. 
            </Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Wenn man aber die Klimaszenarien der Emissionspfade als gegeben annimmt, lassen sich durch 
                Modellsimulationen die jeweiligen Auswirkungen z.B. auf 
                <HoverTooltip linkName="die Temperatur abschätzen" external="https://climatescenarios.org/primer/climate-impacts"></HoverTooltip>. 
                So kommen wir zu Verteilungen wie denen der Fahrzeiten in den zwei Routen oben.
            </Typography>
            <Typography variant="body2" component="p" sx={{marginTop: '2rem'}}>
                Im folgenden Kapitel geht es um historische Wetterdaten und Klimamodelle und die Unsicherheit, 
                die in beiden steckt. Diese ist der Grund dafür, dass eine Handlungsentscheidung 
                (z.B. Route A/B oder Anbau von Weizen/Mais) nicht zu einem sicheren Ergebnis (z.B. einer 
                Fahrzeit oder einem Ernteertrag), sondern zu einer Verteilung mit einer bestimmten Form (schmal/breit, 
                symmetrisch/schief) führt. Das schauen wir uns in den darauf folgenden Kapiteln genauer an.
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
        <>
        <TopicIntro 
            title={lang === 'en' ? 'Uncertainty and Risk' : 'Unsicherheit und Risiko'}
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
        </>
        
    );
}

export default Uncertainty;