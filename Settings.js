import React from 'react';
import {StyleSheet, Text, TextInput, View ,ScrollView, TouchableOpacity, Slider, Alert} from 'react-native';


export default class Settings extends React.Component {

	static navigationOptions = {
		title: 'Settings'
	}

	constructor(props) {
		super(props);
		
		this.state = {
			topScore: 100, 
			timeSing: 15, 
			showtime: 30
		}
	}
	
	render() {
		
		return (
			<ScrollView style = {styles.container}>
				
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
		padding: 30,
		backgroundColor: '#4E555D'
	}	
});

