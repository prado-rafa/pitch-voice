import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';


export default class ScreenVote extends React.Component{

    render(){
        return(
            <View style={styles.wrapperVote}>
                                               
                <ButtonTopRenderVote arrayVote={this.props.arrayVote} voteLike={this.props.voteLike} voteDislike={this.props.voteDislike} />
                <TimerRenderVote countDownTimerVote={this.props.countDownTimerVote} word={this.props.word} circleProgress={this.props.circleProgress}/>                
                <ButtonBottomRenderVote arrayVote={this.props.arrayVote} voteLike={this.props.voteLike} voteDislike={this.props.voteDislike} />
            </View>
        );
    }

}

class TimerRenderVote extends React.Component{

    constructor(props){
        super(props);
        this.state ={

        }
    }

    componentDidMount(){
        this.props.countDownTimerVote();
    }

    
    render(){
        
        return(
            <View style={styles.container}>
                    <View style={styles.containerTimer}>
                        <AnimatedCircularProgress
                        size={200}
                        width={15}            
                        fill={this.props.circleProgress}
                        tintColor="#297a4c"
                        backgroundColor="#3d5875"
                        />
                    </View>                     
                    <View style={styles.containerText}>
                        <Text style={styles.rotateText} >Votem!</Text>
                        <Text style={styles.welcome}>Votem!</Text>
                    </View>  
            </View> 
        );
    }

}
class ButtonTopRenderVote extends React.Component{

    // função para mudar o icone do botão qdo a pessoa vota
    iconButton(array, index){

        if(array[index]==0){
            return(
            <Entypo name="emoji-neutral" color='#000000' size={40} style={{ transform: [{ rotate: '180deg'}]}} />
            );           
        }else if(array[index]==1){
            return(
             <Icon name="smile-o" size={40} color='#000000' style={{ transform: [{ rotate: '180deg'}]}}/>
            );
        }else{
            return(
                <Entypo name="emoji-sad" size={40} color='#000000' style={{ transform: [{ rotate: '180deg'}]}}/>
            );    
        }

    }



    render(){
        let arrayVote = this.props.arrayVote;
        return( 
                   
            <View style={styles.actionButtonsTop}>
                        <View style={styles.rightTop}>   
                        <ActionButton verticalOrientation="down" position='right' spacing={5} buttonColor="rgba(113, 206, 151, 1)" renderIcon={() => this.iconButton(arrayVote,2)}>
                        
                        <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>this.props.voteLike(2)}>
                                <Icon name="smile-o" size={40} color='#000000' style={{ transform: [{ rotate: '180deg'}]}}/>
                            </ActionButton.Item>
                            
                            <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)" onPress={()=>this.props.voteDislike(2)}>
                                <Entypo name="emoji-sad" size={40} color='#000000' style={{ transform: [{ rotate: '180deg'}]}}/>
                            </ActionButton.Item>
                            
                            
                        </ActionButton>
                    </View>
                    <View style={styles.centerTop}>
                        <ActionButton  verticalOrientation="down" position='center' spacing={5} buttonColor="rgba(243, 200, 83, 1)" renderIcon={ () => this.iconButton(arrayVote,1)}>
                           
                            <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>{this.props.voteLike(1)}}>
                                <Icon name="smile-o" size={40} color='#000000' style={{ transform: [{ rotate: '180deg'}]}}/>
                            </ActionButton.Item>
                            <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)" onPress={()=>{this.props.voteDislike(1)}}>
                                <Entypo name="emoji-sad" size={40} color='#000000' style={{ transform: [{ rotate: '180deg'}]}}/>
                            </ActionButton.Item>
                        </ActionButton>
                    </View>
                    <View style={styles.leftTop}>
                        <ActionButton  verticalOrientation="down" position='left' spacing={5} buttonColor="rgba(235, 87, 87, 1)" renderIcon={(active)=> this.iconButton(arrayVote,0)}>
                            
                            <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>{this.props.voteLike(0)}}>
                                <Icon name="smile-o" size={40} color='#000000' style={{ transform: [{ rotate: '180deg'}]}} />
                            </ActionButton.Item>
                            <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)" onPress={()=>{this.props.voteDislike(0)}}>
                                <Entypo name="emoji-sad" size={40} color='#000000' style={{ transform: [{ rotate: '180deg'}]}}/>
                            </ActionButton.Item>
                        </ActionButton>
                    </View>
            </View>
        );
    }
}
class ButtonBottomRenderVote extends React.Component{

    iconButton(array, index){

        if(array[index]==0){
            return(
            <Entypo name="emoji-neutral" color='#000000' size={40} />
            );           
        }else if(array[index]==1){
            return(
             <Icon name="smile-o" size={40} color='#000000'/>
            );
        }else{
            return(
            <Entypo name="emoji-sad" size={40} color='#000000'/>
            );    
        }

    }



    render(){
        let arrayVote = this.props.arrayVote;
        return(
            <View style={styles.actionButtonsBottom}>  
                    <View style={styles.rightBottom}>
                        <ActionButton verticalOrientation="up" position='right' spacing={5} buttonColor="rgba(188, 106, 217, 1)" renderIcon={() => this.iconButton(arrayVote,5)}>
                          
                                <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)"  onPress={()=>this.props.voteDislike(5)} >
                                    <Entypo name="emoji-sad" size={40} color='#000000'/>
                                </ActionButton.Item>       
                                <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>this.props.voteLike(5)}>
                                    <Icon name="smile-o" size={40} color='#000000'/>
                                </ActionButton.Item>                     
                            </ActionButton>
                    </View> 
                    <View style={styles.centerBottom}>  
                    
                    <ActionButton verticalOrientation="up" position='center'spacing={5} buttonColor="rgba(91, 203, 237, 1)" renderIcon={ () =>this.iconButton(arrayVote,4)}>
                        
                        <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)"  onPress={()=>this.props.voteDislike(4)} >
                            <Entypo name="emoji-sad" size={40} color='#000000'/>
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>this.props.voteLike(4)}>
                            <Icon name="smile-o" size={40} color='#000000'/>
                        </ActionButton.Item>
                        
                    </ActionButton>
                    </View>
                    <View style={styles.leftBottom}>
                    <ActionButton verticalOrientation="up" position='left' spacing={5} buttonColor="rgba(49, 126, 242, 1)"  renderIcon={() => this.iconButton(arrayVote,3)}>
                        
                        <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)" onPress={()=>this.props.voteDislike(3)} >
                            <Entypo name="emoji-sad" size={40} color='#000000'/>
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>this.props.voteLike(3)}>
                            <Icon name="smile-o" size={40} color='#000000'/>
                        </ActionButton.Item>
                        
                    </ActionButton>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapperVote:{
        flex:1,       
        backgroundColor: '#191A1E',
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
});