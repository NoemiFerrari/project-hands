import React from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Faq from './pages/Faq';
import WhoAreWe from 'pages/WhoAreWe';
import Profile from 'pages/Profile';
import ContactUs from 'pages/ContactUs';

const RoutesHands: React.FC = () => {

  return (
    <Routes>
      <Route path={'/'} element={<Login />} />
      <Route path={'/feed'} element={<Feed />} /> 
      <Route path={'/feed/faq'} element={<Faq />} /> 
      <Route path={'/feed/quem-somos'} element={<WhoAreWe />} /> 
      <Route path={'/feed/perfil'} element={<Profile />} /> 
      <Route path={'/feed/fale-conosco'} element={<ContactUs />} /> 
    </Routes>
  );
};

export default RoutesHands;
