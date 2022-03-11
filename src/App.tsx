import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ParallaxProvider } from 'react-scroll-parallax';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Import the redux store and provider */
import { store } from './store';
import { Provider } from 'react-redux';

/* Pages */
import Home from './pages/Home';
import StaticPage from './pages/StaticPage';
import Weather from './pages/applications/Weather';

setupIonicReact();

const App: React.FC = () => (
  <Provider store={store}>
  <ParallaxProvider>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" exact={true}>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact={true}>
            <Home />
          </Route>
          <Route path="/introduction" exact={true}>
            <StaticPage title="Introduction" name="Intro" />
          </Route>
          <Route path="/weather" exact={true}>
            <Weather />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </ParallaxProvider>
  </Provider>
);

export default App;
