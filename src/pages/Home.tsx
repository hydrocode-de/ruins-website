import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useSelector } from 'react-redux';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

import LanguageSwitch from '../components/LanguageSwitch';
import { RootState } from '../store';
import HTMLFragment from '../components/HTMLFragment';

import './Home.css';
import Flowchart from '../components/Flowchart';
import Featurette from '../components/Featurette';
import InfoSegment from '../components/InfoSegment';


const Home: React.FC = () => {
  // get the language settings
  const lang = useSelector((state: RootState) => state.language.lang);
  
  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>RUINS app</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/introduction" routerDirection="forward">{lang === 'en' ? 'About' : 'Mehr Info'}</IonButton>
            <LanguageSwitch />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ParallaxBanner 
          layers={[
            {image: "https://picsum.photos/1920/840", speed: -20, opacity: [0, 0.8]},
          ]}
          style={{aspectRatio: '2 / 1', height: '300px'}}
        >
          <div style={{height: '100%', width: '100%', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h1 style={{fontWeight: 'bold', letterSpacing: 3.3, fontSize: '5rem'}}>RUINS</h1>
          </div>
        </ParallaxBanner>
        
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="7" offset="0" offsetMd="2">
            <HTMLFragment src="teaser" />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12" sizeMd="7" offset="0" offsetMd="2">
            <Flowchart />
            </IonCol>
          </IonRow>
        </IonGrid>

        <Featurette />

        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="10" offset="0" offsetMd="1">
              <InfoSegment />
            </IonCol>
          </IonRow>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
