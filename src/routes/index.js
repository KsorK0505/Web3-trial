// Routes.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainContainer from '../containers/MainContainer';
import DetailContainer from '../containers/DetailContainer';
import AboutContainer from '../containers/AboutContainer';
import NotfoundContainer from '../containers/NotfoundContainer';
import LoginContainer from '../containers/LoginContainer';

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/main" element={<MainContainer />} />
        <Route path="/detail" element={<DetailContainer />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path='*' element={<NotfoundContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
