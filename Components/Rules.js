import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Rules extends React.Component{
    render(){
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Regras do Jogo</Text>
          <Text style={styles.subtitle}>Jogo</Text>
          <Text style={styles.text}>Após adicionar de 2 a 6 jogadores, botões com o nome de cada jogador aparecerá. Clique e segure no seu nome, assim que todos estiverem clicando em seu respectivo botão a partida iniciará.
Uma palavra aparecerá na tela e o primeiro jogador a soltar o dedo fará com que o timer inicie e deverá usar esse tempo para cantar um trecho de uma música que contenha essa palavra ou similar.</Text>
          <Text style={styles.subtitle}>Votação</Text>
          <Text style={styles.text}>Cada jogador, exceto o que cantou, terá a chance de votar. Se você acha que a música cantada contém a palavra ou similar vote “Sim”, se não concorda com a música escolhida vote “Não”, e se não conhece a música ou acha que não deveria opinar vote “Não sei”.</Text>
          <Text style={styles.subtitle}>Pontuação</Text>
          <Text style={styles.text}>Numa partida, ou seja, para a palavra da vez, cada jogador só poderá cantar uma vez. Após a votação, se for decidido que o jogador merece ganhar o ponto, ele receberá uma quantidade x de pontos. Essa quantidade será decrescente, o primeiro que ganhar recebe x pontos, o segundo x-1 e assim sucessivamente.</Text>
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
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontWeight:'800',
      color: '#23BAA7',
    },
    subtitle: {
      fontSize: 18,
      textAlign: 'center',
      margin: 10,
      fontWeight:'600',
      color: '#23BAA7',
    },
    text: {
      fontSize: 14,
      textAlign: 'center',
      margin: 10,
      fontWeight:'200',
      backgroundColor: '#23BAA7',
      color: '#4E555D',
      fontStyle: 'italic',
      textAlign: 'justify',
    }
    
  });
  