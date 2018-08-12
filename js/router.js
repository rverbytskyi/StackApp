import { createSwitchNavigator, createDrawerNavigator } from 'react-navigation'

import LoginScreen from './containers/Login'
import LogoutScreen from './containers/Logout'

const DrawerNavigation = createDrawerNavigator({}, {})

const SwitchNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    App: DrawerNavigation,
    Logout: LogoutScreen,
  },
  {
    initialRouteName: 'Login',
    resetOnBlur: false,
  },
)

export default SwitchNavigator
