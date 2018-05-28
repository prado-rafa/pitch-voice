import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PreGame from './PreGame'
import Game from './Game'


class MyButton extends React.Component {
  render() {
      return (
          <Button
              onPress = {this.props.onPress}
              title = {this.props.title}
              color = '#23BAA7'
          />
      );
  }
}

class PlayersList extends React.Component {
  render() {
    return (
      <Text style={styles.playerslist}> {this.props.Text} </Text>
    );
  }
}
class Score extends React.Component {
  render() {
    return (
      <Text style={styles.score}> {this.props.Text} </Text>
    );
  }
}

export default class Ranking extends React.Component{
    constructor(props) {
      super(props) 
        this.state = { 
          rank: [],
          //recieve Points from Game
          currPoints: 10
        }; 
    }
    componentDidMount(){
      // recieve players from Game
      const people = [
        'Malu',
        'Larícia',
        'Rossi'
      ];
      const rank = people.map (person =>{
        return {name: person, points: 0};
      });
      this.setState({
        rank: rank
      })
    }

    //this function is called from Game to give points to a Player.
    winPoints = (nome) => {
      let rank = this.state.rank;
      let currPoints = this.state.currPoints;
      for (let i in rank) {
        if(rank[i].name === nome && currPoints >=0) {
          rank[i].points += currPoints;
          currPoints--;
          break;
        }
      }
        let rank2 = rank;
        rank2.sort((a, b) => {
          
             console.log ("entrou")
             if (a.points < b.points) {
                 console.log("a")
                   return 1;
               } else if (b.points < a.points) {
                 console.log("b")
                   return -1;
               } else {
                   if (a.name < b.name) {
                     console.log("c")
                       return 1;
                   } else if (b.name < a.name) {
                     console.log("d")
                       return -1;
                   }
               }
               console.log("e")
               return 0;
           }
          ); 
      console.log(rank2);
      this.setState({
        rank: rank2,
        currPoints: currPoints
      });
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
    },
    gamebuttons:{
      flexDirection: 'row'
    }, 
    playerslist: {
      color: '#FFFFFF',
      fontSize:20,
      textAlign:'left'
    },
    score: {
      color: '#FFFFFF',
      fontSize:20,
      textAlign: 'right'
    }
    
  });    