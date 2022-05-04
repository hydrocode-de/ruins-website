import { IonCard, IonCardContent, IonCol, IonGrid, IonIcon, IonLabel, IonRow } from "@ionic/react";
import { useSelector } from "react-redux";
import { documentText, logoGithub, settingsOutline } from 'ionicons/icons';
import { RootState } from "../store";

const Featurette : React.FC = () => {
    // get the language
    const lang = useSelector((state: RootState) => state.language.lang);

    return (
        <IonGrid>
            <IonRow>
                <IonCol size="12" sizeLg="3" sizeMd="4" offset="0" offsetLg="2">
                    <IonCard href="https://hydrocode-de.github.io/RUINSapp" target="_blank">
                        <IonCardContent style={{textAlign: 'center'}}>
                            <IonIcon icon={documentText} style={{fontSize: '64px'}}/>
                            <IonLabel>
                                <h2>{lang === 'de' ? 'Beschreibung' : 'Description'}</h2>
                                <p>{lang === 'de' ? 'Erfahre was hinter RUINS steckt und welche Daten wir verwenden' : 'Learn more about RUINS and its data'}</p>
                            </IonLabel>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
                <IonCol size="12" sizeLg="3" sizeMd="4">
                    <IonCard href="https://github.com/hydrocode-de/RUINSapp" target="_blank">
                            <IonCardContent style={{textAlign: 'center'}}>
                                <IonIcon icon={logoGithub} style={{fontSize: '64px'}}/>
                                <IonLabel>
                                    <h2>GitHub</h2>
                                    <p>{lang === 'de' ? 'RUINS ist open source auf GitHub zu finden' : 'RUINS is open source on GitHub'}</p>
                                </IonLabel>
                            </IonCardContent>
                        </IonCard>
                </IonCol>
                <IonCol size="12" sizeLg="3" sizeMd="4">
                <IonCard href="https://hydrocode-de.github.io/RUINSapp" target="_blank">
                        <IonCardContent style={{textAlign: 'center'}}>
                            <IonIcon icon={settingsOutline} style={{fontSize: '64px'}}/>
                            <IonLabel>
                                <h2>{lang === 'de' ? 'Dokumentation' : 'Documentation'}</h2>
                                <p>{lang === 'de' ? 'Technische Dokumentation der einzelnen Anwendungen' : 'Technical documentation of RUINS'}</p>
                            </IonLabel>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
}

export default Featurette;