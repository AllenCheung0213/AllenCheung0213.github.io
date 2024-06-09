import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <main>
                <Education />
                <Skills />
                <Experience />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}

export default App;
