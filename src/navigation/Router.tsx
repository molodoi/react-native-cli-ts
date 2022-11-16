import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useAuth } from '../context/Auth';
import {Loading} from '../component/Loading';

export const Router = () => {
  const {authData, loading} = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {typeof authData === "undefined" ? <AuthStack /> : <AppStack /> }
    </NavigationContainer>
  );
};