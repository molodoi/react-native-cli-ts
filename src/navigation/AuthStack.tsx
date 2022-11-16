import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RootStackParamList from '../types/types';
import LoginScreen from '../screen/Auth/LoginScreen';
import RegisterScreen from '../screen/Auth/RegisterScreen';
import ForgetPasswordScreen from '../screen/Auth/ForgetPasswordScreen';

const AuthStackNavigator = createStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <AuthStackNavigator.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }} >
      <AuthStackNavigator.Screen name="Login" component={LoginScreen} />
      <AuthStackNavigator.Screen name="Register" component={RegisterScreen} />
      <AuthStackNavigator.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthStack;

