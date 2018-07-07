import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

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
            <Text style={styles.text}>Inicialmente, para adicionar um jogador, deve-se escrever seu nome e escolher uma cor. Em seguida, os jogadores devem escolher o tempo que cada um terá para cantar, o tempo que cada palavra ficará disponível e a pontuação máxima. </Text>
            <Text style={styles.text}>Quando a partida iniciar, uma palavra aparecerá na tela e o primeiro jogador a clicar no botão com sua cor deverá usar o tempo do timer para cantar um trecho de uma música que contenha essa palavra ou similar.</Text>
            <Text style={styles.text}>Se nenhum jogador souber cantar uma música com a palavra da vez, os jogadores podem escolher clicar no botão<EvilIcons name='refresh' color='#23BAA7' size={25}/>para mudar a palavra.</Text>
            <Text style={styles.text}>Quando o jogador que estiver cantando estiver satisfeito com sua performance e os outros jogadores já tiverem julgado, porém ainda tiver tempo de canto, os jogadores podem escolher clicar no botão <Ionicons name='md-microphone' color='#23BAA7' size={20}/> para passar para o próximo.</Text>
            <Text style={styles.text}>Se o cantor da vez desistir de cantar poderá clicar no botão <Icon name='flag' color='#23BAA7' size={20}/> para passar a vez para o próximo. É importante saber que numa partida, ou seja, para a palavra da vez, cada jogador só poderá cantar uma vez.</Text>
          </View>
          <Text/>
          <View style={styles.border}>
            <Text style={styles.title}>Votação</Text>
            <View style={styles.line}/>
            <Text style={styles.text}>A votação ocorre enquanto o jogador da vez está cantando. Cada jogador, exceto o que cantou, terá a chance de votar. </Text>
            <Text style={styles.text}>Se você acha que a música cantada NÃO contém a palavra ou similar, clique no botão <Feather name="check" color='#23BAA7'size={20}/> de sua cor, aparecerá <Feather name="x" color='#23BAA7'size={20}/>. Porém, se você está de acordo com a música escolhida, apenas espere.</Text>
          </View>
          <Text/>
          <View style={styles.border}>
            <Text style={styles.title}>Pontuação</Text>
            <View style={styles.line}/>
            <Text style={styles.text}>Após o tempo de canto, e consequentemente da votação, se for decidido que o jogador merece ganhar o ponto, ele receberá uma quantidade x de pontos. Essa quantidade será decrescente, o primeiro que ganhar recebe x pontos, o segundo x-1 e assim sucessivamente. Se houver empate entre a quantidade de votos contra e a favor será decidido de forma aleatória pelo PitchVoice se a pessoa receberá ou não o ponto.</Text>
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
  