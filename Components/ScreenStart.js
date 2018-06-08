import React, {Component} from 'react';
import {StyleSheet,Button,Text,View} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';


export default class ScreenStart extends React.Component{ 

 /* tela principal! lembrem-se essa tela é a principal porém para existir vários rounds,
 criei outra tela igual a essa que fica tabelando entre esse e ScreenStartLoop (toda vez que acaba o tempo! ou alguém da Skip)
 é para existir um loop. Dava erro qdo eu tentava usar só a ScreenStart, pois o relogio quebrava. 
 isso foi uma medida pra entrega preliminar, caso alguém ache necessário mudar, e deixar só uma mesmo, isso é fácil de mudar, na hora não pensei em uma solução rapida, tava tomando muito erro.
  */
  // então tá avisado! caso alguém mude algo aqui, mude também na classe ScreenStartLoop!!!!!!!!!!!!!!!! pois elas sao iguais

    componentWillMount(){        
        
        this.props.countDownTimer();
    }
    
    componentWillUnmount(){
        this.props.reset();
    }

    render(){
        let arrayTotalScore = this.props.arrayTotalScore;
        let stringColor = this.props.stringColor;
        return(
            <View style={styles.wrapper}>
                <View style={styles.Skip}>
                    <Button color = '#23BAA7' title='Skip' onPress={()=> this.props.skip()} style={styles.welcome}>
                        <Feather name='refresh-ccw' size={30} color='ffffff'/>
                    </Button>
                </View>
                <View style={styles.ScoreTopLeft}>
                    <Text style={{transform: [{ rotate: '180deg'}],color:stringColor[0]}}>{arrayTotalScore[0]}</Text>
                </View>
                <View style={styles.ScoreTopCenter}>
                    <Text style={{transform: [{ rotate: '180deg'}],color:stringColor[1]}}>{arrayTotalScore[1]}</Text>
                </View>
                <View style={styles.ScoreTopRight}>
                    <Text style={{transform: [{ rotate: '180deg'}],color:stringColor[2]}}>{arrayTotalScore[2]}</Text>
                </View>
                <View style={styles.ScoreBottomLeft}>
                    <Text style={{color:stringColor[3]}}>{arrayTotalScore[3]}</Text>
                </View>
                <View style={styles.ScoreBottomCenter}>
                    <Text style={{color:stringColor[4]}}>{arrayTotalScore[4]}</Text>
                </View>
                <View style={styles.ScoreBottomRight}>
                    <Text style={{color:stringColor[5]}}>{arrayTotalScore[5]}</Text>
                </View>                
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

    //igual ao ButtomTopRender so que para baixo (descrevi as funções ali em cima)

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
    Skip:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',
        position:'absolute',
        top: '48.5%',
        width: '20%',
        height:'3%',
        left: '43%',
        zIndex:2,
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
      ScoreBottomCenter:{
        flex:1,
        position:'absolute',
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '10%',
        width: '10%',
        height:'8%',
        right: '43.9%',
        paddingBottom:25,
        zIndex:0,
        borderRadius:10,

    },ScoreBottomLeft:{
        flex:1,
        position:'absolute',
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '10%',
        width: '10%',
        height:'8%',
        left: '11%',
        paddingBottom:25,
        zIndex:0,
        borderRadius:10,

    },ScoreBottomRight:{
        flex:1,
        position:'absolute',
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '10%',
        width: '10%',
        height:'8%',
        right: '11%',
        paddingBottom:25,
        zIndex:0,
        borderRadius:10,

    },ScoreTopCenter:{
        flex:1,
        position:'absolute',
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        top: '10%',
        width: '10%',
        height:'8%',
        right: '43.9%',
        paddingTop:25,
        zIndex:0,
        borderRadius:10,

    },ScoreTopLeft:{
        flex:1,
        position:'absolute',
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        top: '10%',
        width: '10%',
        height:'8%',
        left: '11%',
        paddingTop:25,
        zIndex:0,
        borderRadius:10,

    },ScoreTopRight:{
        flex:1,
        position:'absolute',
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        top: '10%',
        width: '10%',
        height:'8%',
        right: '11%',
        paddingTop:25,
        zIndex:0,
        borderRadius:10,

    },

});
