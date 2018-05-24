import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopNavigator, createSwitchNavigator } from 'react-navigation'
import Intro from './Components/Intro'
import Rules from './Components/Rules'
import PreGame from './Components/PreGame'
import Game from './Components/Game'
import Ranking from './Components/Ranking'

const IntroStack = createStackNavigator({
  Intro: Intro,
  Rules: Rules,
  PreGame: PreGame
})

export default createSwitchNavigator({
  Intro: IntroStack,
  Game: Game,
  Ranking: Ranking,
  PreGame: PreGame,
})
