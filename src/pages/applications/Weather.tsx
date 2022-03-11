import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import StreamlitLoader from "../../components/StreamlitLoader";

export const Weather: React.FC = () => (
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
            <StreamlitLoader src="http://65.108.91.149:42001/" title="Weather Explorer" />
        </IonContent>
    </IonPage>
);

export default Weather;