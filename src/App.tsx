import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import RoutesHands from './Routes';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
        <RoutesHands />
        <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
