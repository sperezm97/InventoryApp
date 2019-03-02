import { Navigation } from 'react-native-navigation';

export const authFlow = () => Navigation.setRoot({
    root:{
      stack:{
        children:[
         { 
          component: {
            name: 'inv.Login'
          }
        },
        {
          component:{
            name: 'inv.Register'
          }
        }
        ]
      }
    }
  })

  export const homeFLow = ()=> Navigation.setRoot({
    root:{
        stack:{
            children:[
                {
                    component: {
                        name: 'inv.Home'
                    }
                }
            ]
        }
}
  })

  export const principalFlow = () => Navigation.setRoot({
    root: {
      sideMenu :{
        left:{
          component: 'inv.Drawer',

        }
      },
      bottomTabs:{
        children:[
          { component: {
              name: 'inv.Home'
          }},
          { component: {
              name: 'inv.Home'
          } },

        ]
      }
    }
  });