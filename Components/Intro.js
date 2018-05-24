import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Rules from './Rules'
import PreGame from './PreGame'

export default class Intro extends React.Component{
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
  