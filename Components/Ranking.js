import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {ScreenOrientation} from 'expo';



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
            rank: [],
            //recieve Points from Game
            currPoints: 10
        };
    }
    componentDidMount() {
        this.changeScreenOrientation();
        // recieve players from Game ou Timer
        const { navigation } = this.props;
        const names = navigation.getParam('names'); // veio d ojgo
       
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
        ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);
      }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Ranking</Text>
                {this.state.rank.map((p, i) => {
                    return (
                        <View key={i} style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                            <View style={{ flex: 1 }}>
                                <PlayersList Text={p.name} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Score Text={p.points} />
                            </View>
                        </View>
                    );
                })}
                <View style={styles.gamebuttons}>
                    <MyButton
                        onPress={() => this.props.navigation.navigate('PreGame')}
                        title='Novo Jogo' // qdo volta para novo jogo, tem um problema com o navigator (a 
                        //barra de cima desaparece porque precisa criar outra stack navigator(uma que fique ligada ao inicio) , acredito eu)
                    />
                    <Text>    </Text>
                    <MyButton
                        onPress={() => this.props.navigation.navigate('Intro')}
                        title='Voltar pra o Início' 
                    />
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
        fontSize: 20,
        textAlign: 'left'
    },
    score: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'right'
    }

});    
