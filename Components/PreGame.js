import React from 'react';
import {Button, Alert, StyleSheet, Text, TextInput, View , Dimensions, ScrollView} from 'react-native';
import MainScreen from './MainScreen'

const { height } = Dimensions.get('window');


/*
-> O PreGame está aparentemente funcionando. 
-> Ao clicar em jogar, a função play() é acionada e um alert é exibido com todas as informações necessárias ao jogo. acredito que a partir daqui deve abrir um constructor para a classe game propriamemnte dita.
-> Por padrão, a pontuação máxima é 5000 e vai aumentando ou diminuindo de 50 em 50.
-> A variável "showtime" define o tempo de jogo e está em segundos.
-> timeSing é o tempo que o jogador vai ter para cantar.
-> Cada variável de tempo é mudada de 1 em 1 segundo.
-> Não é possível que o jogo comece sem colocar no mínimo 2 jogadores.
*/


const { width } = Dimensions.get('window');


/*
-> O PreGame está aparentemente funcionando. 
-> Ao clicar em jogar, a função play() é acionada e um alert é exibido com todas as informações necessárias ao jogo. acredito que a partir daqui deve abrir um constructor para a classe game propriamemnte dita.
-> Por padrão, a pontuação máxima é 5000 e vai aumentando ou diminuindo de 50 em 50.
-> A variável "showtime" define o tempo de jogo e está em segundos.
-> timeSing é o tempo que o jogador vai ter para cantar.
-> Cada variável de tempo é mudada de 1 em 1 segundo.
-> Não é possível que o jogo comece sem colocar no mínimo 2 jogadores.
*/


export default class PreGame extends React.Component{
	static navigationOptions = {
		title: 'Pré-Partida',
		headerStyle: {
		  backgroundColor: '#23BAA7',
		},
		headerTintColor: '#ffffff',
		headerTitleStyle: {
		  fontSize: 'bold',
		  fontSize: 20,
		},
	  };
	
	constructor(props) {
		super(props);
		this.state = {
			textInput : [],
			players: [],
			redText: true,
			topScore: 100, 
			timeSing: 15, 
			showtime: 30, 
			screenHeight: height, 
			text1: '', 
			text2: '', 
			text3: '', 
			text4: '', 
			text5: '', 
			text6: '',
		};
	}
	
	addTextInput = (key) =>{
		
		if(key >= 6){
			Alert.alert('Você não pode adicionar mais do que 6 jogadores. :( ')
			return;
		}
		
		let textInput = this.state.textInput;
		
		if(key == 0){
			textInput.push(<TextInput key={key} 
			style={{height: 40,width:250, borderColor: 'red', borderWidth: 4, margin: 10}}
			onChangeText={(text1) => this.setState({text1: text1})}/>);
		} else if(key == 1){
			textInput.push(<TextInput key={key} 
			style={{height: 40,width:250, borderColor: 'yellow', borderWidth: 4, margin: 10}}
			onChangeText={(text2) => this.setState({text2: text2})}/>);
		} else if(key == 2){
			textInput.push(<TextInput key={key} 
			style={{height: 40,width:250, borderColor: 'green', borderWidth: 4, margin: 10}}
			onChangeText={(text3) => this.setState({text3: text3})}/>);
		} else if(key == 3){
			textInput.push(<TextInput key={key} 
			style={{height: 40, width:250,borderColor: 'darkblue', borderWidth: 4, margin: 10}}
			onChangeText={(text4) => this.setState({text4})}/>);
		} else if(key == 4){
			textInput.push(<TextInput key={key} 
			style={{height: 40,width:250, borderColor: 'lightskyblue', borderWidth: 4, margin: 10}}
			onChangeText={(text5) => this.setState({text5})}/>);
		} else if(key == 5){
			textInput.push(<TextInput key={key} 
			style={{height: 40,width:250, borderColor: 'purple', borderWidth: 4, margin: 10}}
			onChangeText={(text6) => this.setState({text6})}/>);
		}		

		this.setState ({ textInput: textInput});
	}	
	
	increaseScore = () =>{
		this.setState({topScore: this.state.topScore + 10})
	}
	
	decreaseScore = () =>{
		this.setState({topScore: this.state.topScore - 10});
	}
	
	increaseTime = () =>{
		this.setState({timeSing: this.state.timeSing + 1})
	}
	
	decreaseTime = () =>{
		this.setState({timeSing: this.state.timeSing - 1});
	}
	
	increaseTotalTime = () =>{
		this.setState({showtime: this.state.showtime + 1})
	}
	
	decreaseTotalTime = () =>{
		this.setState({showtime: this.state.showtime - 1});
	}
	
	play = () =>{		
			
		const n = this.state.textInput.length;
		
		if(n == 0){
			Alert.alert('Erro', 'Você deve inserir no mínimo o nome de dois jogadores!');
			return;
		} else if(n == 1){
			Alert.alert('Erro', 'Você deve inserir no mínimo o nome de dois jogadores!');
			return;
		} else if(n == 2){
			Alert.alert('Start game', 'Game stats \nMax Score: '+this.state.topScore +'\nTime to sing: '+this.state.timeSing+'s\nShow Time: '+this.state.showtime+'s\n'
					+'Number of players: '+n  +'\n'
					+'Jogador 1: '+this.state.text1+'\n'
					+'Jogador 2: '+this.state.text2);
		} else if(n == 3){
			Alert.alert('Start game', 'Game stats \nMax Score: '+this.state.topScore +'\nTime to sing: '+this.state.timeSing+'s\nShow Time: '+this.state.showtime+'s\n'
					+'Number of players: '+n  +'\n'
					+'Jogador 1: '+this.state.text1+'\n'
					+'Jogador 2: '+this.state.text2+'\n'
					+'Jogador 3: '+this.state.text3);
		} else if(n == 4){
			Alert.alert('Start game', 'Game stats \nMax Score: '+this.state.topScore +'\nTime to sing: '+this.state.timeSing+'s\nShow Time: '+this.state.showtime+'s\n'
					+'Number of players: '+n  +'\n'
					+'Jogador 1: '+this.state.text1+'\n'
					+'Jogador 2: '+this.state.text2+'\n'
					+'Jogador 3: '+this.state.text3+'\n'
					+'Jogador 4: '+this.state.text4);
		} else if(n == 5){
			Alert.alert('Start game', 'Game stats \nMax Score: '+this.state.topScore +'\nTime to sing: '+this.state.timeSing+'s\nShow Time: '+this.state.showtime+'s\n'
					+'Number of players: '+n  +'\n'
					+'Jogador 1: '+this.state.text1+'\n'
					+'Jogador 2: '+this.state.text2+'\n'
					+'Jogador 3: '+this.state.text3+'\n'
					+'Jogador 4: '+this.state.text4+'\n'
					+'Jogador 5: '+this.state.text5);
		} else if(n == 6){
			Alert.alert('Start game', 'Game stats \nMax Score: '+this.state.topScore +'\nTime to sing: '+this.state.timeSing+'s\nShow Time: '+this.state.showtime+'s\n'
					+'Number of players: '+n  +'\n'
					+'Jogador 1: '+this.state.text1+'\n'
					+'Jogador 2: '+this.state.text2+'\n'
					+'Jogador 3: '+this.state.text3+'\n'
					+'Jogador 4: '+this.state.text4+'\n'
					+'Jogador 5: '+this.state.text5+'\n'
					+'Jogador 6: '+this.state.text6);
		}
		
	}
	
	onContentSizeChange = (contentWidth, contentHeight) => {
	this.setState({ 
			screenHeight: contentHeight,
		});
	};
	
	
	
	
    render(){
		
	const scrollEnabled = this.state.screenHeight > height;
		
      return (		  
		  <ScrollView
          style={{ flex: 1, backgroundColor:'#4E555D' }}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
			<View style={{justifyContent:'center',alignItems:'center'}}>
					
				<Text style={{paddingTop: 5, 
							fontWeight: 'bold', 
							fontSize: 40, 
							alignItems: 'center'}}>
							
							{"Jogadores: "} 
							
				</Text>
				
				{this.state.textInput.map((value, index) => {
				return value
				})}
				
				<Button
				onPress = {() => this.addTextInput(this.state.textInput.length)}
				title = "+          Adicionar Jogadores          +"
				color= '#23BAA7'
				style = {{margin: 20}}
				
				/>
				
				<Text>{}</Text>
				<Text>{}</Text>
				<Text>{}</Text>
				<Text>{}</Text>
				
				<Text style = {{fontSize: 30}}>{'Pontuação máxima: ' + this.state.topScore}</Text>
				
				
				<Button 
				title = "Aumentar pontuação máxima"
				onPress = {this.increaseScore}
				color= '#23BAA7'
				style = {{alignItems: 'center'}}
				/>
				
				<Text>{}</Text>
				
				<Button 
				title = "Diminuir pontuação máxima"
				onPress = {this.decreaseScore}
				color= '#23BAA7'
				style = {{alignItems: 'center'}}
				/>
				
				<Text>{}</Text>
				<Text>{}</Text>
				<Text>{}</Text>
				<Text>{}</Text>
				
				<Text style = {{fontSize: 30}}>{'Tempo de jogo: ' + parseInt(this.state.showtime/60)+':'+ this.state.showtime % 60 }</Text>
				
				<Text>{}</Text>
				
				<Button 
				title = "Aumentar o tempo de jogo"
				onPress = {this.increaseTotalTime}
				color= '#23BAA7'
				style = {{alignItems: 'center'}}
				/>
				
				<Text>{}</Text>
				
				<Button 
				title = "Diminuir o tempo de jogo"
				onPress = {this.decreaseTotalTime}
				color= '#23BAA7'
				style = {{alignItems: 'center'}}
				/>
				
				<Text>{}</Text>
				
				
				<Text style = {{fontSize: 30}}>{'Tempo para cantar: ' + this.state.timeSing +'s'}</Text>
				
				<Button 
				title = "Aumentar tempo"
				onPress = {this.increaseTime}
				color= '#23BAA7'
				style = {{alignItems: 'center'}}
				/>
				
				<Text>{}</Text>
				
				<Button 
				title = "Diminuir tempo"
				onPress = {this.decreaseTime}
				color= '#23BAA7'
				style = {{alignItems: 'center'}}
				/>
				
				<Text>{}</Text>
				<Text>{}</Text>
				<Text>{}</Text>
				<Text>{}</Text>
				<Text>{}</Text>
				<Text>{}</Text>
				
				<Button 
				title = "Play!"
				onPress = {() => this.props.navigation.navigate('MainScreen', {
					topScore: this.state.topScore,
					timeSing: this.state.timeSing,
					showtime: this.state.showtime,
					text1: this.state.text1,
					text2: this.state.text2,
					text3: this.state.text3,
					text4: this.state.text4,
					text5: this.state.text5,
					text6: this.state.text6,
				})}
				color= '#23BAA7'
				style = {{alignItems: 'flex-end'}} 
				/>

			</View>
		</ScrollView>
          
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4E555D',
      alignItems: 'center',
      justifyContent: 'center'
    }, 
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontWeight:'800',
      color: '#23BAA7',
    }, 
	
	scrollview: {
		right:'0%',
	}
    
  });
  
