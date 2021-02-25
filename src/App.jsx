import React from 'react';
import { Router, Link } from '@reach/router';
import CallbackPage from './pages/Callback';
import HomePage from './pages';
import LoginButton from './components/LoginButton';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <LoginButton />
      </header>
      <main>
        <Router>
          <HomePage path="/" />
          <CallbackPage path="/callback" />
        </Router>
        
      </main>
      <footer>
        React⚛️ + Vite⚡ + Replit🌀
      </footer>
    </div>
  );
}

export default App;