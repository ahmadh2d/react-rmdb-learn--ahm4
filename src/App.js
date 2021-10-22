import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";

// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// styles
import { GlobalStyle } from "./GobalStyle";

// Pages
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
