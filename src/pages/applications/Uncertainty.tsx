import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useSelector } from "react-redux";
import StreamlitLoader from "../../components/StreamlitLoader";
import { RootState } from "../../store";

export const Uncertainty: React.FC = () => {
    // get the language
    const lang = useSelector((state: RootState) => state.language.lang);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Climate Explorer</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <StreamlitLoader src={`http://116.203.189.3:42003/?layout=wide&lang=${lang}`} title="Climate Explorer" />
            </IonContent>
        </IonPage>
    );
}

export default Uncertainty;