import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

//screens import
import HomeScreen from '../screen/HomeScreen';
import SettingScreen from '../screen/SettingScreen';
import AppStack from './AppStack';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const MenuDrawer = () => {
  return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerLabelStyle: {
            marginLeft: -20,
          },
        }}
        useLegacyImplementation
      >
        {/* Drawer Screens here */}
        <Drawer.Screen
        name="AppStack"
        component={AppStack}
      />
        <Drawer.Screen name="Settings" component={SettingScreen} />
      </Drawer.Navigator>
  );
};

export default MenuDrawer;