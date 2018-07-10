import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {ScreenOrientation} from 'expo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
 
 
 
class PlayersList extends React.Component {
    render() {
        return (
            <Text style={styles.playerslist}> {this.props.Text} </Text>
        );
    }
}
 
class Score extends React.Component {
    render() {
        return (
            <Text style={styles.score}> {this.props.Text} </Text>
        );
    }
}
 
export default class Ranking extends React.Component {
    
        

    constructor(props) {
        super(props);       
        this.state = {
            rank: []
        };
    }
    componentDidMount() {
        this.changeScreenOrientation();
        // recieve players from Game ou Timer
        const { navigation } = this.props;
        const names = navigation.getParam('names');

        const arrayTotalScore = navigation.getParam('arrayTotalScore'); //veio do jogo
        const totalScore = JSON.parse(JSON.stringify(arrayTotalScore));
        const stringColor = navigation.getParam('stringColor'); //veio do jogo
 
        let rank = names.map((person, key) => {
            return { name: person, points: totalScore[key],color: stringColor[key] };
        });
 
        rank = rank.sort((a,b) => a.points>b.points? -1:1);
       
        this.setState({
            rank: rank
        });
    }
 
    changeScreenOrientation() {
        ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
      }
 
 
    render() {
        return (
            <View style={{flex:1,flexDirection:'column'}}>
                <View style={styles.bar}>
                            <Text style={{fontSize:30,color:'#FFFFFF'}}> Ranking </Text>
                </View>
                <View style={styles.container}>
                        <View style = {{display: 'flex', flexDirection: 'row',margin:10,width:'83%', backgroundColor: 'transparent',alignItems:'flex-start',justifyContent:'flex-start'}}>
                            <Text style={{color:'#FFFFFF',alignItems:'flex-start', fontSize:20,justifyContent:'flex-start'}}> Jogadores:</Text>
                        </View>
                        <View style = {{padding: 10, borderRadius: 5, backgroundColor: '#3E444A'}}>
                            {this.state.rank.map((p, i) => {
                                return (
                                        <View key={i} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',margin: 10,  width: '80%'  }}>
                                            <View style={{padding:10,borderRadius: 10,width: 10 ,height: 10, backgroundColor: p.color}}>                                     
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <PlayersList Text={p.name} />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Score Text={p.points} />
                                            </View>
                                        </View>
                                );
                            })}
                        </View>
                        <Text>    </Text>                                          
                    <View style={styles.gamebuttons}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Intro')} style = {{margin: 40, width: '30%', height: 40, backgroundColor: '#23BAA7', borderRadius: 10, justifyContent: 'center',alignItems:'center'}}>              
                            <MaterialIcons size={30} color='white' name='home' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    bar:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#23BAA7',
        position:'relative',
        left:'0%',
        right:"0%",
        top:"0%",
        bottom:"87%",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    container: {
        paddingTop:10,
        flex: 7,
        backgroundColor: '#4E555D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: '800',
        color: '#23BAA7',
    },
    gamebuttons: {
        flexDirection: 'row',
        backgroundColor: 'transparent'
    },
    playerslist: {
        color: '#FFFFFF',
        fontSize: 26,
        textAlign: 'left'
    },
    score: {
        color: '#FFFFFF',
        fontSize: 26,
        textAlign: 'right'
    }
 
});