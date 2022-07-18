import React from "react";
import "./App.css";
import { Container } from "@mui/material/";
import FirstSection from "./components/Section/FirstSection";
import MainMenu from "./components/Menus/MainMenu";
import CoursesSection from "./components/Section/CoursesSection";

function App() {
  return (
    <Container maxWidth="lg" className="App">
      <MainMenu />
      <FirstSection />
      <CoursesSection />
    </Container>
  );
}

export default App;
