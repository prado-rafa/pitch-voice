import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PreGame from './PreGame'



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
        // recieve players from Game ou Timer
        const { navigation } = this.props;
        const text1 = navigation.getParam('text1');
        const text2 = navigation.getParam('text2');
        const text3 = navigation.getParam('text3');
        const text4 = navigation.getParam('text4');
        const text5 = navigation.getParam('text5');
        const text6 = navigation.getParam('text6');

        const players = [
            JSON.parse(JSON.stringify(text1)),
            JSON.parse(JSON.stringify(text2)),
            JSON.parse(JSON.stringify(text3)),
            JSON.parse(JSON.stringify(text4)),
            JSON.parse(JSON.stringify(text5)),
            JSON.parse(JSON.stringify(text6))
        ];
       
        const arrayTotalScore = navigation.getParam('arrayTotalScore');
        const totalScore = JSON.parse(JSON.stringify(arrayTotalScore))

        let rank = players.map((person, key) => {
            return { name: person, points: totalScore[key] };
        });

        rank = rank.sort((a,b) => a.points>b.points? -1:1);
        
        this.setState({
            rank: rank
        });
    }

    //this function is called from Game to give points to a Player.
    winPoints = (nome) => {
        let rank = this.state.rank;
        let currPoints = this.state.currPoints;
        for (let i in rank) {
            if (rank[i].name === nome && currPoints >= 0) {
                rank[i].points += currPoints;
                currPoints--;
                break;
            }
        }
        let rank2 = rank;
        rank2.sort((a, b) => {

            console.log("entrou")
            if (a.points < b.points) {
                console.log("a")
                return 1;
            } else if (b.points < a.points) {
                console.log("b")
                return -1;
            } else {
                if (a.name < b.name) {
                    console.log("c")
                    return 1;
                } else if (b.name < a.name) {
                    console.log("d")
                    return -1;
                }
            }
            console.log("e")
            return 0;
        }
        );
        console.log(rank2);
        this.setState({
            rank: rank2,
            currPoints: currPoints
        });
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
                        title='Novo Jogo'
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


  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Ranking</Text>
            {this.state.rank.map((p, i) => {
                    return (
                      <View key={i} style={{display: 'flex', flexDirection: 'row', margin: 10}}>
                        <View style={{ flex: 1}}>
                          <PlayersList Text={p.name}/>
                        </View>
                        <View style={{ flex: 1}}>
                          <Score Text={p.points}/>
                        </View>
                    </View>                 
                    );
            })}
            <View style={styles.gamebuttons}>
                <MyButton
                    onPress = {() => this.props.navigation.navigate('PreGame')}
                    title = 'Novo Jogo'
                />
                <Text>    </Text>
                <MyButton
                    onPress = {() => this.props.navigation.navigate('Game')}
                    title = 'Próxima Partida'
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
