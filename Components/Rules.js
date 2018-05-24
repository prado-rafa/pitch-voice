import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Rules extends React.Component{
    render(){
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Regras do Jogo</Text>
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
  