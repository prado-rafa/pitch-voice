import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class ScreenResults extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        this.props.computaVotos();
        setTimeout( () => {this.props.backToStart(this.props.whoPressButton)} ,3000);  //qdo passar 5s sia de ScreenResults
    }

    componentWillUnmount(){
        clearTimeout();
    }

    // retorna se a pessoa ganhou ou perdeu
    winOrlose(boolean,votes){
        let totalW = ((votes+1)==this.props.numPlayers);
        let totalL = ((votes-1) == -(this.props.numPlayers));
        if(boolean){ 

            if(totalW){ //5 estrelas
                return( 
                    (<Text>
                        <Text style={styles.resultText} >
                            Arrasou!!!!!
                        </Text>
                    </Text>
                ) );

            }else if(!totalW && !(votes==0)){ //4 estrelas
                return( 
                    (<Text>
                        <Text style={styles.resultText} >
                           Uhul!!!!
                        </Text>
                        <Text style={styles.resultText}>
                            
                        </Text>
                    </Text>
                ) );           

            }else { // 3 estrelas
                return( 
                    (<Text>
                        <Text style={styles.resultText} >
                            Mais ou Menos
                        </Text>
                        <Text style={styles.resultText}>
                            
                        </Text>
                    </Text>
                ) );
            }
        }
       else{
           if(votes==0){ //2 estrelas
                return( 
                    (<Text>
                        <Text style={styles.resultText} >
                            Hoje não!
                        </Text>
                        <Text style={styles.resultText}>
                           
                        </Text>
                    </Text>
                ) );
           }else if(!totalL){ //1 estrela
                return( 
                    (<Text>
                        <Text style={styles.resultText} >
                            It's been a long day... :(
                        </Text>
                        <Text style={styles.resultText}>
                           
                        </Text>
                    </Text>
                ) );
            }else{ //0 estrela
                return( 
                    (<Text>
                        <Text style={styles.resultText} >
                            ;-;
                        </Text>
                        <Text style={styles.resultText}>
                           
                        </Text>
                    </Text>
                ) );
           }
        }
    }

    stars=(boolean, votes)=>{
        let totalW = ((votes+1)==this.props.numPlayers);
        let totalL = ((votes-1) == -(this.props.numPlayers));
        if(boolean){ 

            if(totalW){ //5 estrelas
                return(
                    <View style={styles.stars}>
                        <Icon name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'6%',left:'2%'}}/>
                            <Icon name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',left:'0%'}}/>    
                        <Icon name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'30%',left:'25%'}} />
                            <Icon name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'23%'}}/> 
                        <Icon name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                            <Icon name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                        <Icon name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'30%',left:'67%'}} />
                            <Icon name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'65%'}}/> 
                        <Icon name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'6%',right:'2%'}} />
                            <Icon name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',right:'0%'}}/> 
                    </View>
                );

            }else if(!totalW && !(votes==0)){ //4 estrelas
                return(
                    <View style={styles.stars}>
                        <Icon name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'6%',left:'2%'}}/>
                            <Icon name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',left:'0%'}}/>    
                        <Icon name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'30%',left:'25%'}} />
                            <Icon name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'23%'}}/> 
                        <Icon name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                            <Icon name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                        <Icon name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'30%',left:'67%'}} />
                            <Icon name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'65%'}}/> 
                        <Icon name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'6%',right:'2%'}} />
                            <Icon name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',right:'0%'}}/> 
                    </View>
                );      

            }else { // 3 estrelas
                return(
                    <View style={styles.stars}>
                        <Icon name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'6%',left:'2%'}}/>
                            <Icon name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',left:'0%'}}/>    
                        <Icon name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'30%',left:'25%'}} />
                            <Icon name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'23%'}}/> 
                        <Icon name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                            <Icon name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                        <Icon name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'30%',left:'67%'}} />
                            <Icon name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'65%'}}/> 
                        <Icon name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'6%',right:'2%'}} />
                            <Icon name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',right:'0%'}}/> 
                    </View>
                );
            }
        }
       else{
           if(votes==0){ //2 estrelas
            return(
                <View style={styles.stars}>
                    <Icon name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'6%',left:'2%'}}/>
                        <Icon name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',left:'0%'}}/>    
                    <Icon name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'30%',left:'25%'}} />
                        <Icon name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'23%'}}/> 
                    <Icon name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                        <Icon name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                    <Icon name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'30%',left:'67%'}} />
                        <Icon name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'65%'}}/> 
                    <Icon name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'6%',right:'2%'}} />
                        <Icon name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',right:'0%'}}/> 
                </View>
            );
           }else if(!totalL){ //1 estrela
            return(
                <View style={styles.stars}>
                    <Icon name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'6%',left:'2%'}}/>
                        <Icon name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',left:'0%'}}/>    
                    <Icon name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'30%',left:'25%'}} />
                        <Icon name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'23%'}}/> 
                    <Icon name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                        <Icon name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                    <Icon name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'30%',left:'67%'}} />
                        <Icon name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'65%'}}/> 
                    <Icon name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'6%',right:'2%'}} />
                        <Icon name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',right:'0%'}}/> 
                </View>
            );
            }else{ //0 estrela
                return(
                    <View style={styles.stars}>
                        <Icon name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'6%',left:'2%'}}/>
                            <Icon name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',left:'0%'}}/>    
                        <Icon name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'30%',left:'25%'}} />
                            <Icon name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'23%'}}/> 
                        <Icon name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                            <Icon name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                        <Icon name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'30%',left:'67%'}} />
                            <Icon name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'65%'}}/> 
                        <Icon name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'6%',right:'2%'}} />
                            <Icon name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',right:'0%'}}/> 
                    </View>
                );
           }
        }
    }
    
    




    render(){
        let pontuacaoParcial = this.props.pontuacaoParcial;
        let stringColor = this.props.stringColor;
        let votes = this.props.votes;
        let whoPressButton = this.props.whoPressButton;
        let numPlayers = this.props.numPlayers;
        return(
            <View backgroundColor={stringColor[whoPressButton]} style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                               
                <View style={{alignItems:'center',left:'0%',right:'0%',bottom:'65%',top:'15%',backgroundColor:'transparent',position:'absolute'}} >
                {this.winOrlose(this.props.winOrlose,votes)}
                </View>
                {this.stars(this.props.winOrlose, votes)}
                <View style={{alignItems:'center', left:'39%', right:'39%', top:'52.5%',bottom:'32%',backgroundColor:'transparent',position:'absolute'}}>
                    <Text style={[styles.resultText,{fontSize:40}]} >+{pontuacaoParcial[whoPressButton]}</Text>
                </View>
                <View style={{bottom:'0%', left:'40%',right:'40%',top:'90%',alignItems:'center',position:'absolute',flex:1}} >
                  {/* <Button title='Retornar' onPress={()=> this.props.backToStart(whoPressButton)} color='#000000'  /> */}
                </View>                    
                

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
      resultText:{
        fontSize: 50,
        fontFamily:'Verdana',
        fontWeight:'bold',
        color:'#ffffff',
        textAlign: 'center',

      },
      stars:{
          flex:1,
          position:'absolute',
          left:'20%',
          top:'30%',
          right:'20%',
          bottom:'35%',
          backgroundColor:'transparent',    
      },

});