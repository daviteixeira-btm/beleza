import React from "react";
import "./App.css";
import { Container } from "@mui/material/";
import FirstSection from "./components/Section/FirstSection";
import MainMenu from "./components/Menus/MainMenu";
import CoursesSection from "./components/Section/CoursesSection";
import Footer from "./components/Footer/Footer";
import FrequentQuestions from "./components/Acordion/FrequentQuestions";
import SecondSection from "./components/Section/SecondSection";

function App() {
  return (
    <Container maxWidth="lg" className="App">
      <MainMenu />
      <FirstSection />
      <SecondSection />
      <CoursesSection />
      <FrequentQuestions />
      <Footer />
    </Container>
  );
}

export default App;
