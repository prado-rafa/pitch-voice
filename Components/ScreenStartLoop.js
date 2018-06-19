import React, {Component} from 'react';
import {StyleSheet,Button,Text,View} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Progress from 'react-native-progress/Bar'; 
import EvilIcons from 'react-native-vector-icons/EvilIcons';


export default class ScreenStartLoop extends React.Component{

    componentWillMount(){        
        this.props.countDownTimerLoop();
    }
    componentWillUnmount(){
        this.props.reset();
    }
    
    render(){
    return(
        <View style={styles.wrapper}>
            <View style={styles.Skip}>
                <ActionButton offsetX={0} offsetY={0} 
                position='center' size={60} 
                buttonColor = 'rgba(196, 196, 196, 1)' 
                buttonText='' onPress={()=> this.props.skip()}
                renderIcon={ () => <EvilIcons name='refresh' color='#000000' size={50} /> }
                >
                    
                </ActionButton>
            </View>
            <View style={styles.musicIconCenter}>
                <Icon name='music' size={220} color='#686E75'/>               
            </View>
            <ButtonTopRender stringRGBAColor={this.props.stringRGBAColor} stringColor={this.props.stringColor} arrayTotalScore={this.props.arrayTotalScore} boolean3={this.props.boolean3} boolean2={this.props.boolean2} boolean1={this.props.boolean1} startSing={this.props.startSing} i1={0} i2={1} i3={2} />
            <TimerRender arrayTrueSize={this.props.arrayTrueSize} reset={this.props.reset} countDownTimer={this.props.countDownTimer} word={this.props.word} votes={this.props.votes} circleProgress={this.props.circleProgress}/>                
            <ButtonBottomRender stringRGBAColor={this.props.stringRGBAColor} stringColor={this.props.stringColor} arrayTotalScore={this.props.arrayTotalScore} reset={this.props.reset} boolean6={this.props.boolean6} boolean5={this.props.boolean5} boolean4={this.props.boolean4} startSing={this.props.startSing} i4={3} i5={4} i6={5}/>
        </View>
    );
}
}

class TimerRender extends React.Component{
render(){
    return(
        <View style={styles.container}>
                <View style={styles.containerTimer}>
                    <Progress 
                    progress={(this.props.circleProgress)/100}
                    width={150}
                    animationType='timing'
                    borderRadius= {0}
                    unfilledColor= '#464646' 
                    color='#FFFFFF'
                    borderWidth={0}                        
                    />
                    <Progress style={{transform: [{ rotate: '180deg'}]}}
                    progress={(this.props.circleProgress)/100}
                    width={150}
                    animationType='timing'
                    borderRadius= {0}
                    unfilledColor= '#464646' 
                    color='#FFFFFF'
                    borderWidth={0}                     
                    />

                </View>                     
                <View style={styles.containerText}>
                    <Text style={styles.rotateWord} >{this.props.word}</Text>
                    <Text style={styles.word}>{this.props.word}</Text>
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

//função para saber se a pessoa já cantou ou não 
callForSing = (isActive, index) => {
    if (!isActive) {
      this.props.startSing(index);
    }
  }
  //função pra mudar o icone (caso a pessoa tenha cantado ou nao)
  callForRenderIcon3 = (isActive) => {
    if (!isActive) {
      return (<Icon name="circle" color='#71CE97'/>);
    }else{
      return (<Feather name="x" color='#ffffff'/>);
  }
}
//função pra mudar o icone (caso a pessoa tenha cantado ou nao)
callForRenderIcon2 = (isActive) => {
    if (!isActive) {
      return (<Icon name="circle" color='#F2C94D'/>);
    }else{
      return (<Feather name="x" color='#ffffff'/>);
  }
}
//função pra mudar o icone (caso a pessoa tenha cantado ou nao)
callForRenderIcon1 = (isActive) => {
    if (!isActive) {
      return (<Icon name="circle" color='#EB5757'/>);
    }else{
      return (<Feather name="x" color='#ffffff'/>);
  }
}

callForColor = (isActive, rgba) => {

    if(isActive){
        return "rgba(0, 0, 0, 0.80)"
    }else{
        return rgba
    }

}

callForTextColor = (isActive, colorString) =>{

    if(isActive){
        return {fontWeight:'bold',color:colorString}
    }else{
        return {fontWeight:'bold'}
    }
}

render(){
    let stringRGBAColor = this.props.stringRGBAColor;
    let stringColor = this.props.stringColor;
    let arrayTotalScore = this.props.arrayTotalScore;
    let boolean3 = this.props.boolean3;
    let boolean2 = this.props.boolean2;
    let boolean1 = this.props.boolean1;
    return( 
               
        <View style={styles.actionButtonsTop}>
                    <View style={styles.rightTop} >   
                    <ActionButton buttonText={''+arrayTotalScore[2]} hideShadow={false}
                    buttonTextStyle={this.callForTextColor(boolean3,stringColor[2])} offsetX={10} offsetY={10} size={100} verticalOrientation="down" position='right' spacing={5} buttonColor={this.callForColor(boolean3,stringRGBAColor[2])}
                    onPress={()=> this.callForSing(boolean3,this.props.i3) }
                    />
                                            
                    
                </View>
                <View style={styles.centerTop}>
                <ActionButton  buttonText={''+arrayTotalScore[1]} buttonTextStyle={this.callForTextColor(boolean2,stringColor[1])} offsetY={10} size={100} verticalOrientation="down" position='center' spacing={5} buttonColor={this.callForColor(boolean2,stringRGBAColor[1])}
                    onPress={()=> this.callForSing(boolean2,this.props.i2) } 
                >                           
                </ActionButton>
                </View>
                <View style={styles.leftTop}>
                    <ActionButton buttonText={''+arrayTotalScore[0]} buttonTextStyle={this.callForTextColor(boolean1,stringColor[0])} offsetX={10} size={100} offsetY={10} verticalOrientation="down" position='left' spacing={5} buttonColor={this.callForColor(boolean1,stringRGBAColor[0])}
                    onPress={()=> this.callForSing(boolean1,this.props.i1) }
                    >
                      
                    </ActionButton>
                </View>
        </View>
    );
}
}

class ButtonBottomRender extends React.Component{

//igual ao ButtomTopRender so que para baixo (descrevi as funções ali em cima)

callForSing = (isActive, index) => {
    if (!isActive) {
        this.props.startSing(index);
    }
  }

  callForColor = (isActive, rgba) => {

    if(isActive){
        return "rgba(0, 0, 0, 0.80)"
    }else{
        return rgba
    }

}


callForTextColor = (isActive, colorString) =>{

    if(isActive){
        return {color:colorString}
    }else{
        return {fontWeight:'normal'}
    }
}


render(){
    let stringRGBAColor = this.props.stringRGBAColor;
    let stringColor = this.props.stringColor;
    let arrayTotalScore = this.props.arrayTotalScore;
    let boolean6 = this.props.boolean6;
    let boolean5 = this.props.boolean5;
    let boolean4 = this.props.boolean4;
    return(
        <View style={styles.actionButtonsBottom}>  
                <View style={styles.rightBottom}>
                   
                    <ActionButton buttonText={''+arrayTotalScore[5]} offsetX={10} offsetY={10} size={100} autoInactive={false} action={true} verticalOrientation="up" position='right' spacing={5} buttonColor={this.callForColor(boolean6,stringRGBAColor[5])} 
                   buttonTextStyle={this.callForTextColor(boolean6,stringColor[5])}
                   onPress={()=> this.callForSing(boolean6,this.props.i6) } 
                    >                                                                   
                    </ActionButton>
                </View> 
                <View style={styles.centerBottom}>  
                
                <ActionButton buttonText={''+arrayTotalScore[4]} offsetY={10} size={100} verticalOrientation="up" position='center'spacing={5} buttonColor={this.callForColor(boolean5,stringRGBAColor[4])} 
                buttonTextStyle={this.callForTextColor(boolean5,stringColor[4])}
                onPress={()=> this.callForSing(boolean5,this.props.i5) }                         
                 >


                </ActionButton>
                </View>
                <View style={styles.leftBottom}>
                <ActionButton buttonText={''+arrayTotalScore[3]} offsetX={10} offsetY={10}  size={100} verticalOrientation="up" position='left' spacing={5} buttonColor={this.callForColor(boolean4,stringRGBAColor[3])}
                    buttonTextStyle={this.callForTextColor(boolean4,stringColor[3])}
                    onPress={()=> this.callForSing(boolean4,this.props.i4) } 
                  >
                      
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
    alignItems:'center',

},
musicIconCenter:{
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent:'center',

},
Skip:{
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
    position:'absolute',
    top: '40%',
    width: '11%',
    height:'17%',
    left: '10%',
    zIndex:2,
  },
  word: {        
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
    fontWeight:'800',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontWeight: 'bold',


    
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
    flexDirection: 'row',
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
rotateWord:{
    transform: [{ rotate: '180deg'}],
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
    fontWeight:'800',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
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
