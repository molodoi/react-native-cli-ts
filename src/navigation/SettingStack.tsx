import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from '../screen/SettingScreen';
import ProfileScreen from '../screen/ProfileScreen';

import { SettingStackParamList } from '../types/types';

const SettingStackNavigator = createStackNavigator<SettingStackParamList>();

export default function SettingStack() {
  return (
    <SettingStackNavigator.Navigator initialRouteName="Settings"  >
      <SettingStackNavigator.Screen name="Settings" component={SettingScreen} options={{ headerShown: true }} />
      <SettingStackNavigator.Screen name="Profile" component={ProfileScreen} />
    </SettingStackNavigator.Navigator>
  )
}