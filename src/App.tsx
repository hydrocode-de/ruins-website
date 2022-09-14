import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Box, CssBaseline } from '@mui/material';

import useWindowSize from './hooks/useWindowSize';
import './App.css';

// import pages
import Home from './Home';
import MobileHome from './MobileHome';
import StreamlitPage from './StreamlitPage';
import ImprintPage from './static/Imprint';




function App() {
  // custom location for routing
  const location = useLocation();

  // subscribe to window resizes
  const { width } = useWindowSize();


  // Page shortcuts
  let HomePage: React.ElementType;
  if (width < 1200) {
    HomePage =() => <Box><MobileHome /></Box>
  } else {
    HomePage = () => <Box><Home /></Box>
  }
  
  // streamlit apps
  const Uncertainty = () => <Box><StreamlitPage src="http://116.203.189.3:42003" title="Uncertainty and Risk" /></Box>
  const Weather = () => <Box><StreamlitPage src="http://116.203.189.3:42001" title="Weather and Climate" /></Box>
  const Sunburst = () => <Box><StreamlitPage src="http://116.203.189.3:42010" title="Climate Model Overview" /></Box>
  const Landuse = () => <Box><StreamlitPage src="http://116.203.189.3:42004" title="Landuse management under uncertainty"/></Box>
  const Extemes = () => <Box><StreamlitPage src="http://116.203.189.3:42002" title="Extremes and Floods" /></Box>

  return (
    <>
      <CssBaseline />


        <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="slide-left" timeout={50}>


        <Routes location={location}>
          <Route path="/" element={<HomePage />}/>

          <Route path="/app/uncertainty" element={<Uncertainty />} />

          <Route path="/app/weather" element={<Weather />} />

          <Route path="/app/sunburst" element={<Sunburst />} />

          <Route path="/app/landuse" element={<Landuse />} />

          <Route path="/app/extremes" element={<Extemes />} />

          <Route path="/imprint" element={<ImprintPage />} />

          <Route path="*" element={<HomePage />} />

        </Routes>
        
        </CSSTransition>
        </TransitionGroup>

    </>
  );
}

export default App;
