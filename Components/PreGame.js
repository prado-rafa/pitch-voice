import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import Game from './Game';
import {If} from './If';

export default class PreGame extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        players: ['']
      }
      this.handleAddPlayer = this.handleAddPlayer.bind(this);
    }

    handleAddPlayer = () => {
      this.setState({
        players: this.state.players.concat([''])
      });
    }

    renderPlayers = (player, key) => (
        <View key={key} style={styles.playerContainer}>
          <TextInput style={styles.player} key={key} placeholder="Digite o nome do jogador">
            {player}
          </TextInput>
          <View style={styles.teste}></View>
        </View>
    )

    render(){
      return (
        <View style={styles.container}>
          <View style={styles.players}>
            <Text style={styles.playersTitle}>Players: </Text>
          </View>
          <View style={styles.playersList}>
            {this.state.players.map((player,i) => this.renderPlayers(player, i))}
          </View>
          <View>
            <Button style={styles.playersButton} onPress={ () => {
              if (this.state.players.length <= 5) {
                return this.handleAddPlayer();
              } else {
                return false;
              }
              }}
              title='Adicionar Jogador'
            />
          </View>
          <Button style={styles.play} onPress = {() => this.props.navigation.navigate('Game')} title = 'Jogar'/>
        </View> 
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#4E555D',
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    players: {
      height: 50,
      alignSelf: 'flex-start',
    },

    playersTitle: {
      fontSize: 20,
      margin: 10,
      fontWeight:'800',
      color: 'white',
    },

    playersList: {
      width: 250,
    },

    player: {
      height: 50,
      color: 'white',
    },

    teste: {
      position: 'absolute',
      backgroundColor: 'red',
      transform: [{ rotate: '20deg' }],
      height: 50,
    },

    play: {
      marginTop: 60,
    },
    
  });
  