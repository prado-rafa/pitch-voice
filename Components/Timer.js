import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,PanResponder} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

export default class mainScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            arrayTrueSize:0,
            arrayBoolean:[false,false,false,false,false,false],
            word:'TIMER',
            votes: 0,
            holdFlag: false,
            timesUp:false,
            timer: null,            
            timeInitial:30,
            time:30,
            timeToSing:15,
            timeToVote:10,
            timeAux:0,                  
            seconds: 0,
            isRunningTime: false,
            
        } 
        
        this.VoteDislike = this.VoteDislike.bind(this);
        this.VoteLike = this.VoteLike.bind(this);
        this.CountDownTimer = this.CountDownTimer.bind(this);
        this.StopTimer = this.StopTimer.bind(this);
        this.Reset = this.Reset.bind(this);
        this.CountDownTimerSing = this.CountDownTimerSing.bind(this);
        this.CountDownTimerVote = this.CountDownTimerVote.bind(this);
        this.DesistirSing = this.DesistirSing.bind(this);
        this.Zerar = this.Zerar.bind(this);
    }
      

    StartSing = (i) => {
        let arrayBoolean = this.state.arrayBoolean;
        arrayBoolean[i] = true;
        let num = this.state.arrayTrueSize+1;
        let st = {
            arrayTrueSize:num,
            arrayBoolean:arrayBoolean,
            timeAux:this.state.seconds,
            time:this.state.timeToSing,
            holdFlag:true,
            isRunningTime:false,
            seconds:0,
        };
        if (this.state.timer!=null) {
            st.timer = clearInterval(this.state.timer);
        }
        this.setState(st);
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
        let timer = clearInterval(this.state.timer);
        this.setState({
            isRunningTime:false,
            timer:timer
        })
    }    

    Reset(){
        if(this.state.timer!=null){
        this.setState({
            isRunningTime:false,
            seconds:0,
            timer: clearInterval(this.state.timer)
        })}else{
            this.setState({
                isRunningTime:false,
                seconds:0,             
            })
        }
       
    }

    Zerar(){        
            this.setState({
                arrayTrueSize:0,
                arrayBoolean:[false,false,false,false,false,false],
                word:'TIMER',
                votes: 0,
                holdFlag: false,
                timesUp:false,
                timer: null,            
                timeInitial:30,
                time:30,
                timeToSing:15,
                timeToVote:10,
                timeAux:0,                  
                seconds: 0,
                isRunningTime: false,
            });
        
    }


    CountDownTimerVote(){
        let timer =  setInterval( () => {this.setState(
            previousState=>{
             if(this.state.seconds<this.state.time){
                 return {seconds: this.state.seconds +1,isRunningTime:true,timer:timer};
             }else{ //lembrar de dar clear no interval   (done)      
                 let timerClear = clearInterval(timer);  
                 return {
                     isRunningTime:false,
                     timer:timerClear,
                     timesUp:false,
                     time:this.state.timeInitial,
                     seconds:this.state.timeAux,
                     holdFlag:false,
                 }
             }           
            })
         },1000);
    }

    DesistirSing(){

        if(this.state.timer!=null){
            this.setState({
                isRunningTime:false,
                seconds:0,
                timer: clearInterval(this.state.timer)
            })}else{
                this.setState({
                    isRunningTime:false,
                    seconds:0,             
                })
            }
        this.setState({
            isRunningTime:false,            
            timesUp:false,
            time:this.state.timeInitial,
            seconds:this.state.timeAux,
            holdFlag:false,

        });
    }

    CountDownTimerSing(){
        let timer =  setInterval( () => {this.setState(
            previousState=>{
             if(this.state.seconds<this.state.time){
                 return {seconds: this.state.seconds +1,isRunningTime:true,timer:timer};
             }else{ //lembrar de dar clear no interval   (done)      
                 let timerClear = clearInterval(timer);  
                 return {
                     isRunningTime:false,
                     timer:timerClear,
                     timesUp:true,
                     time:this.state.timeToVote,
                     seconds:0,
                 }
             }           
            })
         },1000);
         
    }

    CountDownTimer(){
                  
            let timer =  setInterval( () => {this.setState(
                previousState=>{
               if(this.state.seconds<this.state.time){
                   return {seconds: this.state.seconds +1,isRunningTime:true,timer:timer};
               }else{ //lembrar de dar clear no interval   (done)      
                   let timerClear = clearInterval(timer);  
                   return {seconds:0,
                       isRunningTime:false,
                       timer:timerClear,
                       arrayTrueSize:0,
                       arrayBoolean:[false,false,false,false,false,false],
                       word:'TIMER',
                       votes: 0,
                       holdFlag: false,
                       timesUp:false,                    
                       timeInitial:30,
                       time:30,
                       timeToSing:15,
                       timeToVote:10,
                       timeAux:0,}
                    }           
                   })
                },1000);                           
            
        
    }
 


    render(){
        
        const ratio = 100/this.state.time;
        let circleProgress = this.state.seconds*ratio;
        let word = this.state.word;
        let votes = this.state.votes;
        let stopTimer = this.StopTimer;
        let voteLike= this.VoteLike;
        let voteDislike = this.VoteDislike;
        let countDownTimer = this.CountDownTimer;
        let reset = this.Reset;
        let startSing = this.StartSing;
        let timesUp =this.state.timesUp;
        let countDownTimerSing = this.CountDownTimerSing;
        let countDownTimerVote=this.CountDownTimerVote;
        let desistirSing = this.DesistirSing;
        let holdFlag = this.state.holdFlag;
        let arrayBoolean = this.state.arrayBoolean;        
        let boolean1= arrayBoolean[0];
        let boolean2= arrayBoolean[1];
        let boolean3= arrayBoolean[2];
        let boolean4= arrayBoolean[3];
        let boolean5= arrayBoolean[4];
        let boolean6= arrayBoolean[5];
        let arrayTrueSize = this.state.arrayTrueSize;
        let timer = this.state.timer;
        
        
        if(holdFlag==false){
            return(
                <ScreenStart timer={timer} zerar={this.Zerar} arrayTrueSize={arrayTrueSize} boolean6={boolean6} boolean5={boolean5} boolean4={boolean4} boolean3={boolean3} boolean2={boolean2} boolean1={boolean1} startSing={startSing} reset={reset} countDownTimer={countDownTimer} circleProgress={circleProgress} stopTimer={stopTimer} word={word} votes={votes} />
            );
        }else{
             if(timesUp==false) {
                return(
                    <ScreenSing desistirSing={desistirSing} countDownTimerSing={countDownTimerSing} circleProgress={circleProgress}  word={word} votes={votes} />
                );
            } else{
                return(
                    <ScreenVote  countDownTimerVote={countDownTimerVote} circleProgress={circleProgress} word={word} votes={votes} voteLike={voteLike} voteDislike={voteDislike}/>
                );
             }       
            
            
            
        }
    }
}

class ScreenVote extends React.Component{

    render(){
        return(
            <View style={styles.wrapper}>
                
                <View style={styles.StartTimer}>
                    <Button color='#23BAA7' title='Iniciar' onPress={()=>{this.props.countDownTimer()}}></Button>
                </View>
                <View style={styles.ResetTimer}>   
                    <Button color='#23BAA7' title='Reset' onPress={()=>{this.props.reset()}}></Button>
                </View>
                
                <ButtonTopRenderVote  voteLike={this.props.voteLike} voteDislike={this.props.voteDislike} />
                <TimerRenderVote countDownTimerVote={this.props.countDownTimerVote} word={this.props.word} votes={this.props.votes} circleProgress={this.props.circleProgress}/>                
                <ButtonBottomRenderVote  voteLike={this.props.voteLike} voteDislike={this.props.voteDislike} />
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
                        tintColor="#56CCF2"
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
    render(){
        return( 
                   
            <View style={styles.actionButtonsTop}>
                        <View style={styles.rightTop}>   
                        <ActionButton verticalOrientation="down" position='right' spacing={5} buttonColor="rgba(113, 206, 151, 1)" renderIcon={active => <Icon name="circle" color='#71CE97'/>}>
                            
                            <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>this.props.voteLike()}>
                                <Icon name="smile-o" size={40} color='#000000'/>
                            </ActionButton.Item>
                            <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)" onPress={()=>this.props.voteDislike()}>
                                <Entypo name="emoji-sad" size={40} color='#000000'/>
                            </ActionButton.Item>
                            
                        </ActionButton>
                    </View>
                    <View style={styles.centerTop}>
                        <ActionButton  verticalOrientation="down" position='center' spacing={5} buttonColor="rgba(243, 200, 83, 1)" renderIcon={active => <Icon name="circle" color='#F3C853'/>}>
                            <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>{this.props.voteLike()}}>
                                <Icon name="smile-o" size={40} color='#000000'/>
                            </ActionButton.Item>
                            <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)" onPress={()=>{this.props.voteDislike()}}>
                                <Entypo name="emoji-sad" size={40} color='#000000'/>
                            </ActionButton.Item>
                        </ActionButton>
                    </View>
                    <View style={styles.leftTop}>
                        <ActionButton  verticalOrientation="down" position='left' spacing={5} buttonColor="rgba(235, 87, 87, 1)" renderIcon={active => <Icon name="circle" color='#EB5757'/>}>
                            <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>{this.props.voteLike()}}>
                                <Icon name="smile-o" size={40} color='#000000'/>
                            </ActionButton.Item>
                            <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)" onPress={()=>{this.props.voteDislike()}}>
                                <Entypo name="emoji-sad" size={40} color='#000000'/>
                            </ActionButton.Item>
                        </ActionButton>
                    </View>
            </View>
        );
    }
}
class ButtonBottomRenderVote extends React.Component{
    render(){
        return(
            <View style={styles.actionButtonsBottom}>  
                    <View style={styles.rightBottom}>
                        <ActionButton verticalOrientation="up" position='right' spacing={5} buttonColor="rgba(188, 106, 217, 1)" renderIcon={active => <Icon name="circle" color='#BC6AD9'/>}>
                                
                        
                                <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>this.props.voteLike()}>
                                    <Icon name="smile-o" size={40} color='#000000'/>
                                </ActionButton.Item>
                                <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)"  onPress={()=>this.props.voteDislike()} >
                                    <Entypo name="emoji-sad" size={40} color='#000000'/>
                                </ActionButton.Item>                            
                            </ActionButton>
                    </View> 
                    <View style={styles.centerBottom}>  
                    
                    <ActionButton verticalOrientation="up" position='center'spacing={5} buttonColor="rgba(91, 203, 237, 1)" renderIcon={active => <Icon name="circle" color='#5BCBED'/>}>
                        
                        <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>this.props.voteLike()}>
                            <Icon name="smile-o" size={40} color='#000000'/>
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)"  onPress={()=>this.props.voteDislike()} >
                            <Entypo name="emoji-sad" size={40} color='#000000'/>
                        </ActionButton.Item>
                    </ActionButton>
                    </View>
                    <View style={styles.leftBottom}>
                    <ActionButton verticalOrientation="up" position='left' spacing={5} buttonColor="rgba(49, 126, 242, 1)"  renderIcon={active => <Icon name="circle" color='#317EF2'/>}>
                        
                        <ActionButton.Item buttonColor="rgba(36, 199, 106, 1)" onPress={()=>this.props.voteLike()}>
                            <Icon name="smile-o" size={40} color='#000000'/>
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor="rgba(242, 53, 47, 1)" onPress={()=>this.props.voteDislike()} >
                            <Entypo name="emoji-sad" size={40} color='#000000'/>
                        </ActionButton.Item>
                    </ActionButton>
                    </View>
                </View>
        );
    }
}


class ScreenSing extends React.Component{
    
    render(){
        
        return(
            <View style={styles.wrapper}>
                <View style={styles.ResetTimer}>   
                    <Button color='#23BAA7' title='Desistir' onPress={()=>{this.props.desistirSing()}}></Button>
                </View>
                <View style={styles.MusicIcon}>
                    <Feather name='triangle' color='#56CCF2' size={60} style={{borderColor:'#56CCF2'}}/>
                    <View style={{transform: [{ rotate: '180deg'}], alignItems:'center',justifyContent:'center',position:'absolute',paddingBottom:10}}>
                        <Icon name='music' color='#ffffff' size={20}/>
                    </View>
                </View>
                <ButtonTopRenderSing />
                <TimerRenderSing countDownTimerSing={this.props.countDownTimerSing} word={this.props.word} votes={this.props.votes} circleProgress={this.props.circleProgress}/>                
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

    render(){
        
        return(
            <View style={styles.container}>
                    <View style={styles.containerTimer}>
                        <AnimatedCircularProgress
                        size={200}
                        width={15}            
                        fill={this.props.circleProgress}
                        tintColor="#56CCF2"
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

class ScreenStart extends React.Component{

    componentDidMount(){        
        
        this.props.countDownTimer();
    }
    componentWillUnmount(){
        this.props.reset();
    }

    render(){
        return(
            <View style={styles.wrapper}>
                
                <ButtonTopRender  boolean3={this.props.boolean3} boolean2={this.props.boolean2} boolean1={this.props.boolean1} startSing={this.props.startSing} i1={0} i2={1} i3={2} />
                <TimerRender arrayTrueSize={this.props.arrayTrueSize} reset={this.props.reset} countDownTimer={this.props.countDownTimer} word={this.props.word} votes={this.props.votes} circleProgress={this.props.circleProgress}/>                
                <ButtonBottomRender reset={this.props.reset} boolean6={this.props.boolean6} boolean5={this.props.boolean5} boolean4={this.props.boolean4} startSing={this.props.startSing} i4={3} i5={4} i6={5}/>
            </View>
        );
    }
}

class TimerRender extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                    <View style={styles.containerTimer}>
                        <AnimatedCircularProgress
                        size={200}
                        width={15}            
                        fill={this.props.circleProgress}
                        tintColor="#23BAA7"
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




class ButtonTopRender extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
    }


    callForSing = (isActive, index) => {
        if (!isActive) {
          this.props.startSing(index);
        }
      }

      callForRenderIcon3 = (isActive) => {
        if (!isActive) {
          return (<Icon name="circle" color='#71CE97'/>);
        }else{
          return (<Feather name="x" color='#ffffff'/>);
      }
    }

    callForRenderIcon2 = (isActive) => {
        if (!isActive) {
          return (<Icon name="circle" color='#F2C94D'/>);
        }else{
          return (<Feather name="x" color='#ffffff'/>);
      }
    }

    callForRenderIcon1 = (isActive) => {
        if (!isActive) {
          return (<Icon name="circle" color='#EB5757'/>);
        }else{
          return (<Feather name="x" color='#ffffff'/>);
      }
    }


    render(){
        let boolean3 = this.props.boolean3;
        let boolean2 = this.props.boolean2;
        let boolean1 = this.props.boolean1;
        return( 
                   
            <View style={styles.actionButtonsTop}>
                        <View style={styles.rightTop}>   
                        <ActionButton verticalOrientation="down" position='right' spacing={5} buttonColor="rgba(113, 206, 151, 1)"
                        onPress={()=> this.callForSing(boolean3,this.props.i3) }
                        renderIcon={ () => this.callForRenderIcon3(boolean3) } >
                                                
                        </ActionButton>
                    </View>
                    <View style={styles.centerTop}>
        <ActionButton verticalOrientation="down" position='center' spacing={5} buttonColor="rgba(243, 200, 83, 1)"
                       onPress={()=> this.callForSing(boolean2,this.props.i2) } 
                       renderIcon={ () => this.callForRenderIcon2(boolean2) } >
                           
                        </ActionButton>
                    </View>
                    <View style={styles.leftTop}>
                        <ActionButton verticalOrientation="down" position='left' spacing={5} buttonColor="rgba(235, 87, 87, 1)"
                         onPress={()=> this.callForSing(boolean1,this.props.i1) }
                         renderIcon={ () => this.callForRenderIcon1(boolean1) } >
                          
                        </ActionButton>
                    </View>
            </View>
        );
    }
}

class ButtonBottomRender extends React.Component{

    callForSing = (isActive, index) => {
        if (!isActive) {
            this.props.startSing(index);
        }
      }

    callForRenderIcon6 = (isActive) => {
        if (!isActive) {
          return (<Icon name="circle" color='#BC6AD9'/>);
        }else{
          return (<Feather name="x" color='#ffffff'/>);
      }
    }

    callForRenderIcon5 = (isActive) => {
        if (!isActive) {
          return (<Icon name="circle" color='#5BCBED'/>);
        }else{
          return (<Feather name="x" color='#ffffff'/>);
      }
    }

    callForRenderIcon4 = (isActive) => {
        if (!isActive) {
          return (<Icon name="circle" color='#317EF2'/>);
        }else{
          return (<Feather name="x" color='#ffffff'/>);
      }
    }


    render(){
        let boolean6 = this.props.boolean6;
        let boolean5 = this.props.boolean5;
        let boolean4 = this.props.boolean4;
        return(
            <View style={styles.actionButtonsBottom}>  
                    <View style={styles.rightBottom}>
                       
                        <ActionButton autoInactive={false} action={true} verticalOrientation="up" position='right' spacing={5} buttonColor="rgba(188, 106, 217, 1)" 
                        onPress={()=> this.callForSing(boolean6,this.props.i6) } 
                        renderIcon={ () => this.callForRenderIcon6(boolean6) } >                        	
                        >
                                                
                        </ActionButton>
                    </View> 
                    <View style={styles.centerBottom}>  
                    
                    <ActionButton verticalOrientation="up" position='center'spacing={5} buttonColor="rgba(91, 203, 237, 1)" 
                    onPress={()=> this.callForSing(boolean5,this.props.i5) }                         
                    renderIcon={ () => this.callForRenderIcon5(boolean5) } >


                    </ActionButton>
                    </View>
                    <View style={styles.leftBottom}>
                    <ActionButton verticalOrientation="up" position='left' spacing={5} buttonColor="rgba(49, 126, 242, 1)"
                        onPress={()=> this.callForSing(boolean4,this.props.i4) } 
                        renderIcon={ () => this.callForRenderIcon4(boolean4) } >
                          
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

    },
    MusicIcon:{
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
    }
    
  });