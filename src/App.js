import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Homepage from './components/Homepage';
import Header from './Header';
import Installation from './components/Installation';
import NewReactApp from './components/NewReactApp';
import AddComponents from './components/AddComponents';
import Stylesheets from './components/Stylesheets';
import Alerts from './components/Alerts';
import Breadcrumbs from './components/Breadcrumbs';
import Buttons from './components/Buttons';
import Carousal from './components/Carousal';
import Cards from './components/Cards';
import Dropdowns from './components/Dropdowns';

//Session 3 
import Components from './components/Components';
import StateHook from './components/StateHook';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';

export default function App() {
 
  return (<>
    <div className='app'>
    <Header/>

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/components/comps' element={<Components/>}/>
          <Route path="/components/useState" element={<StateHook text={`Focused, hard work is the real key
            to success. Keep your eyes on the goal, 
            and just keep taking the next step 
            towards completing it.`}
            maxLength={35}/>}/>
          <Route path="/components/useEffect" element={<UseEffect/>}/>
          <Route path="//components/useRef" element={<UseRef/>}/>
          <Route path="/components/alerts" element={<Alerts/>}/>
          <Route path="/components/breadcrumbs" element={<Breadcrumbs/>}/>
          <Route path="/components/buttons" element={<Buttons/>}/>
          <Route path="/components/cards" element={<Cards/>}/>
          <Route path="/components/carousals" element={<Carousal/>}/>
          <Route path="/components/dropdowns" element={<Dropdowns/>}/>

        </Routes>
      </Router>
    </div>
  </>
  );
}



