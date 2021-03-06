import { Navigation } from 'react-native-navigation';
import Login from '@containers/Login';
import Drawer from '@containers/Drawer';
import Dashboard from '@containers/Dashboard';
import Register from '@containers/Register';
import ListArticles from '@containers/ListArticles';

import WrapperProvider from '@config/WrapperProvider';
import * as screen from '@containers/screens';


export default function registrationScreen() {
  Navigation.registerComponent(screen.SCREEN_LOGIN, () => WrapperProvider(Login));
  Navigation.registerComponent(screen.SCREEN_REGISTER, () => WrapperProvider(Register));
  Navigation.registerComponent(screen.SCREEN_DASHBOARD, () => WrapperProvider(Dashboard));
  Navigation.registerComponent(screen.SCREEN_DRAWER, () => WrapperProvider(Drawer));
  Navigation.registerComponent(screen.SCREEN_LIST_ARTICLES, () => WrapperProvider(ListArticles));

};
