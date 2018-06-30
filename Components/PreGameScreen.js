import React from 'react';
import {StyleSheet, Text, TextInput, View ,ScrollView, TouchableOpacity, Slider} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class PreGameScreen extends React.Component {
	


    render(){
       
		let topScore = this.props.topScore;
		let timeSing = this.props.timeSing;
		let showtime = this.props.showtime;
		
		let names = this.props.names;
		let colors = this.props.colors;
		let currentName = this.props.currentName;
		let colorChoosed = this.props.colorChoosed;

        return(
            <ScrollView style = {styles.container}>
				<Text style  = {{color: '#FFF',fontWeight:'bold',fontFamily:'Roboto',justifyContent:'center',alignContent:'center'}}>Adicione os jogadores e suas cores!</Text>
										
				<View style = {styles.viewNome}>
			
				<TextInput style={styles.input} placeholder = 'Nome do Jogador' placeholderTextColor = "#898785"  onChangeText = {(currentName) => this.props.SetCurrentName(currentName)} value={currentName}/>
				
				<TouchableOpacity style = {[styles.buttonContainer,{backgroundColor:colorChoosed}]} onPress = {() => this.props.ChangeScreen()}  >				
                    <MaterialIcons size={30} color='white' name='color-lens' />
				</TouchableOpacity>
				 
				<TouchableOpacity style = {styles.circularButton} onPress = { () => this.props.addPlayer(currentName, colorChoosed)}>
				<Text style = {{marginLeft: 9, marginTop:-8 , color: '#FFF', fontSize: 40, fontWeight: 'bold'}}>+</Text>
				</TouchableOpacity>
			
				</View>
				
				<Text style = {{color: '#FFF',fontWeight:'bold',fontFamily:'Roboto'}}>Jogadores:</Text>
				
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
				
				
					<Text style = {{padding: 10, color: '#FFF',fontWeight:'bold',fontFamily:'Roboto'}} > Tempo para cantar</Text>
					
					<View style = {{padding: 10, borderRadius: 5, backgroundColor: '#3E444A'}}>
						<Slider
							style={{ width: '100%' }}
							step={1} 
							minimumValue={5}
							maximumValue={60}
							value={timeSing}
							onValueChange={val => this.props.SetTimeSingopScore(val)}
						/>
						<Text style = {{color: '#FFF', textAlign: 'center',fontWeight:'bold',fontFamily:'Roboto'}}>{timeSing} segundos</Text> 
					</View>
					
					<Text style = {{padding: 10, color: '#FFF',fontWeight:'bold',fontFamily:'Roboto'}} > Tempo de Jogo</Text>
					
					<View style = {{padding: 10, borderRadius: 5, backgroundColor: '#3E444A'}}>
						<Slider
							style={{ width: '100%' }}
							step={1}
							minimumValue={5}
							maximumValue={60}
							value={showtime}
							onValueChange={val => this.props.SetShowTime(val)}
						/>
						<Text style = {{color: '#FFF', textAlign: 'center',fontWeight:'bold',fontFamily:'Roboto'}}>{showtime} segundos</Text> 
					</View>
					
					<Text style = {{padding: 10, color: '#FFF',fontWeight:'bold',fontFamily:'Roboto'}} > Pontuação Máxima</Text>
					
					<View style = {{padding: 10, borderRadius: 5, backgroundColor: '#3E444A'}}>
						<Slider
							style={{ width: '100%' }}
							step={10}
							minimumValue={50}
							maximumValue={500}
							value={topScore}
							onValueChange={val => this.props.SetTopScore(val)}
						/>
						<Text style = {{color: '#FFF', textAlign: 'center'}}>{topScore} pontos</Text> 
					</View>
					
					
					<TouchableOpacity onPress={()=> this.props.navigation.navigate('MainScreen', {
					topScore:topScore, timeSing:timeSing, showtime:showtime, Text1: names[0],Text2: names[1],
					Text3:names[2],Text4:names[3],Text5:[4],Text6:names[5]
					}) }
					style = {{margin: 40, width: '80%', height: 40, backgroundColor: '#27AE60', borderRadius: 10, justifyContent: 'center'}}>
					
					<Text style = {{textAlign: 'center', color: "white",fontWeight:'bold',fontFamily:'Roboto'}}>Vamos Cantar!</Text>
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
		backgroundColor: '#27AE60', 
		alignSelf: 'center',
	}
	
});
