import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shalat from './Pages/Shalat';
import Home from './Pages/Home';
import { ChakraProvider } from '@chakra-ui/react'
import Hadits from './Pages/Hadits';
import JamShalat from './components/JamShalat';
import ListQuran from './Pages/ListQuran';
import BacaQuran from './Pages/BacaQuran';
import BacaQuran2 from './Pages/BacaQuran2';



function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='jam_shalat' Component={Shalat} />
        <Route path='hadits' Component={Hadits} />
        <Route path='/quran' Component={ListQuran}/>
        <Route path='/test' Component={Shalat}/>
        <Route path='/quran/:id' Component={BacaQuran}/>
        <Route path='/bacaquran2' Component={BacaQuran2}/>

      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
