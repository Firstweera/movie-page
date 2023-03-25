import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Search } from "./pages";
import { Nav } from "./components";

export const MovieContext = createContext();

function App() {
  const [movieName, setMovieName] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <MovieContext.Provider value={{ movieName, setMovieName }}>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search" element={<Search />} />
          </Routes>
        </MovieContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
