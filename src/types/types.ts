import type {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgetPassword: undefined;
};

export default RootStackParamList;

export type TabStackParamList = {
  Home: undefined;
  Search: undefined;
  AddSpot: undefined;
  Menu: undefined;
};

export type DetailsScreenRouteProp = RouteProp<TabStackParamList, 'Home'>;


export type SettingStackParamList = {
  Profile: undefined;
  Settings: undefined;
};