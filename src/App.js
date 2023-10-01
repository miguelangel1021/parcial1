import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Partes from './components/partes';
import Detail from './components/detail';
import { IntlProvider } from 'react-intl';
import esMessages from './locales/es';
import enMessages from './locales/en';
import { useEffect, useState } from 'react';

function App() {


  const [userLanguage, setUserLanguage] = useState("es"); // Establece un idioma predeterminado
  

  useEffect(() => {
    // Determina el idioma del navegador
    const detectedLanguage = navigator.language.split("-")[0];
    setUserLanguage(detectedLanguage);
    
  }, []);


  return (
    <div className="App">

    <IntlProvider locale={userLanguage} messages= { userLanguage === 'es' ? esMessages :enMessages}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/parts" element = {<Partes/>}/>
            <Route path="/parts/:partName" element = {<Detail />}/>
          </Routes>
        </BrowserRouter>
        </IntlProvider>
    
    </div>
  );
}

export default App;
