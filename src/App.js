import React from 'react';
import './App.css';
import { Container } from "@mui/material/";
import FirstSection from './components/Section/FirstSection';
import MainMenu from './components/Menus/MainMenu';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <MainMenu />
        <FirstSection />
      </Container>
    </div>
  );
}

export default App;
