import React from 'react';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main>
        <Home />
        <Projects />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
