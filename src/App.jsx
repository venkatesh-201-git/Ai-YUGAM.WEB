import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-secondary/30 selection:text-blue-900 overflow-x-hidden">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
