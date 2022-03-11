import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonListHeader, IonMenu, IonMenuButton, IonPage, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react";
import { useSelector } from "react-redux";
import LanguageSwitch from "../components/LanguageSwitch";
import MarkdownLoader from "../components/MarkdownLoader";
import { RootState } from "../store";

interface StaticPageProps {
    title: string;
    name: string;
}

const StaticPage: React.FC<StaticPageProps> = ({ title, name }) => {
    // get the current language
    const lang = useSelector((state: RootState) => state.language.lang);
    
    return (
        <IonContent>
            <IonSplitPane contentId="main">
                <IonMenu menuId="men" contentId="main">
                    <IonHeader>
                        <IonButtons slot="start">
                            <IonBackButton />
                        </IonButtons>
                        <IonToolbar>
                            <IonTitle>{lang === 'de' ? 'Menü' : 'Menu'}</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                    <IonList>
                        <IonListHeader>
                            <IonTitle>{lang === 'de' ? 'Seite' : ' Sites'}</IonTitle>
                        </IonListHeader>
                        <IonItem routerLink="/introduction" routerDirection="forward">{lang === 'de' ? 'Übersicht' : 'Overview'}</IonItem>
                        <IonListHeader>
                            <IonTitle>{lang === 'de' ? 'Anwendungen' : 'Applications'}</IonTitle>
                        </IonListHeader>
                        <IonItem routerLink="/weather" routerDirection="forward">Weather Explorer</IonItem>
                    </IonList>
                    </IonContent>
                </IonMenu>
                <IonPage id="main">
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonBackButton />
                                <IonMenuButton menu="men" />
                            </IonButtons>
                            <IonTitle>{ title }</IonTitle>
                            <IonButtons slot="end">
                                <LanguageSwitch />
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <MarkdownLoader src={ name } />
                    </IonContent>
                </IonPage>
            </IonSplitPane>
        </IonContent>  
)};

export default StaticPage;