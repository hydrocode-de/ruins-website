import React from 'react';

import { Box, CssBaseline } from '@mui/material';
import './App.css';

// import pages
import Home from './Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import StreamlitPage from './StreamlitPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';



function App() {
  const location = useLocation();

  
  const H = () => <Box><Home /></Box>
  const U = () => <Box><StreamlitPage src="http://116.203.189.3:42003" title="Uncertainty and Risk" /></Box>
  
  return (
    <>
      <CssBaseline />


        <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="slideLeft" timeout={300}>


        <Routes location={location}>
          <Route path="/" element={<H />}/>

          <Route path="/app/uncertainty" element={<U />} />

          <Route path="/app/weather" element={<StreamlitPage src="http://116.203.189.3:42001" title="Weather and Climate" />} />

          <Route path="*" element={<H />} />

        </Routes>
        
        </CSSTransition>
        </TransitionGroup>

    </>
  );
}

export default App;
