import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

export default class ScreenResults extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        this.props.computaVotos();
    }
    // retorna se a pessoa ganhou ou perdeu
    winOrlose(boolean,pontuacaoParcial,whoPressButton){
        if(boolean){ return( (<Text style={styles.welcome} >Você ganhou +{pontuacaoParcial[whoPressButton]} pontos! </Text>) );}
       else{ return( (<Text style={styles.welcome} >Você não pontuou... </Text>) );}
    }
    

    render(){
        let pontuacaoParcial = this.props.pontuacaoParcial;
        
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#191A1E'}}>
                                               
                <Text style={[styles.welcome,{fontSize:45}]} >Resultado:</Text>
                {this.winOrlose(this.props.winOrlose,pontuacaoParcial,this.props.whoPressButton)}                
                <Button color = '#23BAA7' title='Voltar para o jogo' onPress={()=>{this.props.backToStart(this.props.whoPressButton)}} ></Button>

            </View>
        );
    }



}

const styles = StyleSheet.create({
    welcome: {        
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight:'800',
        color: '#23BAA7',
        
      },
});