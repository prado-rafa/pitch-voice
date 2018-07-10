import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import ActionButton from 'react-native-action-button';
import FontAwesome  from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import Progress from 'react-native-progress/Bar'; 
import Ionicons from '@expo/vector-icons/Ionicons';

export default class ScreenSing extends React.Component{
   
    render(){
        let stringColorOpacity = this.props.stringColorOpacity;        
        return(
            <View style={styles.wrapper}>
                <View style={{flex:1, flexDirection:'row', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-between',position:'absolute',top: '40%',width: '11%',height:'17%',zIndex:2, right:'10%'}}>   
                    <ActionButton offsetX={0} offsetY={0} 
                    position='center' size={60} 
                    buttonColor = 'rgba(196, 196, 196, 1)' 
                    buttonText='' onPress={()=>{this.props.done()}}
                    useNativeFeedback={false}
                    renderIcon={ () => <Ionicons name='md-microphone' color='#FFFFFF' size={50} /> }
                    />
                </View>
                <View style={styles.Skip}>   
                    <ActionButton offsetX={0} offsetY={0} 
                    position='center' size={60} 
                    buttonColor = 'rgba(196, 196, 196, 1)' 
                    buttonText='' onPress={()=>{this.props.desistirSing()}}
                    useNativeFeedback={false}
                    renderIcon={ () => <FontAwesome name='flag' color='#FFFFFF' size={50} /> }
                    />
                </View>
                <View style={styles.musicIconCenter}>
                    <FontAwesome name='music' size={220} color={stringColorOpacity[this.props.whoPressButton]} />               
                </View>
                <ButtonTopRenderSing numPlayers={this.props.numPlayers} stringRGBAColor={this.props.stringRGBAColor} arrayVote={this.props.arrayVote} voteLike={this.props.voteLike} voteDislike={this.props.voteDislike} whoPressButton={this.props.whoPressButton} stringRGBAColor={this.props.stringRGBAColor} />
                <TimerRenderSing stringColor={this.props.stringColor} whoPressButton={this.props.whoPressButton} countDownTimerSing={this.props.countDownTimerSing} word={this.props.word} votes={this.props.votes} circleProgress={this.props.circleProgress}/>                
                <ButtonBottomRenderSing numPlayers={this.props.numPlayers} stringRGBAColor={this.props.stringRGBAColor} arrayVote={this.props.arrayVote} voteLike={this.props.voteLike} voteDislike={this.props.voteDislike} whoPressButton={this.props.whoPressButton} stringRGBAColor={this.props.stringRGBAColor} />
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
                        <Progress 
                        progress={(this.props.circleProgress)/100}
                        width={150}
                        animationType='timing'
                        borderRadius= {0}
                        unfilledColor= {this.colorTimer(this.props.stringColor,this.props.whoPressButton)} 
                        color='#FFFFFF'
                        borderWidth={0}                        
                        />
                        <Progress style={{transform: [{ rotate: '180deg'}]}}
                        progress={(this.props.circleProgress)/100}
                        width={150}
                        animationType='timing'
                        borderRadius= {0}
                        unfilledColor= {this.colorTimer(this.props.stringColor,this.props.whoPressButton)} 
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
class ButtonTopRenderSing extends React.Component{

    changeVote= (arrayVote,index)=>{
        
        if((arrayVote[index]<0)){
            this.props.voteLike(index);
        }else{
            this.props.voteDislike(index);
        }
    }

    changeButtonIcon=(arrayVote,index)=>{
        if(arrayVote[index]>=0){
            return (<Feather name="check" color='#ffffff'size={70} />);
        }else{
            return (<Feather name="x" color='#ffffff'size={70} />);
        }
    }

    buttonSing0 = (index,arrayVote,numPlayers) =>{
        if((numPlayers==6)||(numPlayers==5)||(numPlayers==4)){
            if(index==0){
            return( <View style={styles.leftTop}>
                    <ActionButton useNativeFeedback={false} size={100} offsetX={10} offsetY={10} verticalOrientation="down" position='left' spacing={5} buttonColor={this.props.stringRGBAColor[0]} renderIcon={active => <FontAwesome name="music" color='#ffffff' size={50} /> }  >
                    </ActionButton>
                </View>
            );            
            }else{
                return(
                <View style={styles.leftTop}>
                    <ActionButton useNativeFeedback={false} size={100} offsetX={10} offsetY={10} onPress={()=>this.changeVote(arrayVote,0) } verticalOrientation="down" position='left' spacing={5} buttonColor={this.props.stringRGBAColor[0]} renderIcon={active => this.changeButtonIcon(arrayVote,0)} >
                    </ActionButton>
                </View>
                );
            }
        }
        return;
    }

    buttonSing1 = (index,arrayVote,numPlayers) =>{
        if(numPlayers==4){
            return;
        }else{
            if(index==1){
            return(<View style={styles.centerTop}>
                    <ActionButton useNativeFeedback={false} size={100} offsetX={10} offsetY={10} verticalOrientation="down" position='center' spacing={5} buttonColor={this.props.stringRGBAColor[1]} renderIcon={active => <FontAwesome name="music" color='#ffffff' size={50} />} >             
                    </ActionButton>
                </View>
            );
            }else{
                return(
                <View style={styles.centerTop}>
                    <ActionButton useNativeFeedback={false} size={100} offsetX={10} offsetY={10} onPress={()=>this.changeVote(arrayVote,1) } verticalOrientation="down" position='center' spacing={5} buttonColor={this.props.stringRGBAColor[1]} renderIcon={active => this.changeButtonIcon(arrayVote,1)} >         
                    </ActionButton>
                </View>
                );
            }
        }
    }


    buttonSing2=(index,arrayVote,numPlayers)=>{
        if((numPlayers==6)||(numPlayers==5)||(numPlayers==4)){
            if(index==2){
                return(
                <View style={styles.rightTop}>   
                    <ActionButton useNativeFeedback={false} offsetX={10} offsetY={10} size={100} verticalOrientation="down" position='right' spacing={5} buttonColor={this.props.stringRGBAColor[2]} renderIcon={active => <FontAwesome name="music" color='#ffffff' size={50} />} >
                    </ActionButton>
                </View>
                );
            }else{
                return(
                <View style={styles.rightTop}>   
                            <ActionButton useNativeFeedback={false} offsetX={10} offsetY={10} onPress={()=>this.changeVote(arrayVote,2) } size={100} verticalOrientation="down" position='right' spacing={5} buttonColor={this.props.stringRGBAColor[2]} renderIcon={active => this.changeButtonIcon(arrayVote,2)} >
                            </ActionButton>
                </View>
                );
            }
        }
        return;
    }


    render(){
        
        return( 
            <View style={styles.actionButtonsTop}>
            {this.buttonSing0(this.props.whoPressButton,this.props.arrayVote,this.props.numPlayers)}
            {this.buttonSing1(this.props.whoPressButton,this.props.arrayVote,this.props.numPlayers)}
            {this.buttonSing2(this.props.whoPressButton,this.props.arrayVote,this.props.numPlayers)}
            </View>
        );
    }

}
class ButtonBottomRenderSing extends React.Component{
    
    changeVote= (arrayVote,index)=>{
        
        if((arrayVote[index]<0)){
            this.props.voteLike(index);
        }else{
            this.props.voteDislike(index);
        }
    }

    changeButtonIcon=(arrayVote,index)=>{
        if(arrayVote[index]>=0){
            return (<Feather name="check" color='#ffffff'size={70} />);
        }else{
            return (<Feather name="x" color='#ffffff'size={70} />);
        }
    }

    buttonSing3 = (index,arrayVote,numPlayers) =>{
        if(numPlayers==2){
            return;
        }else{
            if(index==3){
            return(
                <View style={styles.leftBottom}>
                    <ActionButton offsetX={10} offsetY={10} size={100} verticalOrientation="up" position='left' spacing={5} buttonColor={this.props.stringRGBAColor[3]} renderIcon={active => <FontAwesome name="music" color='#ffffff' size={50} />} useNativeFeedback={false}>
                    </ActionButton>
                </View>
            );            
            }else{
                return(
                <View style={styles.leftBottom}>
                    <ActionButton offsetX={10} offsetY={10} size={100} onPress={()=>this.changeVote(arrayVote,3) } verticalOrientation="up" position='left' spacing={5} buttonColor={this.props.stringRGBAColor[3]} renderIcon={active => this.changeButtonIcon(arrayVote,3)} useNativeFeedback={false}>
                    </ActionButton>
                </View>
                );
            }
        }
    }

    buttonSing4 = (index,arrayVote,numPlayers) =>{
        if((numPlayers==6)||(numPlayers==2)){
            if(index==4){
            return(
                <View style={styles.centerBottom}>  
                    <ActionButton offsetX={10} offsetY={10} size={100} verticalOrientation="up" position='center'spacing={5} buttonColor={this.props.stringRGBAColor[4]} renderIcon={active => <FontAwesome name="music" color='#ffffff' size={50} />} useNativeFeedback={false}>
                    </ActionButton>
                </View>
            );
            }else{
                return(
                <View style={styles.centerBottom}>  
                    <ActionButton offsetX={10} offsetY={10} size={100} onPress={()=>this.changeVote(arrayVote,4) } verticalOrientation="up" position='center'spacing={5} buttonColor={this.props.stringRGBAColor[4]} renderIcon={active => this.changeButtonIcon(arrayVote,4)} useNativeFeedback={false}>
                    </ActionButton>
                </View>
                );
            }
        }

    }


    buttonSing5=(index,arrayVote,numPlayers)=>{
        if(numPlayers==2){
            return;
        }else{
            if(index==5){
                return(
                    <View style={styles.rightBottom}>
                    <ActionButton offsetX={10} offsetY={10} size={100} verticalOrientation="up" position='right' spacing={5} buttonColor={this.props.stringRGBAColor[5]} renderIcon={active => <FontAwesome name="music" color='#ffffff' size={50} />} useNativeFeedback={false}>
                                                    
                    </ActionButton>
                </View> 
                );
            }else{
                return(
                    <View style={styles.rightBottom}>
                    <ActionButton offsetX={10} offsetY={10} size={100} onPress={()=>this.changeVote(arrayVote,5) } verticalOrientation="up" position='right' spacing={5} buttonColor={this.props.stringRGBAColor[5]} renderIcon={active => this.changeButtonIcon(arrayVote,5)} useNativeFeedback={false}>
                                                    
                    </ActionButton>
                </View> 
                );
            }
        }
    }

    render(){
        return(
            <View style={styles.actionButtonsBottom}>  
                {this.buttonSing3(this.props.whoPressButton,this.props.arrayVote,this.props.numPlayers)}
                {this.buttonSing4(this.props.whoPressButton,this.props.arrayVote,this.props.numPlayers)}
                {this.buttonSing5(this.props.whoPressButton,this.props.arrayVote,this.props.numPlayers)}
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