import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('Projects');

  function renderPage() {
    switch (currentPage) {
      case 'Projects':
        return <Projects/>;
      case 'Resume':
        return <Resume/>;
      case 'Contact':
        return <Contact/>;
      default:
        return <About/>;
    }
  };

  return (
    <div>
      <header className="header">
        <h1>Jessica Wade</h1>
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </header>
      <main className="content-wrapper">
        {renderPage(currentPage)}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
