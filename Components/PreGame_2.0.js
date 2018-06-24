import React from 'react';
import {StyleSheet, Text, TextInput, View ,ScrollView, TouchableOpacity, Slider, Alert} from 'react-native';

export default class Pre extends React.Component {
	
	
	
	static navigationOptions = {
		title: 'Pre Game'
	}

	constructor(props) {
		super(props);
		this.state = {
			
			topScore: 100, 
			timeSing: 15, 
			showtime: 30,
			players: [],
			nPlayers: 0,
			names:[],
			colors: [],
			currentName: "",
			colorChoosed: "white",			
			redHasChoosed: false,
			yellowHasChoosed: false,
			darkBlueHasChoosed: false,
			greenHasChoosed: false,
			purpleHasChoosed: false,
			lightBlueHasChoosed: false
		};
	}
	
	setData = data => {
		this.setState(data);
	}
	
	
	addPlayer = (nome, color) => {
		
		if(color == "white") {
			Alert.alert("Selecione uma cor para seu jogador!");
			return;
		}
		if(nome == "") return;
		
		let names1 = this.state.names;		
		names1 = names1.concat(nome);		
		this.setState({names: names1});
		this.setState({currentName: ""});
		
		let colors1 = this.state.colors;
		colors1 = colors1.concat(color);
		this.setState({colors: colors1, colorChoosed: "white", nPlayers:this.state.nPlayers + 1});
		
	}
	
	render() {
		
		const {navigate} = this.props.navigation;
		
		return (		
		
			<ScrollView style = {styles.container}>
				<Text style  = {{color: '#FFF'}}>Adicione os jogadores e suas cores!</Text>
										
				<View style = {styles.viewNome}>
			
				<TextInput style={styles.input} placeholder = 'Nome do Jogador' placeholderTextColor = "#898785"  onChangeText = {(currentName) => this.setState({currentName})} value={this.state.currentName}/>
				
				<TouchableOpacity style = {styles.buttonContainer} onPress = {() => {navigate('Choose', {
					setData: this.setData,
					redHasChoosed: this.state.redHasChoosed,
					yellowHasChoosed: this.state.yellowHasChoosed,
					darkBlueHasChoosed: this.state.darkBlueHasChoosed,
					greenHasChoosed: this.state.greenHasChoosed,
					purpleHasChoosed: this.state.purpleHasChoosed,
					lightBlueHasChoosed: this.state.lightBlueHasChoosed
				})}
				
				}>
				
				<Text style = {styles.buttonText}>Cor</Text>
				</TouchableOpacity>
				 
				<TouchableOpacity style = {styles.circularButton} onPress = { () => this.addPlayer(this.state.currentName, this.state.colorChoosed)}>
				<Text style = {{marginLeft: 9, marginTop:-8 , color: '#FFF', fontSize: 40, fontWeight: 'bold'}}>+</Text>
				</TouchableOpacity>
			
				</View>
				
				<Text style = {{color: '#FFF'}}>Jogadores:</Text>
				
				<View style = {styles.viewJogadores}>			
				
					{this.state.names.map((item, key)=>(
					
					<View key = {key} style = {{flexDirection: 'row', padding: 5, justifyContent: 'space-between'}}>
					
						<View>
						<Text style = {{color: '#FFF'}}> { item } </Text>
						</View>
						
						<View style = {{
							padding: 10,
							borderRadius: 10,
							width: 10 ,
							height: 10,
							backgroundColor: this.state.colors[key] 
						}}>
						</View>
					</View>
						
						))}
				</View>
				
				
					<Text style = {{padding: 10, color: '#FFF'}} > Tempo para cantar</Text>
					
					<View style = {{padding: 10, borderRadius: 5, backgroundColor: '#3E444A'}}>
						<Slider
							style={{ width: '100%' }}
							step={1} 
							minimumValue={5}
							maximumValue={60}
							value={this.state.timeSing}
							onValueChange={val => this.setState({ timeSing: val })}
						/>
						<Text style = {{color: '#FFF', textAlign: 'center'}}>{this.state.timeSing} segundos</Text> 
					</View>
					
					<Text style = {{padding: 10, color: '#FFF'}} > Tempo de Jogo</Text>
					
					<View style = {{padding: 10, borderRadius: 5, backgroundColor: '#3E444A'}}>
						<Slider
							style={{ width: '100%' }}
							step={1}
							minimumValue={5}
							maximumValue={60}
							value={this.state.showtime}
							onValueChange={val => this.setState({ showtime: val })}
						/>
						<Text style = {{color: '#FFF', textAlign: 'center'}}>{this.state.showtime} segundos</Text> 
					</View>
					
					<Text style = {{padding: 10, color: '#FFF'}} > Pontuação Máxima</Text>
					
					<View style = {{padding: 10, borderRadius: 5, backgroundColor: '#3E444A'}}>
						<Slider
							style={{ width: '100%' }}
							step={10}
							minimumValue={50}
							maximumValue={500}
							value={this.state.topScore}
							onValueChange={val => this.setState({ topScore: val })}
						/>
						<Text style = {{color: '#FFF', textAlign: 'center'}}>{this.state.topScore} pontos</Text> 
					</View>
					
					
					<TouchableOpacity style = {{margin: 40, width: '80%', height: 40, backgroundColor: '#081A1B', borderRadius: 10, justifyContent: 'center'}}>
					
					<Text style = {{textAlign: 'center', color: "white"}}>Play!</Text>
					</TouchableOpacity>
		
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create( {
	container: {
		padding: 20,
		backgroundColor: '#4E555D'
	}, 
	
	viewNome: {
		flexDirection: 'row',
	},
	
	viewJogadores: {
		marginTop: 20,
		width: '100%',
		backgroundColor: '#3E444A',
		borderRadius: 10,
		padding:10
	},
	
	input: {		
		height: 40,
		width: '70%',
		backgroundColor: 'rgba(255, 255, 255, 0.7)',
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 10,
		color: '#000',
		paddingHorizontal: 10
	},
	
	buttonContainer:{
		backgroundColor: '#2980b9',
		borderRadius: 10,
		height: 40,
		width: '10%',
		padding: 10
	},
	
	buttonText: {
		textAlign: 'center',
		color: '#FFF',
		fontWeight: 'bold',
		marginLeft: 4,
		
	},
	
	circularButton: {
		marginLeft: 5,
		width: 40,
		height: 40,
		borderRadius: 30,
		backgroundColor: 'green', 
		alignSelf: 'center',
	}
	
});
