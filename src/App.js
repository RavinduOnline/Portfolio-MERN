import React from 'react';
import "./App.css"
import {BrowserRouter, Router , Routes , Route} from "react-router-dom"
import Home from "./components/home"





function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
