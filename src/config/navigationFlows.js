import { Navigation } from 'react-native-navigation';
import * as screen from '../containers/screens';

export const authFlow = () => (
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: screen.SCREEN_LOGIN
            }
          },
          {
            component: {
              name: screen.SCREEN_REGISTER
            }
          }
        ]
      }
    }
  })
);

export const homeFLow = () => (
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: screen.SCREEN_HOME
            }
          }
        ]
      }
    }
  })
);

export const principalFlow = () => (
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: screen.SCREEN_DRAWER
        }
      },
      bottomTabs: {
        children: [
          {
            component: {
              name: screen.SCREEN_HOME
            }
          },
          {
            component: {
              name: screen.SCREEN_HOME
            }
          }
        ]
      }
    }
  })
);
