import React from 'react';
import {Alert} from 'react-native';
import ChooseColor from '../Components/ChooseColor';
import PreGameScreen from './PreGameScreen';

export default class PreGame extends React.Component {
	
	
	
	static navigationOptions = {
		title: 'Pitch-Voice',
		headerStyle: {
		  backgroundColor: '#27AE60',
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
			changeScreen: false,
			topScore: 100, 
			timeSing: 15, 
			showtime: 30,
			players: [],
			nPlayers: 0,
			names:[],
			colors: [],
			colorsRGBA: [],
			colorsBackground: [],
			currentName: "",
			colorChoosed: "#3E444A",
			colorRGBAChoosed: "",
			colorBackgroundChoosed:"",			
			redHasChoosed: false,
			yellowHasChoosed: false,
			darkBlueHasChoosed: false,
			greenHasChoosed: false,
			purpleHasChoosed: false,
			lightBlueHasChoosed: false
		};
	}
	
	
	
	addPlayer = (nome, color,colorRGBA,colorBackground) => {
		
		if(color == "#3E444A") {
			Alert.alert("Selecione uma cor para seu jogador!");
			return;
		}
		if(nome == "") {
			Alert.alert("Escreva um nome para o jogador!");
			return;
		}
		else if(color=="#EB5757"){
			this.setState({redHasChoosed:true});
		}
		else if(color=="#F2C94C"){
			this.setState({yellowHasChoosed:true});
		}
		else if(color=="#2F80ED"){
			this.setState({darkBlueHasChoosed:true});
		}
		else if(color=="#6FCF97"){
			this.setState({greenHasChoosed:true});
		}
		else if(color=="#BB6BD9"){
			this.setState({purpleHasChoosed:true});
		}
		else{
			this.setState({lightBlueHasChoosed:true});
		}

		let names1 = this.state.names;		
		names1 = names1.concat(nome);		
		this.setState({names: names1});
		this.setState({currentName: ""});
		
		let colors1 = this.state.colors;
		colors1 = colors1.concat(color);
		this.setState({colors: colors1, colorChoosed: "#3E444A", nPlayers:this.state.nPlayers + 1});

		let colors1RGBA = this.state.colorsRGBA;
		colors1RGBA = colors1RGBA.concat(colorRGBA);
		let colors1Background = this.state.colorsBackground;
		colors1Background = colors1Background.concat(colorBackground);
		this.setState({colorsRGBA:colors1RGBA,colorRGBAChoosed:"",colorBackgroundChoosed:"",colorsBackground:colors1Background})

		
	}

	SetToRed=()=>{
		this.setState({
			colorBackgroundChoosed:"#8D565B",
			colorRGBAChoosed:"rgba(235, 87, 87, 1)",
			colorChoosed:"#EB5757",
			changeScreen:false,
		})
	}

	SetToYellow=()=>{
		this.setState({
			colorBackgroundChoosed:"#9D8D53",
			colorRGBAChoosed:"rgba(243, 200, 83, 1)",
			colorChoosed:"#F2C94C",
			changeScreen:false,
		});
	}

	SetToDarkBlue=()=>{
		this.setState({
			colorBackgroundChoosed:"#426697",
			colorRGBAChoosed:"rgba(49, 126, 242, 1)",
			colorChoosed:"#2F80ED",
			changeScreen:false,
		});
	}

	SetToGreen=()=>{
		this.setState({
			colorBackgroundChoosed:"#5B8674",
			colorRGBAChoosed:"rgba(113, 206, 151, 1)",
			colorChoosed:"#6FCF97",
			changeScreen:false,
		});
	}

	SetToPurple=()=>{
		this.setState({
			colorBackgroundChoosed:"#6F5C82",
			colorRGBAChoosed:"rgba(188, 106, 217, 1)",
			colorChoosed:"#BB6BD9",
			changeScreen:false,
		});
	}

	SetToLightBlue=()=>{
		this.setState({
			colorBackgroundChoosed:"#51798A",
			colorRGBAChoosed:"rgba(91, 203, 237, 1)",
			colorChoosed:"#56CCF2",
			changeScreen:false,
		});
	}

	ChangeScreen = () =>{
		if(this.state.nPlayers<6){
			let bool = true;
			this.setState({
				changeScreen:bool,
			})
		}else{
			Alert.alert("Já existem 6 jogadores!");
			return
		}
	}
	SetCurrentName= (val) =>{
		this.setState({
			currentName:val
		});
	}

	SetTimeSing= (val) =>{
		this.setState({
			timeSing:val
		});
	}

	SetShowtime=(val)=>{
		this.setState({
			showtime:val
		});
	}

	SetTopScore=(val)=>{
		this.setState({
			topScore:val,
		});
	}
	
	render() {

		let SetToPurple = this.SetToPurple;
		let SetToYellow = this.SetToYellow;
		let SetToLightBlue = this.SetToLightBlue;
		let SetToGreen = this.SetToGreen;
		let SetToRed = this.SetToRed;
		let SetToDarkBlue = this.SetToDarkBlue;
		let SetCurrentName = this.SetCurrentName;
		let SetTopScore = this.SetTopScore;
		let SetShowtime = this.SetShowtime;
		let SetTimeSing = this.SetTimeSing;
		let ChangeScreen = this.ChangeScreen;
		let changeScreen = this.state.changeScreen;
		let topScore = this.state.topScore;
		let timeSing = this.state.timeSing;
		let showtime = this.state.showtime;
		let nPlayers = this.state.nPlayers;
		let names = this.state.names;
		let colors = this.state.colors;
		let currentName = this.state.currentName;
		let colorChoosed = this.state.colorChoosed;
		let redHasChoosed = this.state.redHasChoosed;
		let yellowHasChoosed = this.state.yellowHasChoosed;
		let darkBlueHasChoosed = this.state.darkBlueHasChoosed;
		let greenHasChoosed = this.state.greenHasChoosed;
		let purpleHasChoosed = this.state.purpleHasChoosed;
		let lightBlueHasChoosed = this.state.lightBlueHasChoosed;
		let addPlayer = this.addPlayer;
		let colorsRGBA = this.state.colorsRGBA;
		
		if(!changeScreen){
			return(
				<PreGameScreen
					SetShowtime = {SetShowtime}
					SetTimeSing = {SetTimeSing}
					SetCurrentName = {SetCurrentName}
					SetTopScore = {SetTopScore}
					topScore={topScore}
					timeSing ={timeSing }
					showtime={showtime}
					nPlayers={nPlayers}
					names={names}
					colors={colors}
					currentName={currentName}
					colorChoosed={colorChoosed}
					redHasChoosed={redHasChoosed}
					yellowHasChoosed={yellowHasChoosed}
					darkBlueHasChoosed={darkBlueHasChoosed}
					greenHasChoosed ={greenHasChoosed}
					purpleHasChoosed = {purpleHasChoosed}
					lightBlueHasChoosed = {lightBlueHasChoosed}	
					ChangeScreen = {ChangeScreen}
					addPlayer = {addPlayer}
					navigation={this.props.navigation}
					colorsRGBA={colorsRGBA}
					colorRGBAChoosed={this.state.colorRGBAChoosed}
					colorsBackground = {this.state.colorsBackground}
					colorBackgroundChoosed = {this.state.colorBackgroundChoosed}
				/>
			);
		}else{
			return(
				
				<ChooseColor
				SetToPurple = {SetToPurple}
				SetToYellow = {SetToYellow}
				SetToLightBlue = {SetToLightBlue}
				SetToDarkBlue = {SetToDarkBlue}
				SetToRed = {SetToRed}
				SetToGreen = {SetToGreen}
				colorChoosed={colorChoosed}
				redHasChoosed={redHasChoosed}
				yellowHasChoosed={yellowHasChoosed}
				darkBlueHasChoosed={darkBlueHasChoosed}
				greenHasChoosed ={greenHasChoosed}
				purpleHasChoosed = {purpleHasChoosed}
				lightBlueHasChoosed = {lightBlueHasChoosed}	
				currentName={currentName}
				/>
			);
		}		

	}
}