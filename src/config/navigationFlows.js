import { Navigation } from 'react-native-navigation';
import * as screen from '../containers/screens';

export const authFlow = () => (
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: screen.SCREEN_REGISTER
          }
        }, {
          component: {
            name: screen.SCREEN_LOGIN
          }
        }]
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
        },
        center: {
          bottomTabs: {
            children: [
              {
                component: {
                  name: screen.SCREEN_DASHBOARD
                }
              },
              {
                component: {
                  name: screen.SCREEN_LIST_ARTICLES
                }
              }
            ]
          }

        }
      },
    }
  })
);
