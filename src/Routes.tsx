import React from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Feed from './pages/Feed';

const RoutesHands: React.FC = () => {

  return (
    <Routes>
      <Route path={'/'} element={<Login />} />
      <Route path={'/feed/*'} element={<Feed />} /> 
    </Routes>
  );
};

export default RoutesHands;
