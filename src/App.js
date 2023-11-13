import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Project';
import Contact from './components/Contact';
import AboutPage from './components/About';
import WorkExperiencePage from './components/WorkExperience';
function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/himanshu-portfolio" element={<Home />} />
          <Route path="/himanshu-portfolio/experience" element={<WorkExperiencePage/>}/>
          <Route path="/himanshu-portfolio/projects" element={<Projects />} />
          <Route path="/himanshu-portfolio/contact" element={<Contact />} />
          <Route path="/himanshu-portfolio/about" element={<AboutPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
