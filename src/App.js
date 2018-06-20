/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Tutorial: https://medium.com/@ladyleet/building-your-first-react-native-app-4f21ced91064
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styled from 'styled-components/native';
import { createBottomTabNavigator } from 'react-navigation';
import Angular from './screens/Angular';
import Ember from './screens/Ember';
import ReactJS from './screens/React';
import Vue from './screens/Vue';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Container = styled.View`
  justifyContent: center;
  alignItems: center;
  backgroundColor: #F5FCFF;
  margin: 200px;
`;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <Container>
        <Image source={require('./img/jeopardy-js.png')}/>
      </Container>
    );
  }
}

const mainNavigator = createBottomTabNavigator({
  Home: {
  screen: App,
  path: ''
  },
  Angular: {
  screen: Angular,
  path: 'angular'
  },
  React: {
  screen: ReactJS,
  path: 'react'
  },
  Ember: {
  screen: Ember,
  path: 'ember'
  },
  Vue: {
  screen: Vue,
  path: 'vue'
  }
  });

  App.navigationOptions = {
    tabBarIcon: () => (
      <Image source={require('./img/js.png')}/>
    )
  }

AppRegistry.registerComponent('Test', () => mainNavigator);
