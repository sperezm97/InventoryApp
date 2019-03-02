import { Navigation } from 'react-native-navigation';

export const registrationScreen = () => {
    Navigation.registerComponent('inv.Login', () => require('./Login').default)
    Navigation.registerComponent('inv.Register', () => require('./Register').default)
    Navigation.registerComponent('inv.Home', () => require('./Home').default)
    Navigation.registerComponent('inv.Drawer', () => require('./Drawer').default)
}