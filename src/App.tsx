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




function App() {
  // custom location for routing
  const location = useLocation();

  // subscribe to window resizes
  const { width } = useWindowSize();


  // Page shortcuts
  let H: React.ElementType;
  if (width < 1200) {
    H =() => <Box><MobileHome /></Box>
  } else {
    H = () => <Box><Home /></Box>
  }
  const U = () => <Box><StreamlitPage src="http://116.203.189.3:42003" title="Uncertainty and Risk" /></Box>
  const W = () => <Box><StreamlitPage src="http://116.203.189.3:42001" title="Weather and Climate" /></Box>

  return (
    <>
      <CssBaseline />


        <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="slide-left" timeout={50}>


        <Routes location={location}>
          <Route path="/" element={<H />}/>

          <Route path="/app/uncertainty" element={<U />} />

          <Route path="/app/weather" element={<W />} />

          <Route path="*" element={<H />} />

        </Routes>
        
        </CSSTransition>
        </TransitionGroup>

    </>
  );
}

export default App;
