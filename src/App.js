import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shalat from './Pages/Shalat';
import Home from './Pages/Home';
import { ChakraProvider } from '@chakra-ui/react'

import Hadits from './Pages/Hadits';



function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='jam_shalat' Component={Shalat} />
        <Route path='hadits' Component={Hadits} />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
