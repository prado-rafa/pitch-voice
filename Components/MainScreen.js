import React from 'react';
import dicionarie from './WordGiver.js';
import ScreenStart from './ScreenStart';
import ScreenResults from './ScreenResults';
import ScreenSing from './ScreenSing';
import ScreenVote from './ScreenVote';
import ScreenStartLoop from './ScreenStartLoop';

export default class MainScreen extends React.Component{ //classe que da tela do jogo! todas outras telas do jogo são chamadas aqui!
    
    constructor(props){
        super(props);

        /*
        variaveis vindas da tela PreGame
        -> textInput: array com o nome dos jogadores
        -> topScore: pontuação máxima
        -> timeSing: tempo para cantar
        -> showtime: tempo do jogo
         */
        const { navigation } = this.props;
        const topScore = navigation.getParam('topScore');
        const timeSing = navigation.getParam('timeSing');
        const showtime = navigation.getParam('showtime');
        

        this.state = {
            gameOver:false, //flag antiga, a qual dizia se o jogador atingiu os pontos necessarios pra acabar o jogo
            winOrlose: false, // variavel para saber se o jogador ganhou ou não os pontos do round!
            timesUpVote:false, // flag para trocar de tela! 
            pontuacaoParcial:[0,0,0,0,0,0], //array que tem os pontos de cada round de cada jogador, por exemplo: [10,9,0,8,7,0].
            numPlayers:6, // quantidade de jogadores
            howManyWon: 0, // variavel que diz quantos jogadores ja ganharam pontos naquele round
            arrayVote: [1,1,1,1,1,1], //arrya dos votos
            arrayTotalScore: [0,0,0,0,0,0], // array com pontuação total
           /*  winner: 30, */
            winner: JSON.stringify(topScore), // variavel que diz qtos pontos acaba o jogo
            pontuacaoMax: 10, // qtd max de pontos por round
            penalidade: 1, // o qto vai subtrair por acerto em cada round
            whoPressButton:0, // variavel pra saber o indice do array certo, diz quem apertou o botão pra cantar.
            stringColor: ['#F35558','#F5D150','#70CF97','#3880E9','#60C4FC','#BA69CF'], //array com as cores 
            stringRGBAColor: ["rgba(235, 87, 87, 1)","rgba(243, 200, 83, 1)","rgba(113, 206, 151, 1)","rgba(49, 126, 242, 1)",
                                "rgba(91, 203, 237, 1)","rgba(188, 106, 217, 1)"], //array com as cores em rgba
            stringColorOpacity:['#8D565B','#9D8D53','#5B8674','#426697','#51798A','#6F5C82'], //COR DO ICONE DO CENTRO DE musica
            arrayBoolean:[false,false,false,false,false,false], //array auxiliar que serve para desabilitar um jogador que ja cantou e serve tbm para mostrar quem vai cantar
            word:'TIMER',  // estado que é palavra do jogo
            holdFlag: false,  // flag para trocar de tela.
            timesUp:false, // flag para trocar de tela.
            timer: null,   // a funcao relogio.
            /* timeInitial:30, */
            timeInitial: (JSON.stringify(showtime)*2), // isso aqui é o tempo que foi definido para os rounds
            time:(JSON.stringify(showtime)*2), // variavel tempo que fica com o tempo atual
            /* timeToSing:15, */
            timeToSing: JSON.stringify(timeSing), // tempo definido para uma pessoa poder cantar.
            timeToVote:10, // tempo definido para ocorrer a votação
            timeAux:0,   // variavel que guarda o tempo pausado, para qdo voltar, saber em qtos segundos estava
            seconds: 0, // variavel q mostra os segundos no momento
            isRunningTime: false, // diz se algum relogio esta rodando ou se esta parado
        } 
        
        this.VoteDislike = this.VoteDislike.bind(this);
        this.VoteLike = this.VoteLike.bind(this);
        this.CountDownTimer = this.CountDownTimer.bind(this);
        this.StopTimer = this.StopTimer.bind(this);
        this.Reset = this.Reset.bind(this);
        this.CountDownTimerSing = this.CountDownTimerSing.bind(this);
        this.CountDownTimerVote = this.CountDownTimerVote.bind(this);
        this.DesistirSing = this.DesistirSing.bind(this);
        this.Skip = this.Skip.bind(this);
        this.CountDownTimerLoop = this.CountDownTimerLoop.bind(this);
        this.Done = this.Done.bind(this);

        
    }
      // função que roda qdo a tela principal é chamada, atualiza o nome que vai ser sorteado.
    componentDidMount(){ 
        let word = dicionarie.giveWord();
        this.setState({
            word:word,
        })
    }
    // função que é chamada qdo você vai para tela de resultados. Aqui você descobre se volta para a ScreenStart ou Se o jogo acabou.
    BackToStart= (index) =>{  
        let arrayTotalScore = this.state.arrayTotalScore;
        let winner = this.state.winner;

        if(arrayTotalScore[index]<winner){
        this.setState({
            timesUp:false,
            holdFlag:false,
            timesUpVote:false,
            winOrlose:false,
            arrayVote:[1,1,1,1,1,1],
        });
        }else{
            this.GameOver();
        }
    }
    // função que é chamada qdo alguém aperta o botão pra cantar
    StartSing = (i) => {
        
        
        if(this.state.isRunningTime){
            let arrayBoolean = this.state.arrayBoolean;
            arrayBoolean[i] = true;
            let timer = clearInterval(this.state.timer);
            this.setState({
                whoPressButton:i,            
                arrayBoolean:arrayBoolean,
                timeAux:this.state.seconds,
                time:this.state.timeToSing,
                isRunningTime:false,
                seconds:0,
                timesUp:false,
                timer:timer,
                isRunningTime:false,
                holdFlag:true, // muda a tela
            });
        }      
       else {
           
        }
        
    }  

    //função que é chamada qdo alguém vota positivo!
    VoteLike(index){
        
        let arrayVote = this.state.arrayVote;
            arrayVote[index] = 1;
            this.setState({
               arrayVote:arrayVote,
            });
                
    }
 //função que é chamada qdo alguém vota negativo!
    VoteDislike(index){
        let arrayVote = this.state.arrayVote;
            arrayVote[index] = -1;
            this.setState({
               arrayVote:arrayVote,
            });
    }

    // função que calcula os votos
    computaVotos= () =>{
        let howManyWon = this.state.howManyWon;
        let pontuacaoMax = this.state.pontuacaoMax;
        let penalidade = this.state.penalidade;
        let votes=0;      
        let arrayVote = this.state.arrayVote;
        for(let i in arrayVote){ 
             votes += arrayVote[i]; // soma os votos que estão no array
            }
            votes = votes -1; // -1 pq agora o arrya vote começa com 1,1,1,1,1,1 dessa forma precisa tirar o voto de quem tá cantando, pois ele não vota mais.
        let arrayTotalScore = this.state.arrayTotalScore;
        let index = this.state.whoPressButton;
        let pontuacaoAtual = pontuacaoMax-(howManyWon*penalidade);
        let pontuacaoParcial = this.state.pontuacaoParcial;

        if(votes>0){ // se ganhar pontos
            pontuacaoParcial[index] = pontuacaoAtual;
            arrayTotalScore[index] = pontuacaoAtual+arrayTotalScore[index];

            this.setState({
                howManyWon:howManyWon+1,
                pontuacaoParcial:pontuacaoParcial, 
                winOrlose:true,
                arrayTotalScore:arrayTotalScore,
                arrayVote: [1,1,1,1,1,1],
            });

        }else if(votes==0){ // se for neutro é random! 50% de chance
            let lucky = (Math.random()*100);
            if(lucky%2<1){
                pontuacaoParcial[index] = pontuacaoAtual;
                arrayTotalScore[index] = pontuacaoAtual+arrayTotalScore[index];
    
                this.setState({
                    howManyWon:howManyWon+1,
                    pontuacaoParcial:pontuacaoParcial,
                    winOrlose:true,
                    arrayTotalScore:arrayTotalScore,
                    arrayVote: [1,1,1,1,1,1],
                });
            }else{
                this.setState({ //perdeu
                    winOrlose:false,
                    arrayVote: [1,1,1,1,1,1],
                })
            }

        }else{ // perdeu 
            this.setState({
                winOrlose:false,
                arrayVote: [1,1,1,1,1,1],
            })
        }
    }

  //pausa o tempo  
    StopTimer(){
        let timer = clearInterval(this.state.timer);
        this.setState({
            isRunningTime:false,
            timer:timer
        })
    }    
 // reseta o relogio
    Reset(){
        if(this.state.isRunningTime){
            let timer = clearInterval(this.state.timer);
        this.setState({
            isRunningTime:false,
            seconds:0,
            timer: timer,
        })}else{
            
        }
       
    }
  // função relogio da parte de votação, existe um relogio para cada tela pois as variaveis q eles mudam são diferentes, pois é nessa parte q as flags sao acionadas
    CountDownTimerVote(){
        let timer =  setInterval( () => {this.setState(
            previousState=>{
             if(this.state.seconds<this.state.time){
                 return {seconds: this.state.seconds +1,isRunningTime:true,timer:timer};
             }else{     
                 let timerClear = clearInterval(timer);  
                 return {
                     isRunningTime:false,
                     timer:timerClear,
                     timesUp:true,
                     time:this.state.timeInitial,
                     seconds:this.state.timeAux,                
                     
                     holdFlag:true, 
                     timesUpVote:true, 
                 }
             }           
            })
         },1000);
    }
 // volta para a tela principal pois a pessoa desistiu
    DesistirSing(){

        if(this.state.isRunningTime){
            let timer = clearInterval(this.state.timer)
            this.setState({                
                timer: timer,                        
                timesUp:false,
                time:this.state.timeInitial,
                seconds:this.state.timeAux,
                holdFlag:false,
                isRunningTime:false, /*correção de um bug q ao clicar rapidamente logo apos 
                                    alguem cantar, tinha q esperar 1 segundo pra essa variavel atualizar*/

            });
        }else{

        }
    }
 // avança logo para a tela de votação
    Done(){
        if(this.state.isRunningTime){
        let timerClear = clearInterval(this.state.timer)
        this.setState({
            isRunningTime:false,
            timer:timerClear,
            timesUp:true,
            time:this.state.timeInitial,
            seconds:this.state.timeAux,              
            holdFlag:true, 
            timesUpVote:true,
            
        });
        }else{

        }
    }
 //timer so para a parte da tela de cantar
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
                    time:this.state.timeInitial,
                    seconds:this.state.timeAux,              
                    
                    holdFlag:true, 
                    timesUpVote:true, 
                 }
             }           
            })
         },1000);
        
         
    }

 // timer da tela ScreenStartLoop pois é igual da Screen start mas muda 1 flag que fica tabelando entre ScreenStart e ScreenStartLoop
    CountDownTimerLoop(){
        if(this.state.timesUp==true){        
            let timer =  setInterval( () => {this.setState(
                previousState=>{
               if(this.state.seconds<this.state.time){
                   return {
                       seconds: this.state.seconds +1,
                       isRunningTime:true,
                       timer:timer,
                       };
               }else{     
                   let timerClear = clearInterval(timer);  
                   let word = dicionarie.giveWord();
                   return {
                       isRunningTime:false,
                       timer:timerClear,
                        seconds:0,                      
                       arrayBoolean:[false,false,false,false,false,false],                       
                      word:word,
                       holdFlag: false,
                       timesUp:false,               
                       time:this.state.timeInitial,                       
                       arrayVote:[1,1,1,1,1,1],
                       pontuacaoParcial:[0,0,0,0,0,0],
                       howManyWon:0,
                        }
                    }           
                })
            },500); 
        }   
    }
 // timer da tela principal
    CountDownTimer(){
          if(this.state.timesUp==false){        
            let timer =  setInterval( () => {this.setState(
                previousState=>{
               if(this.state.seconds<this.state.time){
                   return {
                       seconds: this.state.seconds +1,
                       isRunningTime:true,
                       timer:timer, 
                   }                     
               }else{ //lembrar de dar clear no interval   (done)      
                   let timerClear = clearInterval(timer); 
                   let word = dicionarie.giveWord(); 
                   return {
                       word:word,
                       seconds:0,
                       isRunningTime:false,
                       timer:timerClear,
                       arrayBoolean:[false,false,false,false,false,false],                       
                       holdFlag: false, // mantem falso
                       timesUp:true,      // vai para a tela de ScreenStartLoop para poder ficar tabelando entre telas principais (para o jogador parece que só existe 1 tela)        
                       time:this.state.timeInitial,                       
                       arrayVote:[1,1,1,1,1,1],
                       pontuacaoParcial:[0,0,0,0,0,0],
                       howManyWon:0,
                        }
                    }           
                   })
                },500);   
            }            
            
        
    }

  // pula a musica! isso faz com que tabele entre ScreenStartLoop e ScreenStart, para poder ficar mudando de palavra e resetando as coisas necessárias (como relogio e etc)
    Skip(){
        
    if(this.state.isRunningTime){ 
        let word = dicionarie.giveWord();   
        if(this.state.timesUp==false){
        this.Reset();
        this.setState({
                    word:word,
                    arrayBoolean:[false,false,false,false,false,false],                       
                    holdFlag: false,
                    timesUp:true,               
                    time:this.state.timeInitial,                       
                    arrayVote:[1,1,1,1,1,1],
                    pontuacaoParcial:[0,0,0,0,0,0],
                    howManyWon:0
        });
        }else{
            this.Reset();
            this.setState({
                word:word,
                arrayBoolean:[false,false,false,false,false,false],                       
                holdFlag: false,
                timesUp:false,               
                time:this.state.timeInitial,                       
                arrayVote:[1,1,1,1,1,1],
                pontuacaoParcial:[0,0,0,0,0,0],
                howManyWon:0
                
            });
        }
    }
        
}
   // funçao que acaba o jogo! aqui passa os parametros para a tela de ranking por navegação
    GameOver=()=>{
        const { navigation } = this.props;
        let arrayTotalScore = this.state.arrayTotalScore;
        const text1 = navigation.getParam('text1');
        const text2 = navigation.getParam('text2');
        const text3 = navigation.getParam('text3');
        const text4 = navigation.getParam('text4');
        const text5 = navigation.getParam('text5');
        const text6 = navigation.getParam('text6');
        navigation.navigate('Ranking', {
            arrayTotalScore: arrayTotalScore,
            text1: text1,
            text2: text2,
            text3: text3,
            text4: text4,
            text5: text5,
            text6: text6,
        });
    }


    render(){
        // isso aqui é só pra ficar melhor de chamar nos parametros e diminuir espaço
        // sempre que for passar um estado para as telas, coloque seu let aqui ou use os que estão aqui
        const ratio = 100/this.state.time;
        let circleProgress = this.state.seconds*ratio;
        let word = this.state.word;
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
        let timer = this.state.timer;
        let skip = this.Skip;
        let countDownTimerLoop = this.CountDownTimerLoop;
        let done = this.Done;
        let whoPressButton = this.state.whoPressButton;
        let stringColor = this.state.stringColor;
        let stringRGBAColor = this.state.stringRGBAColor;
        let stringColorOpacity = this.state.stringColorOpacity;
        let arrayTotalScore = this.state.arrayTotalScore;
        let arrayVote = this.state.arrayVote;
        let pontuacaoParcial = this.state.pontuacaoParcial;
        let timesUpVote = this.state.timesUpVote;
        let winOrlose = this.state.winOrlose;

        //lembrem-se se passar os parametros que quiserem como PROPS como está aqui embaixo
                        
                //aqui é a flag que controla se alguém apertou o botão de cantar ou não
                if(holdFlag==false){
                    if(timesUp==false){ 
                        return(  //inicio, tela principal!
                        <ScreenStart stringRGBAColor={stringRGBAColor} stringColor={stringColor} arrayTotalScore={arrayTotalScore} skip={skip} timer={timer} zerar={this.Zerar} boolean6={boolean6} boolean5={boolean5} boolean4={boolean4} boolean3={boolean3} boolean2={boolean2} boolean1={boolean1} startSing={startSing} reset={reset} countDownTimer={countDownTimer} circleProgress={circleProgress} stopTimer={stopTimer} word={word} />
                    ); // se o tempo acabar (ou vc der skip) vai tabelar para ScreenStartLoop
                    }else{ 
                        
                        return( // também é a tela principal, porém aqui seria o Loop da tela, para existir varios rounds. (Tive problemas com o relogio para ter só uma tela que entraria em loop, preferi criar outra tela igual)
                        <ScreenStartLoop stringRGBAColor={stringRGBAColor} stringColor={stringColor} arrayTotalScore={arrayTotalScore} skip={skip} timer={timer} zerar={this.Zerar} boolean6={boolean6} boolean5={boolean5} boolean4={boolean4} boolean3={boolean3} boolean2={boolean2} boolean1={boolean1} startSing={startSing} reset={reset} countDownTimerLoop={countDownTimerLoop} circleProgress={circleProgress} stopTimer={stopTimer} word={word}  />
                        );// se o tempo acabar (ou vc der skip) vai tabelar para ScreenStart
                    }
                }else{ // apertaram o botão então vai para a tela de cantar primeiro
                    if(timesUp==false) { //galera esta cantando aqui
                        return(
                            <ScreenSing arrayVote={arrayVote} voteLike={voteLike} voteDislike={voteDislike} stringColorOpacity={stringColorOpacity} stringRGBAColor={stringRGBAColor} stringColor={stringColor}  whoPressButton={whoPressButton} done={done} desistirSing={desistirSing} countDownTimerSing={countDownTimerSing} circleProgress={circleProgress}  word={word} />
                        );
                    } else{  // terminou de cantar ou acabou o tempo
                        if(timesUpVote==false){ // hora de votar
                        return(
                            <ScreenVote arrayVote={arrayVote} countDownTimerVote={countDownTimerVote} circleProgress={circleProgress} word={word} voteLike={voteLike} voteDislike={voteDislike}/>
                        );}else{  // acabou tempo de votação e mostra tela de resultado da votação.
                            return(
                                <ScreenResults winOrlose={winOrlose} backToStart={this.BackToStart} computaVotos={this.computaVotos} arrayVote={arrayVote} pontuacaoParcial={pontuacaoParcial} whoPressButton={whoPressButton} />
                            );
                        }

                    }       
                    
                    
                    
                }
            
    }
}


