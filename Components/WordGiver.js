import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import words from './dicionaries/words.json';

export default class WordGiver extends React.Component{
    giveWord(){
        got=0;
        while(got<(words.wordcount/2)){
            var rand = Math.floor(Math.random() * words.wordcount);
            if(!(words.wordlist[rand].showed)){
                words.wordlist[rand].showed=true;
                return words.wordlist[rand].word;
            }
            got=got+1;
        }
        for(i=0;i<wordcount;i++){
            words.wordlist[i].showed=false;
        }
    }
    render(){
      return (
        <View style={styles.container}>
          <Button
          onPress = {() => alert(this.giveWord())}
          title = 'Aleatorio'
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
  
