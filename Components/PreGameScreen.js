import React from 'react';
import {StyleSheet, Text, TextInput, View ,ScrollView, TouchableOpacity, Slider,Alert} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default class PreGameScreen extends React.Component {
	

	playGame=(numPlayers,colorsRGBA)=>{

		if(numPlayers<2){
			Alert.alert('Para jogar precisa de pelo menos 2 jogadores')
			return;
		}

		let stringColorAux = ['','','','','',''];
		let stringRGBAColorAux = ['','','','','',''];
		let stringColorOpacityAux = ['','','','','',''];


		if(numPlayers==6){ //mapeamento
			stringColorAux = this.props.colors;
			stringRGBAColorAux = this.props.colorsRGBA;
			stringColorOpacityAux = this.props.colorsBackground;
		}else if(numPlayers==5){ //mapeamento
			stringColorAux[0] = this.props.colors[0];
			stringColorAux[1] = this.props.colors[1];
			stringColorAux[2] = this.props.colors[2];
			stringColorAux[3] = this.props.colors[3];
			stringColorAux[5] = this.props.colors[4];

			stringRGBAColorAux[0] = colorsRGBA[0];
			stringRGBAColorAux[1] = colorsRGBA[1];
			stringRGBAColorAux[2] = colorsRGBA[2];
			stringRGBAColorAux[3] = colorsRGBA[3];
			stringRGBAColorAux[5] = colorsRGBA[4];

			stringColorOpacityAux[0] = this.props.colorsBackground[0];
			stringColorOpacityAux[1] = this.props.colorsBackground[1];
			stringColorOpacityAux[2] = this.props.colorsBackground[2];
			stringColorOpacityAux[3] = this.props.colorsBackground[3];
			stringColorOpacityAux[5] = this.props.colorsBackground[4];
		}else if(numPlayers==4){ //mapeamento
			stringColorAux[0] = this.props.colors[0];
			stringColorAux[2] = this.props.colors[1];
			stringColorAux[3] = this.props.colors[2];
			stringColorAux[5] = this.props.colors[3];

			stringRGBAColorAux[0] = colorsRGBA[0];
			stringRGBAColorAux[2] = colorsRGBA[1];
			stringRGBAColorAux[3] = colorsRGBA[2];
			stringRGBAColorAux[5] = colorsRGBA[3];

			stringColorOpacityAux[0] = this.props.colorsBackground[0];
			stringColorOpacityAux[2] = this.props.colorsBackground[1];
			stringColorOpacityAux[3] = this.props.colorsBackground[2];
			stringColorOpacityAux[5] = this.props.colorsBackground[3];
		}else if(numPlayers==3){//mapeamento
			stringColorAux[1] = this.props.colors[0];
			stringColorAux[3] = this.props.colors[1];
			stringColorAux[5] = this.props.colors[2];

			stringRGBAColorAux[1] = colorsRGBA[0];
			stringRGBAColorAux[3] = colorsRGBA[1];
			stringRGBAColorAux[5] = colorsRGBA[2];

			stringColorOpacityAux[1] = this.props.colorsBackground[0];
			stringColorOpacityAux[3] = this.props.colorsBackground[1];
			stringColorOpacityAux[5] = this.props.colorsBackground[2];
		}else if(numPlayers==2){//mapeamento
			stringColorAux[1] = this.props.colors[0];
			stringColorAux[4] = this.props.colors[1];

			stringRGBAColorAux[1] = colorsRGBA[0];
			stringRGBAColorAux[4] = colorsRGBA[1];

			stringColorOpacityAux[1] = this.props.colorsBackground[0];
			stringColorOpacityAux[4] = this.props.colorsBackground[1];
		}



		this.props.navigation.navigate('MainScreen', {
			topScore:this.props.topScore, timeSing:this.props.timeSing, showtime:this.props.showtime, names:this.props.names,numPlayers:this.props.nPlayers,
			stringColor:stringColorAux,stringRGBAColor:stringRGBAColorAux, stringColorOpacity: stringColorOpacityAux, stringColorSorted: this.props.colors,
			})

		try {
			const { soundObject, status } = Expo.Audio.Sound.create(
				require('../assets/sounds/Gongo.mp3'),
				{ shouldPlay: true }
			);
		// Your sound is playing!
		} catch (error) {
		// An error occurred!
		}
	}

    render(){
       
		let topScore = this.props.topScore;
		let timeSing = this.props.timeSing;
		let showtime = this.props.showtime;
		let names = this.props.names;
		let colors = this.props.colors;
		let colorsRGBA = this.props.colorsRGBA;
		let currentName = this.props.currentName;
		let colorChoosed = this.props.colorChoosed;

        return(
            <ScrollView style = {styles.container}>
				<Text style  = {{color: '#FFF',fontWeight:'bold',justifyContent:'center',alignContent:'center'}}>Adicione os jogadores e suas cores!</Text>
										
				<View style = {styles.viewNome}>
			
				<TextInput style={styles.input} placeholder = 'Nome do Jogador' placeholderTextColor = "#898785"  onChangeText = {(currentName) => this.props.SetCurrentName(currentName)} value={currentName}/>
				
				<TouchableOpacity style = {[styles.buttonContainer,{backgroundColor:colorChoosed}]} onPress = {() => this.props.ChangeScreen()}  >				
                   <MaterialIcons size={30} color='white' name='color-lens' />
				</TouchableOpacity>
				 
				<TouchableOpacity style = {styles.circularButton} onPress = { () => this.props.addPlayer(currentName, colorChoosed,this.props.colorRGBAChoosed,this.props.colorBackgroundChoosed)}>
				<Text style = {{marginLeft: 9, marginTop:-8 , color: '#FFF', fontSize: 40, fontWeight: 'bold'}}>+</Text>
				</TouchableOpacity>
			
				</View>
				
				<Text style = {{color: '#FFF',fontWeight:'bold'}}>Jogadores:</Text>
				
				<View style = {styles.viewJogadores}>			
				
					{names.map((item, key)=>(
					
					<View key = {key} style = {{flexDirection: 'row', padding: 5, justifyContent: 'space-between'}}>
					
						<View>
						<Text style = {{color: '#FFF'}}> { item } </Text>
						</View>
						
						<View style = {{
							padding: 10,
							borderRadius: 10,
							width: 10 ,
							height: 10,
							backgroundColor: colors[key] 
						}}>
						</View>
					</View>
						
						))}
				</View>
				
				
					<Text style = {{padding: 10, color: '#FFF',fontWeight:'bold'}} > Tempo para cantar</Text>
					
					<View style = {{padding: 10, borderRadius: 5, backgroundColor: '#3E444A'}}>
						<Slider
							style={{ width: '100%' }}
							step={1} 
							minimumValue={5}
							maximumValue={60}
							value={timeSing}
							onValueChange={value => this.props.SetTimeSing(value)}
						/>
						<Text style = {{color: '#FFF', textAlign: 'center',fontWeight:'bold'}}>{timeSing} segundos</Text> 
					</View>
					
					<Text style = {{padding: 10, color: '#FFF',fontWeight:'bold'}} > Tempo de Jogo</Text>
					
					<View style = {{padding: 10, borderRadius: 5, backgroundColor: '#3E444A'}}>
						<Slider
							style={{ width: '100%' }}
							step={1}
							minimumValue={5}
							maximumValue={60}
							value={showtime}
							onValueChange={value => this.props.SetShowTime(value)}
						/>
						<Text style = {{color: '#FFF', textAlign: 'center',fontWeight:'bold'}}>{showtime} segundos</Text> 
					</View>
					
					<Text style = {{padding: 10, color: '#FFF',fontWeight:'bold'}} > Pontuação Máxima</Text>
					
					<View style = {{padding: 10, borderRadius: 5, backgroundColor: '#3E444A'}}>
						<Slider
							style={{ width: '100%' }}
							step={10}
							minimumValue={10}
							maximumValue={500}
							value={topScore}
							onValueChange={value => this.props.SetTopScore(value)}
						/>
						<Text style = {{color: '#FFF', textAlign: 'center'}}>{topScore} pontos</Text> 
					</View>
					
					
					<TouchableOpacity onPress={()=> this.playGame(this.props.nPlayers,colorsRGBA) }
					style = {{margin: 40, width: '80%', height: 40, backgroundColor: '#23BAA7', borderRadius: 10, justifyContent: 'center'}}>
					
					<Text style = {{textAlign: 'center', color: "white",fontWeight:'bold'}}>Vamos Cantar!</Text>
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
		marginRight: 5,
		borderRadius: 10,
		color: '#000',
		paddingHorizontal: 10
	},
	
	buttonContainer:{
		alignItems: 'center',
		borderRadius: 10,
		height: 40,
        width: '10%',   
        paddingTop: 5,
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
		backgroundColor: '#23BAA7', 
		alignSelf: 'center',
	}
	
});
