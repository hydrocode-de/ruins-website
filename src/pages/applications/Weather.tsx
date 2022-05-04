import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useSelector } from "react-redux";
import StreamlitLoader from "../../components/StreamlitLoader";
import { RootState } from "../../store";

export const Weather: React.FC = () => {
    // get language
    const lang = useSelector((state: RootState) => state.language.lang);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Weather Explorer</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <StreamlitLoader src={`http://116.203.189.3:42001/?layout=wide&lang=${lang}`} title="Weather Explorer" />
            </IonContent>
        </IonPage>
    );
}

export default Weather;