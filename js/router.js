import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { createSwitchNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation'

import HomeScreen from './containers/Home'
import StackoverflowScreen from './containers/StackList'
import LoginScreen from './containers/Login'
import LogoutScreen from './containers/Logout'

const Home = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#273236',
          borderBottomColor: '#111',
        },
        headerTintColor: 'white',
      },
    },
  },
  {
    headerLeft: ({ navigation }) => (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon name='ios-menu' size={20} color='white' />
      </TouchableOpacity>
    ),
  },
)

const Stackoverflow = createStackNavigator(
  {
    Stackoverflow: {
      screen: StackoverflowScreen,
      navigationOptions: {
        title: 'Stackoverflow',
        headerStyle: {
          backgroundColor: '#273236',
          borderBottomColor: '#111',
        },
        headerTintColor: 'white',
      },
    },
  },
  {
    headerLeft: ({ navigation }) => (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon name='ios-menu' size={20} color='white' />
      </TouchableOpacity>
    ),
  },
)

const Logout = createStackNavigator(
  {
    Logout: {
      screen: LogoutScreen,
      navigationOptions: {
        title: 'Logout',
        headerStyle: {
          backgroundColor: '#273236',
          borderBottomColor: '#111',
        },
        headerTintColor: 'white',
      },
    },
  },
  {
    headerLeft: ({ navigation }) => (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon name='ios-menu' size={20} color='white' />
      </TouchableOpacity>
    ),
  },
)

const DrawerNavigation = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  StackList: {
    screen: Stackoverflow,
  },
  Logout: {
    screen: Logout,
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
