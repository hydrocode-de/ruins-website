import { Box, Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography, Zoom } from "@mui/material";
import { useSelector } from "react-redux";
import HoverTooltip from "../components/HoverTooltip";
import StepImage from "../components/StepImage";
import TopicWrapper from "../components/TopicWrapper";
import { RootState } from "../store";
import { TopicStep, TOPIC_TYPE } from "../topics.model";

import { Agriculture, Flood, WindPower } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

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


interface IntroductionProps {
    scrollHandler: (type: TOPIC_TYPE) => void
}

const Introduction: React.FC<IntroductionProps> = ({ scrollHandler }) => {
    // get the correct steps
    const lang = useSelector((state: RootState) => state.settings.lang);
    const steps = lang === 'de' ? steps_de : steps_en;

    return (
        <>
            <Grid container spacing={1} sx={{minHeight: 'calc(100vh - 64px)', alignItems: 'center'}}>
                <Box sx={{maxWidth: '768px'}}>

                    <Typography variant="body1">
                        Die Anpassung an und Vorbereitung auf Veränderungen durch den Klimawandel erfordert Entscheidungen auf Basis von unsicheren Informationen über die Zukunft. 
                    </Typography>

                    <Typography variant="body1">
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

                </Box>
            </Grid>
            
            <Grid container spacing={1} sx={{minHeight: '100vh', alignItems: 'center', justifyContent: 'left'}}>
                
                <Grid item xs={12}>
                    <Typography variant="body1" component="p" sx={{maxWidth: '768px'}}>
                        Küstenregionen sind durch den steigenden Meeresspiegel besonders vom Klimawandel betroffen.
                        An der deutschen Nordseeküste leben die Menschen schon lange mit dem Meer und nutzen aufwändige Entwässerungssysteme,
                        um die Landschaft hinter dem Deich, die vielerorts unterhalb des aktuellen Meeresspiegels liegt,
                        nutzbar und sicher bewohnbar zu machen. Doch diese Maßnahmen haben ihre technischen Grenzen, wenn vor dem Deich
                        der Meeresspiegel ansteigt und Sturmfluten häufiger werden, hinter dem Deich winterliche Starkregenereignisse
                        zu einer Überflutung des Hinterlandes führen und sommerliche Trockenperioden zunehmen. Wie genau verschiedene
                        Anpassungsoptionen in unterschiedlichen Zukunftsszenarien wirken, und welche Rolle für die Handlungsentscheidung
                        die Unsicherheit der Vorhersagen spielt, sind die Kernfragen dieses Forschungsprojekts.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{marginTop: '0.5rem', maxWidth: '768px'}}>
                        Mit diesem Wissen wollen wir dabei helfen, individuelle Entscheidungen angesichts einer unsicheren Zukunft treffen zu können:
                    </Typography>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                        <CardContent sx={{textAlign: 'center'}}>
                            <Agriculture sx={{fontSize: '5rem'}} />
                            <Typography variant="h5">Landwirtschaft</Typography>
                            <Typography variant="body2" sx={{height: '100px'}}>
                            Welche Nutzpflanzen lassen sich auch unter veränderten Temperatur- und Niederschlagsbedingungen noch gewinnbringend in der Krummhörn anbauen?<br />
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardActions>
                                <Button onClick={() => scrollHandler('agriculture')}>{lang === 'en' ? 'VISIT TOPIC' : 'ZUM THEMA' }</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                        <CardContent sx={{textAlign: 'center'}}>
                            <WindPower sx={{fontSize: '5rem'}} />
                            <Typography variant="h5">Windenergie</Typography>
                            <Typography variant="body2" sx={{height: '100px'}}>
                            Welche Kombination von Turbinentypen bringt den größten Ertrag an Windenergie bei begrenzter Fläche?<br />
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardActions>
                                <Button onClick={() => scrollHandler('wind')} >{lang === 'en' ? 'VISIT TOPIC' : 'ZUM THEMA' }</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                        <CardContent sx={{textAlign: 'center'}}>
                            <Flood sx={{fontSize: '5rem'}} />
                            <Typography variant="h5">Extremereignisse</Typography>
                            <Typography variant="body2"  sx={{height: '100px'}}>
                            Mit welchen Anpassungsmaßnahmen lassen sich Hochwasserschäden durch zukünftige Extremniederschläge gering halten?
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardActions>
                                <Button onClick={() => scrollHandler('extremes')}>{lang === 'en' ? 'VISIT TOPIC' : 'ZUM THEMA' }</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>                    
                </Grid>

            </Grid>

            
            <hr />
        </>
    );
}

export default Introduction;