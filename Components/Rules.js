import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Rules extends React.Component{
  static navigationOptions = {
    title: 'Regras',
    headerStyle: {
      backgroundColor: '#23BAA7',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontSize: 'bold',
      fontSize: 20,
    },
  };

    render(){
      return (
        <View style={styles.container}>
          <ScrollView>
          <View style={styles.border}>
            <Text style={styles.title}>Jogo</Text>
            <View style={styles.line}/>
            <Text style={styles.text}>Após adicionar os jogadores, cada um será associado a uma cor. Assim que todos clicarem e estiverem segurando seu respectivo botão a partida iniciará.
Uma palavra aparecerá na tela e o primeiro jogador a soltar o dedo deverá usar o tempo do timer para cantar um trecho de uma música que contenha essa palavra ou similar.</Text>
          </View>
          <Text/>
          <View style={styles.border}>
            <Text style={styles.title}>Votação</Text>
            <View style={styles.line}/>
            <Text style={styles.text}>Cada jogador, exceto o que cantou, terá a chance de votar. Se você acha que a música cantada contém a palavra ou similar vote <Icon name="smile-o" size={20} color='#23BAA7'/> e se não concorda com a música escolhida vote <Icon name="frown-o" size={20} color='#23BAA7'/>.</Text>
          </View>
          <Text/>
          <View style={styles.border}>
            <Text style={styles.title}>Pontuação</Text>
            <View style={styles.line}/>
            <Text style={styles.text}>Numa partida, ou seja, para a palavra da vez, cada jogador só poderá cantar uma vez. Após a votação, se for decidido que o jogador merece ganhar o ponto, ele receberá uma quantidade x de pontos. Essa quantidade será decrescente, o primeiro que ganhar recebe x pontos, o segundo x-1 e assim sucessivamente. Se houver empate entre a quantidade de <Icon name="smile-o" size={20} color='#23BAA7'/> e <Icon name="frown-o" size={20} color='#23BAA7'/> será decidido de forma aleatória pelo PitchVoice se a pessoa merece ou não o ponto.</Text>
          </View>
        </ScrollView>
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
    title: {
      fontSize: 18,
      textAlign: 'center',
      margin: 10,
      fontWeight:'600',
      color: '#ffffff',
    },
    text: {
      fontSize: 14,
      textAlign: 'center',
      margin: 10,
      fontWeight:'200',
      color: '#ffffff',
      fontStyle: 'italic',
      textAlign: 'justify',
    },
    border: {
      borderColor: '#23BAA7',
      borderRadius: 10,
      borderWidth: 1,
    },
    line: {
      borderBottomColor: '#23BAA7',
      borderBottomWidth: 1,
      marginLeft: 20,
      marginRight:20,
    }
    
  });
  