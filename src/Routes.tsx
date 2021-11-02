import React from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Feed from './pages/Feed';
import WhoAreWe from './pages/WhoAreWe';

const RoutesHands: React.FC = () => {

  return (
    <Routes>
      <Route path={'/'} element={<Login />} />
      <Route path={'/feed'} element={<Feed />} /> 
      <Route path={'/feed/faq'} element={<WhoAreWe />} /> 
    </Routes>
  );
};

export default RoutesHands;
