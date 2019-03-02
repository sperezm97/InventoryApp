import { Navigation } from 'react-native-navigation';
import Login from '@containers/Login'
import Drawer from '@containers/Drawer'
import Home from '@containers/Home'
import Register from '@containers/Register'

import WrapperProvider from '../config/WrapperProvider';

export default function registrationScreen() {
  Navigation.registerComponent('inv.Login', () => WrapperProvider(Login));
  Navigation.registerComponent('inv.Register', () => WrapperProvider(Register));
  Navigation.registerComponent('inv.Home', () => WrapperProvider(Home));
  Navigation.registerComponent('inv.Drawer', () => WrapperProvider(Drawer));
}
