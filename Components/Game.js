import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Ranking from './Ranking'

export default class Game extends React.Component{
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
  