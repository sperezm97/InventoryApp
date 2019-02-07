// /**
//  * @format
//  * @lint-ignore-every XPLATJSCOPYRIGHT1
//  */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Navigation } from "react-native-navigation";
import App from "./App";

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});

AppRegistry.registerComponent(appName, () => App);
