import React from 'react';
import './styles.css';
import InfoSection from './components/InfoSection/InfoSection';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <InfoSection />
    </BrowserRouter>
  );
}

export default App;
