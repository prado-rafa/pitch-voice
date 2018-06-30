import React from 'react';
import {StyleSheet, Text, View ,ScrollView, TouchableOpacity, Alert} from 'react-native';


export default class ChooseColor extends React.Component {

	static navigationOptions = {
		title: 'Cor'
	}

	constructor(props) {
		super(props);
		
		this.state = {
			
		}
	}
	
	chooseRed = (redFlag) => {
		if(redFlag) {
			Alert.alert("Vermelho já foi selecionado")
			return;
		}
		this.props.SetToRed();
	}
	
	chooseYellow = (yellowFlag) => {
		if(yellowFlag) {
			Alert.alert("Amarelo já foi selecionado")
			return;
		}
		this.props.SetToYellow();
	}
	
	chooseDarkBlue = (darkBlueFlag) => {
		if(darkBlueFlag) {
			Alert.alert("Azul escuro já foi selecionado")
			return;
		}
		this.props.SetToDarkBlue();
	}
	
	chooseGreen = (greenFlag) => {
		if(greenFlag) {
			Alert.alert("Verde já foi selecionado")
			return;
		}
		this.props.SetToGreen();
	}
	
	choosePurple = (purpleFlag) => {
		if(purpleFlag) {
			Alert.alert("Roxo já foi selecionado")
			return;
		}
		this.props.SetToPurple();
	}
	
	chooseLightBlue = (lightBlueFlag)=> {
		if(lightBlueFlag) {
			Alert.alert("Azul claro já foi selecionado")
			return;
		}
		this.props.SetToLightBlue();
	}
	
	
	show = (bool) => {
		if(bool){
			return <Text>TRUE</Text>
		} else {
			return <Text>FALSE</Text>
		}
	}	
	
	render() {
		
		
		let redFlag = this.props.redHasChoosed;
		let yellowFlag = this.props.yellowHasChoosed;
		let darkBlueFlag = this.props.darkBlueHasChoosed;
		let greenFlag = this.props.greenHasChoosed;
		let purpleFlag = this.props.purpleHasChoosed;
		let lightBlueFlag = this.props.lightBlueHasChoosed;		
		
		return (
			<ScrollView style = {styles.container}>
						
				<Text style  = {{color: '#FFF', paddingBottom: 20}}>Escolha sua cor</Text>
				
				<View style = {{flexDirection: 'row', justifyContent: 'space-between'}}> 
				
					<TouchableOpacity style = {{width: 80, height: 80, borderRadius: 80, backgroundColor: '#EB5757'}} onPress = {() => this.chooseRed(redFlag)}></TouchableOpacity>
					<TouchableOpacity style = {{width: 80, height: 80, borderRadius: 80, backgroundColor: '#F2C94C'}} onPress = {() => this.chooseYellow(yellowFlag)}></TouchableOpacity>
					<TouchableOpacity style = {{width: 80, height: 80, borderRadius: 80, backgroundColor: '#2F80ED'}} onPress = {() => this.chooseDarkBlue(darkBlueFlag)}></TouchableOpacity>
				
				</View>
				
				<View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30}}> 
				
					<TouchableOpacity style = {{width: 80, height: 80, borderRadius: 80, backgroundColor: '#6FCF97'}} onPress = {() => this.chooseGreen(greenFlag)}></TouchableOpacity>
					<TouchableOpacity style = {{width: 80, height: 80, borderRadius: 80, backgroundColor: '#BB6BD9'}} onPress = {() => this.choosePurple(purpleFlag)}></TouchableOpacity>
					<TouchableOpacity style = {{width: 80, height: 80, borderRadius: 80, backgroundColor: '#56CCF2'}} onPress = {() => this.chooseLightBlue(lightBlueFlag)}></TouchableOpacity>
				
				</View>
				
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

