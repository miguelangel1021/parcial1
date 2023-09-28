import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Partes from './components/partes';
import Detail from './components/detail';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/parts" element = {<Partes/>}/>
            <Route path="/parts/:partName" element = {<Detail/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
