import React from 'react';
import './App.css';
import StartPage from './StartPage';
import AccountDetails from './AccountDetails'; // Renamed component
import ServicesPage from './ServicesPage'; // Create this component
import OffersPage from './OffersPage'; // Create this component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          {/* Use the Switch component to ensure only one route is matched */}
          <Routes>
            <Route exact path="/" element={<StartPage/>} />
            <Route path="/account-details" element={<AccountDetails/>} /> {/* Updated route */}
            <Route path="/services" element={<ServicesPage/>} /> {/* Create this route */}
            <Route path="/offers" element={<OffersPage/>} /> {/* Create this route */}
            {/* Add more routes for other pages as needed */}
          </Routes>
        </header>
      </Router>
    </div>
  );
}

export default App;
