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
import Login from "./components/Login";

// Context
import UserProvider from "./context";

function App() {
    return (
        <Router>
            <UserProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/:movieId" element={<Movie />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <GlobalStyle />
            </UserProvider>
        </Router>
    );
}

export default App;
