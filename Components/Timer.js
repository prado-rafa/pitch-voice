import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,PanResponder} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';


export default class CountDown extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            votes: 0,
            holdFlag: false,
            timer: null,
            time:30,                  
            seconds: 0,
            isRunningTime: false,
        }        
    }
      
    pressButton(){
        let holdFlag = true;
        this.setState({
            holdFlag: holdFlag,
        })
    }

    VoteLike(){
        let votes = this.state.votes+1;
        this.setState({
            votes: votes
        });
    }

    VoteDislike(){
        let votes = this.state.votes-1;
        this.setState({
            votes:votes
        });
    }

   
    StopTimer(){
        this.setState({
            isRunningTime:false,
            timer:clearInterval(this.state.timer)
        })
    }    

    Reset(){
        this.setState({
            isRunningTime:false,
            seconds:0,
            timer: clearInterval(this.state.timer)
        })
       
    }


    CountDownTimer(){
        let timer =  setInterval( () => {this.setState(
           previousState=>{
            if(this.state.seconds<this.state.time){
                return {seconds: this.state.seconds +1,isRunningTime:true,timer:timer};
            }else{ //lembrar de dar clear no interval   (done)           
                return {seconds:this.state.time,
                    isRunningTime:false,
                    timer:clearInterval(timer)
                }
            }           
           })
        },1000);
    }   

    render(){
        const ratio = 100/this.state.time;
        let circleProgress = this.state.seconds*ratio;
        return(
            <View style={styles.wrapper}>
                <View style={styles.StartTimer}>
                    <Button color='#23BAA7' title='Iniciar' onPress={()=>{this.CountDownTimer()}}></Button>
                </View>
                <View style={styles.ResetTimer}>   
                    <Button color='#23BAA7' title='Reset' onPress={()=>{this.Reset()}}></Button>
                </View>
                <View style={styles.actionButtonsTop}> 
                     <View style={styles.rightTop}>        
                        <ActionButton verticalOrientation="down" position='right' spacing={5} buttonColor="rgba(113, 206, 151, 1)" onPressIn={()=>{}} onPressOut={() => { this.StopTimer()}} renderIcon={active => <Icon name="circle" color='#71CE97'/>}>
                            
                            <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>this.VoteLike()}>
                                <Icon name="smile-o" size={40} color='#000000'/>
                            </ActionButton.Item>
                            <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)" onPress={()=>this.VoteDislike()} >
                                <Entypo name="emoji-sad" size={40} color='#000000'/>
                            </ActionButton.Item>
                            
                        </ActionButton>
                    </View>
                    <View style={styles.centerTop}>
                        <ActionButton verticalOrientation="down" position='center' spacing={5} buttonColor="rgba(243, 200, 83, 1)" onPressIn={()=>{}} onPressOut={() => { this.StopTimer()}} renderIcon={active => <Icon name="circle" color='#F3C853'/>}>
                            <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>this.VoteLike()}>
                                <Icon name="smile-o" size={40} color='#000000'/>
                            </ActionButton.Item>
                            <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)" onPress={()=>this.VoteDislike()} >
                                <Entypo name="emoji-sad" size={40} color='#000000'/>
                            </ActionButton.Item>
                        </ActionButton>
                    </View>
                    <View style={styles.leftTop}>
                        <ActionButton verticalOrientation="down" position='left' spacing={5} buttonColor="rgba(235, 87, 87, 1)" onPressIn={()=>{}} onPressOut={() => { this.StopTimer()}} renderIcon={active => <Icon name="circle" color='#EB5757'/>}>
                            <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>this.VoteLike()}>
                                <Icon name="smile-o" size={40} color='#000000'/>
                            </ActionButton.Item>
                            <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)" onPress={()=>this.VoteDislike()} >
                                <Entypo name="emoji-sad" size={40} color='#000000'/>
                            </ActionButton.Item>
                        </ActionButton>
                    </View>
                </View>
                
                <View style={styles.container}>
                    <View style={styles.containerTimer}>
                        <AnimatedCircularProgress
                        size={200}
                        width={15}            
                        fill={circleProgress}
                        tintColor="#23BAA7"
                        backgroundColor="#3d5875"
                        />
                    </View>                     
                    <View style={styles.containerText}>
                        <Text style={styles.rotateText} >TIMER</Text>
                        <Text style={styles.welcome}>TIMER</Text>
                    </View>  
                </View> 

                <View style={styles.actionButtonsBottom}>  
                    <View style={styles.rightBottom}>
                        <ActionButton verticalOrientation="up" position='right' spacing={5} buttonColor="rgba(188, 106, 217, 1)" onPressIn={()=>{}} onPressOut={() => { this.StopTimer()}} renderIcon={active => <Icon name="circle" color='#BC6AD9'/>}>
                                
                        
                                <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>this.VoteLike()}>
                                    <Icon name="smile-o" size={40} color='#000000'/>
                                </ActionButton.Item>
                                <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)"  onPress={()=>this.VoteDislike()} >
                                    <Entypo name="emoji-sad" size={40} color='#000000'/>
                                </ActionButton.Item>                            
                            </ActionButton>
                    </View> 
                    <View style={styles.centerBottom}>  
                    
                    <ActionButton verticalOrientation="up" position='center'spacing={5} buttonColor="rgba(91, 203, 237, 1)" onPressIn={()=>{}} onPressOut={() => { this.StopTimer()}} renderIcon={active => <Icon name="circle" color='#5BCBED'/>}>
                        
                        <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>this.VoteLike()}>
                            <Icon name="smile-o" size={40} color='#000000'/>
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)"  onPress={()=>this.VoteDislike()} >
                            <Entypo name="emoji-sad" size={40} color='#000000'/>
                        </ActionButton.Item>
                    </ActionButton>
                    </View>
                    <View style={styles.leftBottom}>
                    <ActionButton verticalOrientation="up" position='left' spacing={5} buttonColor="rgba(49, 126, 242, 1)" onPressIn={()=>{}} onPressOut={() => { this.StopTimer()}} renderIcon={active => <Icon name="circle" color='#317EF2'/>}>
                        
                        <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>this.VoteLike()}>
                            <Icon name="smile-o" size={40} color='#000000'/>
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)" onPress={()=>this.VoteDislike()} >
                            <Entypo name="emoji-sad" size={40} color='#000000'/>
                        </ActionButton.Item>
                    </ActionButton>
                    </View>
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
      
      
    },
    welcome: {        
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      fontWeight:'800',
      color: '#23BAA7',
      
    },
   
    rotateText:{
        transform: [{ rotate: '180deg'}],
        fontSize: 25,
      textAlign: 'center',
      margin: 10,
      fontWeight:'800',
      color: '#23BAA7',
    },
    rightBottom:{
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

    }
    
  });