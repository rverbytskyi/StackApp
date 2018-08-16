import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
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
      navigationOptions: ({ navigation }) => ({
        title: 'Home',
        headerStyle: {
          backgroundColor: '#273236',
          borderBottomColor: '#111',
        },
        headerTintColor: 'white',
        headerLeft: () => (
          <TouchableOpacity style={style.drawerButton} onPress={() => navigation.toggleDrawer()}>
            <Icon name='ios-menu' size={20} color='white' />
          </TouchableOpacity>
        ),
      }),
    },
  },
)

const Stackoverflow = createStackNavigator(
  {
    Stackoverflow: {
      screen: StackoverflowScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Stack Overflow',
        headerStyle: {
          backgroundColor: '#273236',
          borderBottomColor: '#111',
        },
        headerTintColor: 'white',
        headerLeft: () => (
          <TouchableOpacity style={style.drawerButton} onPress={() => navigation.toggleDrawer()}>
            <Icon name='ios-menu' size={20} color='white' />
          </TouchableOpacity>
        ),
      }),
    },
  },
)

const Logout = createStackNavigator(
  {
    Logout: {
      screen: LogoutScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Logout',
        headerStyle: {
          backgroundColor: '#273236',
          borderBottomColor: '#111',
        },
        headerTintColor: 'white',
        headerLeft: () => (
          <TouchableOpacity style={style.drawerButton} onPress={() => navigation.toggleDrawer()}>
            <Icon name='ios-menu' size={20} color='white' />
          </TouchableOpacity>
        ),
      }),
    },
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
  drawerBackgroundColor: '#273236',
  contentOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: '#36474b',
    inactiveTintColor: 'white',
  },
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

const style = StyleSheet.create({
  drawerButton: {
    paddingHorizontal: 20,
  },
})
