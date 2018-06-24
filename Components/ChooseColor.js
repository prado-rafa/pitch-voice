import React from 'react';
import {StyleSheet, Text, TextInput, View ,ScrollView, TouchableOpacity, Slider, Alert} from 'react-native';


export default class Choose extends React.Component {

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
		this.props.navigation.navigate('Pre'); 
		this.props.navigation.state.params.setData({colorChoosed: "#EB5757", redHasChoosed: true});
		this.setState({redHasChoosed: true});
	}
	
	chooseYellow = (yellowFlag) => {
		if(yellowFlag) {
			Alert.alert("Amarelo já foi selecionado")
			return;
		}
		this.props.navigation.navigate('Pre'); 
		this.props.navigation.state.params.setData({colorChoosed: "#F2C94C", yellowHasChoosed: true});
		this.setState({yellowHasChoosed: true});
	}
	
	chooseDarkBlue = (darkBlueFlag) => {
		if(darkBlueFlag) {
			Alert.alert("Azul escuro já foi selecionado")
			return;
		}
		this.props.navigation.navigate('Pre'); 
		this.props.navigation.state.params.setData({colorChoosed: "#2F80ED", darkBlueHasChoosed: true});
		this.setState({darkBlueHasChoosed: true});
	}
	
	chooseGreen = (greenFlag) => {
		if(greenFlag) {
			Alert.alert("Verde já foi selecionado")
			return;
		}
		this.props.navigation.navigate('Pre'); 
		this.props.navigation.state.params.setData({colorChoosed: "#6FCF97", greenHasChoosed: true});
		this.setState({greenHasChoosed: true});
	}
	
	choosePurple = (purpleFlag) => {
		if(purpleFlag) {
			Alert.alert("Roxo já foi selecionado")
			return;
		}
		this.props.navigation.navigate('Pre'); 
		this.props.navigation.state.params.setData({colorChoosed: "#BB6BD9", purpleHasChoosed: true});
		this.setState({purpleHasChoosed: true});
	}
	
	chooseLightBlue = (lightBlueFlag)=> {
		if(lightBlueFlag) {
			Alert.alert("Azul claro já foi selecionado")
			return;
		}
		this.props.navigation.navigate('Pre'); 
		this.props.navigation.state.params.setData({colorChoosed: "#56CCF2", lightBlueHasChoosed: true});
		this.setState({lightBlueHasChoosed: true});
	}
	
	setData = data => {
		this.setState(data);
	}
	
	show = (bool) => {
		if(bool){
			return <Text>TRUE</Text>
		} else {
			return <Text>FALSE</Text>
		}
	}	
	
	render() {
		
		const {navigation} = this.props;
		const redFlag = navigation.getParam('redHasChoosed', false);
		const yellowFlag = navigation.getParam('yellowHasChoosed', false);
		const darkBlueFlag = navigation.getParam('darkBlueHasChoosed', false);
		const greenFlag = navigation.getParam('greenHasChoosed', false);
		const purpleFlag = navigation.getParam('purpleHasChoosed', false);
		const lightBlueFlag = navigation.getParam('lightBlueHasChoosed', false);		
		
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

