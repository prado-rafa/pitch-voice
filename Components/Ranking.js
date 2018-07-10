import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {ScreenOrientation} from 'expo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


class MyButton extends React.Component {
    render() {
        return (
            <Button
                onPress={this.props.onPress}
                title={this.props.title}
                color='#23BAA7'
            />
        );
    }
}

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
        const names = navigation.getParam('names'); // veio d ojgo
        const totalScore = navigation.getParam('arrayTotalScore'); //veio do jogo
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
        ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);
      }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Ranking</Text>
                    <View style = {{padding: 10, borderRadius: 5, backgroundColor: '#3E444A'}}>
                        {this.state.rank.map((p, i) => {
                            return (
                                    <View key={i} style={{ display: 'flex', flexDirection: 'row',margin: 10,  width: '80%'  }}>
                                        <View style={{padding: 10,borderRadius: 10,width: 10 ,height: 10, backgroundColor: p.color}}>                                           
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
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Intro')}  >				
                        <MaterialIcons size={30} color='white' name='home' />
                    </TouchableOpacity>
                </View>
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: '800',
        color: '#23BAA7',
    },
    gamebuttons: {
        flexDirection: 'row'
    },
    playerslist: {
        color: '#FFFFFF',
        fontSize: 25,
        textAlign: 'left'
    },
    score: {
        color: '#FFFFFF',
        fontSize: 25,
        textAlign: 'right'
    }

});