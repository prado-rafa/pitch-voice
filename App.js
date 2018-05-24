import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopNavigator, createSwitchNavigator } from 'react-navigation'

class Intro extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Button
          onPress = {() => this.props.navigation.navigate('Rules')}
          title = '?'
          color= '#23BAA7'
        />
        <Text style={styles.welcome}>Pitch Voice</Text>
        <Button
          onPress = {() => this.props.navigation.navigate('PreGame')}
          title = 'Novo Jogo'
          color = '#23BAA7'
        />
        
      </View>
    );
  }
}

class Rules extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Regras do Jogo</Text>
      </View>
    );
  }
}

class PreGame extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Pré partida</Text>
        <Button
        onPress = {() => this.props.navigation.navigate('Game')}
        title = 'Jogar'
        />
      </View> 
    );
  }
}

class Game extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Partida</Text>
        <Button
        onPress = {() => this.props.navigation.navigate('Ranking')}
        title = 'Pontuação'
        />
      </View>
    );
  }
}

class Ranking extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Ranking</Text>
        <Button
          onPress = {() => this.props.navigation.navigate('PreGame')}
          title = 'Novo Jogo'
          color = '#23BAA7'
        />
        <Button
          onPress = {() => this.props.navigation.navigate('Game')}
          title = 'Próxima Partida'
          color = '#23BAA7'
        />
      </View>
    );
  }b
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4E555D',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight:'800',
    color: '#23BAA7',
  }
  
});
