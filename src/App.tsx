import React from 'react';
import './styles.css';
import InfoSection from './components/InfoSection/InfoSection';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="demo">
      <BrowserRouter>
        <InfoSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
