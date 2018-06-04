import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Timer from './Timer'
import Ranking from './Ranking'

export default class Game extends React.Component{
    render(){
      const { navigation } = this.props;
      const topScore = navigation.getParam('topScore');
      const timeSing = navigation.getParam('timeSing');
      const showtime = navigation.getParam('showtime');
      const text1 = navigation.getParam('text1');
      const text2 = navigation.getParam('text2');
      const text3 = navigation.getParam('text3');
      const text4 = navigation.getParam('text4');
      const text5 = navigation.getParam('text5');
      const text6 = navigation.getParam('text6');

      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Partida</Text>
          <Button
          onPress = {() => this.props.navigation.navigate('Ranking', {
              topScore: topScore,
              timeSing: timeSing,
              showtime: showtime,
              text1: text1,
              text2: text2,
              text3: text3,
              text4: text4,
              text5: text5,
              text6: text6,
            })}
          title = 'Ranking'
          />
          <Button
          onPress = {() => this.props.navigation.navigate('Timer', {
              topScore: topScore,
              timeSing: timeSing,
              showtime: showtime,
              text1: text1,
              text2: text2,
              text3: text3,
              text4: text4,
              text5: text5,
              text6: text6,
            })}
          title = 'Jogar'
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
  