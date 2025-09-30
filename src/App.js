import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AplPcdProject from './components/AplPcdProject';
import HackathonProject from './components/HackathonProject';
import MetricasPage from './components/MetricasPage';

// Página principal do portfólio
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Stack />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          } />
          <Route path="/projeto/apl-pcd-api" element={
            <>
              <Header />
              <AplPcdProject />
              <Footer />
            </>
          } />
          <Route path="/projeto/hackathon-2025" element={
            <>
              <Header />
              <HackathonProject />
              <Footer />
            </>
          } />
          <Route path="/metricas" element={<MetricasPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;