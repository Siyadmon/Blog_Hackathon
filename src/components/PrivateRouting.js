import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRouting = () => {
  const navigate = useNavigate();
  const auth = JSON.parse(sessionStorage.getItem('auth'));
  return <div>{auth ? <Outlet /> : navigate('/')}</div>;
};

export default PrivateRouting;
