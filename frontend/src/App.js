import "./App.css";
import { Container } from "react-bootstrap";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homescreen from "./components/screens/HomeScreen";
import BookScreen from "./components/screens/BookScreen";


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/book/:id" element={<BookScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}



export default App;
