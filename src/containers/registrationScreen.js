import { Navigation } from 'react-native-navigation';
import Login from '@containers/Login';
import Drawer from '@containers/Drawer';
import Home from '@containers/Home';
import Register from '@containers/Register';

import WrapperProvider from '../config/WrapperProvider';
import * as screen from '../containers/screens';


export default function registrationScreen() {
  Navigation.registerComponent(screen.SCREEN_LOGIN, () => WrapperProvider(Login));
  Navigation.registerComponent(screen.SCREEN_REGISTER, () => WrapperProvider(Register));
  Navigation.registerComponent(screen.SCREEN_HOME, () => WrapperProvider(Home));
  Navigation.registerComponent(screen.SCREEN_DRAWER, () => WrapperProvider(Drawer));
}
