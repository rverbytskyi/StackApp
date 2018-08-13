import { createSwitchNavigator, createDrawerNavigator } from 'react-navigation'

import HomeScreen from './containers/Home'
import StackoverflowScreen from './containers/StackList'
import LoginScreen from './containers/Login'
import LogoutScreen from './containers/Logout'

const DrawerNavigation = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  StackList: {
    screen: StackoverflowScreen,
  },
  Logout: {
    screen: LogoutScreen,
  },
}, {
  drawerBackgroundColor: 'white',
})

const SwitchNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    App: DrawerNavigation,
  },
  {
    initialRouteName: 'Login',
    resetOnBlur: false,
  },
)

export default SwitchNavigator
