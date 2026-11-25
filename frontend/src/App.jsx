import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectPage } from './pages/ProjectPage';
import { Footer } from './components/Footer';
import traceLogo from './assets/trace-logo.png';

export function App() {
  return (
    <BrowserRouter>
      <div className="page-shell">
        <div className="brand-corner-wrap">
          <div className="container">
            <Link to="/" className="brand-logo-link" aria-label="TRACE Sri Lanka Home">
              <img src={traceLogo} alt="TRACE Sri Lanka" className="brand-logo-img" />
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

