import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

export default class ScreenSing extends React.Component{
    // função pra saber quem está cantando e daí renderizar o ícone indicador de quem está cantando
    WhoIsSinging(index){
        if(index == 0){
            return(
                <View style={styles.MusicIconTopLeft}>
                        <Feather name='triangle' color='#F35558' size={60} style={{borderColor:'#F35558'}}/>
                        <View style={{transform: [{ rotate: '180deg'}], alignItems:'center',justifyContent:'center',position:'absolute',paddingBottom:10}}>
                            <Icon name='music' color='#ffffff' size={20}/>
                        </View>
                </View>);
               
        }else if(index==1){
            return(
                <View style={styles.MusicIconTopCenter}>
                        <Feather name='triangle' color='#F0CC58' size={60} style={{borderColor:'#F0CC58'}}/>
                        <View style={{transform: [{ rotate: '180deg'}], alignItems:'center',justifyContent:'center',position:'absolute',paddingBottom:10}}>
                            <Icon name='music' color='#ffffff' size={20}/>
                         </View>
                </View>);
        }else if(index==2){
            return(<View style={styles.MusicIconTopRight}>
                <Feather name='triangle' color='#77CC99' size={60} style={{borderColor:'#77CC99'}}/>
                <View style={{transform: [{ rotate: '180deg'}], alignItems:'center',justifyContent:'center',position:'absolute',paddingBottom:10}}>
                    <Icon name='music' color='#ffffff' size={20}/>
                </View>
        </View>);            
        }else if(index==3){
            return(
                <View style={styles.MusicIconBottomLeft}>
                        <Feather name='triangle' color='#4278FA' size={60} style={{borderColor:'#4278FA'}}/>
                        <View style={{transform: [{ rotate: '180deg'}], alignItems:'center',justifyContent:'center',position:'absolute',paddingBottom:10}}>
                            <Icon name='music' color='#ffffff' size={20}/>
                        </View>
                </View>
            );
           
        } else if(index==4){
            return(
                <View style={styles.MusicIconBottomCenter}>
                        <Feather name='triangle' color='#56CCF2' size={60} style={{borderColor:'#56CCF2'}}/>
                        <View style={{transform: [{ rotate: '180deg'}], alignItems:'center',justifyContent:'center',position:'absolute',paddingBottom:10}}>
                            <Icon name='music' color='#ffffff' size={20}/>
                        </View>
                </View>
            );
        } else if(index==5){
            return(
                <View style={styles.MusicIconBottomRight}>
                        <Feather name='triangle' color='#AE6FC6' size={60} style={{borderColor:'#AE6FC6'}}/>
                        <View style={{transform: [{ rotate: '180deg'}], alignItems:'center',justifyContent:'center',position:'absolute',paddingBottom:10}}>
                            <Icon name='music' color='#ffffff' size={20}/>
                        </View>
                </View>);            
        }
    }


    render(){
        
        return(
            <View style={styles.wrapper}>
                <View style={styles.StartTimer}>   
                    <Button color='#23BAA7' title='Done' onPress={()=>{this.props.done()}}></Button>
                </View>
                <View style={styles.ResetTimer}>   
                    <Button color='#23BAA7' title='Desistir' onPress={()=>{this.props.desistirSing()}}></Button>
                </View>
                {this.WhoIsSinging(this.props.whoPressButton)}
                <ButtonTopRenderSing />
                <TimerRenderSing stringColor={this.props.stringColor} whoPressButton={this.props.whoPressButton} countDownTimerSing={this.props.countDownTimerSing} word={this.props.word} votes={this.props.votes} circleProgress={this.props.circleProgress}/>                
                <ButtonBottomRenderSing/>
            </View>
        );
    }
}

class TimerRenderSing extends React.Component{
   
    constructor(props){
        super(props);
        this.state ={

        }
    }

    componentDidMount(){
        this.props.countDownTimerSing();
    }

    colorTimer(array,index){
        // função para colorir o relogio de acordo com a cor do jogador que esta cantando
        let stringColor = array;
        let stringColor1 = stringColor[0];
        let stringColor2 = stringColor[1];
        let stringColor3 = stringColor[2];
        let stringColor4 = stringColor[3];
        let stringColor5 = stringColor[4];
        let stringColor6 = stringColor[5];

        if(index==0){
            return(
                stringColor1
            );
        }else if(index==1){
            return(
                stringColor2
           );
        }else if(index==2){
            return(
                stringColor3
            );
        }else if(index==3){
            return(
                stringColor4
            );
        }else if(index==4){
            return(
                stringColor5
            );
        }else if(index==5){
            return(
                stringColor6
            );
        }


    }

    render(){
        
        

        return(
            <View style={styles.container}>
                    <View style={styles.containerTimer}>
                        <AnimatedCircularProgress
                        size={200}
                        width={15}            
                        fill={this.props.circleProgress}
                        tintColor= {this.colorTimer(this.props.stringColor,this.props.whoPressButton)}
                        backgroundColor="#3d5875"
                        />
                    </View>                     
                    <View style={styles.containerText}>
                        <Text style={styles.rotateText} >{this.props.word}</Text>
                        <Text style={styles.welcome}>{this.props.word}</Text>
                    </View>  
            </View> 
        );
    }
}
class ButtonTopRenderSing extends React.Component{
    render(){
        return( 
                   
            <View style={styles.actionButtonsTop}>
                        <View style={styles.rightTop}>   
                        <ActionButton verticalOrientation="down" position='right' spacing={5} buttonColor="rgba(113, 206, 151, 1)" renderIcon={active => <Feather name="x" color='#ffffff'/>} useNativeFeedback={false}>
                        </ActionButton>
                    </View>
                    <View style={styles.centerTop}>
        <ActionButton verticalOrientation="down" position='center' spacing={5} buttonColor="rgba(243, 200, 83, 1)" renderIcon={active => <Feather name="x" color='#ffffff'/>} useNativeFeedback={false}>
                           
                        </ActionButton>
                    </View>
                    <View style={styles.leftTop}>
        <ActionButton verticalOrientation="down" position='left' spacing={5} buttonColor="rgba(235, 87, 87, 1)" renderIcon={active => <Feather name="x" color='#ffffff'/>} useNativeFeedback={false}>
                        </ActionButton>
                    </View>
            </View>
        );
    }

}
class ButtonBottomRenderSing extends React.Component{

    render(){
        return(
            <View style={styles.actionButtonsBottom}>  
                    <View style={styles.rightBottom}>
                        <ActionButton verticalOrientation="up" position='right' spacing={5} buttonColor="rgba(188, 106, 217, 1)" renderIcon={active => <Feather name="x" color='#ffffff'/>} useNativeFeedback={false}>
                                                           
                         </ActionButton>
                    </View> 
                    <View style={styles.centerBottom}>  
                    
                    <ActionButton verticalOrientation="up" position='center'spacing={5} buttonColor="rgba(91, 203, 237, 1)" renderIcon={active => <Feather name="x" color='#ffffff'/>} useNativeFeedback={false}>
                                                
                    </ActionButton>
                    </View>
                    <View style={styles.leftBottom}>
                    <ActionButton verticalOrientation="up" position='left' spacing={5} buttonColor="rgba(49, 126, 242, 1)" renderIcon={active => <Feather name="x" color='#ffffff'/>} useNativeFeedback={false}>
                                                
                    </ActionButton>
                    </View>
                </View>
        );
    }

    
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,       
        backgroundColor: '#4E555D',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'stretch',

    },
    welcome: {        
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight:'800',
        color: '#23BAA7',
        
      },
    StartTimer:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',
        position:'absolute',
        top: '45%',
        width: '25%',
        height:'5%',
        left: '0%',
        zIndex:1,
      },
    ResetTimer:{
      flex:1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'flex-end',
      position:'absolute',
      top: '45%',
      width: '25%',
      height:'5%',
      right: '0%',
      zIndex:1,
    },
    container: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        position:'absolute',
        height:'50%',
        width: '100%',
        left: '0%',
        zIndex:0,
      },
    containerTimer:{
        alignItems:'center',
        position:'absolute',
        backgroundColor:'transparent',
        zIndex:0,
    },
    containerText:{
        alignItems:'center',
        position:'absolute',
        zIndex:1,
    },
    rotateText:{
        transform: [{ rotate: '180deg'}],
        fontSize: 25,
      textAlign: 'center',
      margin: 10,
      fontWeight:'800',
      color: '#23BAA7',
    },
    actionButtonsTop:{
        flex:1,
          flexDirection: 'row',
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'space-between',
          position:'absolute',
          height: '36%',
          width: '100%',
          left: '0%',
          top:'0%',
          zIndex:1,
          
        },
    actionButtonsBottom:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        
        position:'absolute',
        zIndex:1,
        bottom: '0%',
        left: '0%',
        width: '100%',
        height: '36%',
      
      
    },rightBottom:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        position:'absolute',
        zIndex:1,
        bottom: '0%',
        right: '0%',
        width: '34%',
        height: '100%',
    },
    leftBottom:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        position:'absolute',
        zIndex:1,
        bottom: '0%',
        left: '0%',
        width: '34%',
        height: '100%',
    },
    centerBottom:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',
      
        position:'absolute',
        zIndex:1,
        bottom: '0%',
        right: '33.3%',
        width: '34%',
        height: '100%',
        left:'34%',
    },
    rightTop:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',
      
        position:'absolute',
        zIndex:1,
        top: '0%',
        right: '0%',
        width: '34%',
        height: '100%',
        

    },
    leftTop:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',
      
        position:'absolute',
        zIndex:1,
        top: '0%',
        width: '34%',
        height: '100%',
        left:'0%',

    },
    centerTop:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',
      
        position:'absolute',
        zIndex:1,
        top: '0%',
        width: '34%',
        height: '100%',
        left:'34%',

    },
    MusicIconBottomCenter:{ //bottomCenter alterar nome
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    bottom: '15%',
    width: '20%',
    height:'10%',
    right: '39%',
    zIndex:0,
    transform: [{ rotate: '180deg'}],
  },
  MusicIconBottomLeft:{
      flex:1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    bottom: '15%',
    width: '20%',
    height:'10%',
    left: '6%',
    zIndex:0,
    transform: [{ rotate: '180deg'}],
  },
  MusicIconBottomRight:{
      flex:1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    bottom: '15%',
    width: '20%',
    height:'10%',
    right: '6%',
    zIndex:0,
    transform: [{ rotate: '180deg'}],
  },
  MusicIconTopCenter:{
      flex:1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    top: '15%',
    width: '20%',
    height:'10%',
    right: '39%',
    zIndex:0,
  },
  MusicIconTopLeft:{
      flex:1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    top: '15%',
    width: '20%',
    height:'10%',
    left: '6%',
    zIndex:0,
  },
  MusicIconTopRight:{
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    top: '15%',
    width: '20%',
    height:'10%',
    right: '6%',
    zIndex:0,
  },
});