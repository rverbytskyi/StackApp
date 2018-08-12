import { createSwitchNavigator, createDrawerNavigator } from 'react-navigation'

import LoginScreen from './containers/Login'

const DrawerNavigation = createDrawerNavigator({}, {})

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
