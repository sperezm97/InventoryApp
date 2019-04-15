// /**
//  * @format
//  * @lint-ignore-every XPLATJSCOPYRIGHT1
//  */

import { Navigation } from 'react-native-navigation';
import _ from 'lodash';
import * as navFlows from './src/config/navigation-flows';
import registrationScreen from './src/containers/registrationScreen';
import getStore from './src/store';

const store = getStore();
registrationScreen();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false
    },
    statusBar: {
      visible: true,
      style: 'light'
    },
    layout: {
      orientation: ['portrait']
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
      visible: true,
      animate: true,
      currentTabId: '',
      currentTabIndex: 0,
      drawBehind: false,
      barStyle: 'default',
      translucent: false,
      hideShadow: false
    },
    bottomTab: {
      textColor: 'gray',
      selectedTextColor: 'black',
      iconColor: 'gray',
      selectedIconColor: 'black'
    },
    sideMenu: {
      left: {
        shouldStretchDrawer: true,
        animationVelocity: 2500,
        width: 260,
        height: 270,
        visible: false,
        enabled: true
      },
      animationType: 'parallax',
      openGestureMode: 'entireScreen'
    },
    overlay: {
      interceptTouchOutside: true
    }
  });
  if (!_.isEmpty(store.getState().auth.user)) {
    navFlows.principalFlow();
  } else {
    navFlows.authFlow();
  }
});
