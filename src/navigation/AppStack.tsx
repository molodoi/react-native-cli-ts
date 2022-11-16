import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { MaterialIcon } from '../component/Icon';

import HomeScreen from '../screen/HomeScreen';
import AddSpotScreen from '../screen/AddSpotScreen';
import SearchScreen from '../screen/SearchScreen';
import { TabStackParamList } from '../types/types';
import SettingStack from './SettingStack';

const Tab = createBottomTabNavigator<TabStackParamList>();

const AppStack = () => {
    return (
        <Tab.Navigator 
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: 'cornflowerblue',
            tabBarInactiveTintColor: 'black',
          })}
        
        >
            <Tab.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (
                  <MaterialIcon name="home" color={color} size="extraLarge" />
                ),
              }}
            />
            <Tab.Screen 
              name="Search" 
              component={SearchScreen} 
              options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({color}) => (
                  <MaterialIcon name="select-search" color={color} size="extraLarge" />
                ),
              }}
            />
            <Tab.Screen 
              name="AddSpot" 
              component={AddSpotScreen} 
              options={{
                tabBarLabel: 'Add spot',
                tabBarIcon: ({color}) => (
                  <MaterialIcon name="plus" color={color} size="extraLarge" />
                ),
              }}
            />  
            <Tab.Screen 
              name="Menu" 
              component={SettingStack} 
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({color}) => (
                  <MaterialIcon name="menu" color={color} size="extraLarge" />
                ),
              }}
              // listeners={({ navigation }) => ({
              //   tabPress: e => {
              //     e.preventDefault()
              //     navigation.dispatch(DrawerActions.openDrawer());
              //   }
              // })}
            />           
        </Tab.Navigator> 
    );
}

export default AppStack;