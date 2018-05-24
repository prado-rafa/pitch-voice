import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PreGame from './PreGame'
import Game from './Game'

export default class Ranking extends React.Component{
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
    }
  }
  
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
  