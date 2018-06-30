
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Intro from './Components/Intro'
import Rules from './Components/Rules'
import PreGame from './Components/PreGame'
import Ranking from './Components/Ranking'
import MainScreen from './Components/MainScreen'
import ChooseColor from './Components/ChooseColor'

const IntroStack = createStackNavigator({
  Intro: Intro,
  Rules: Rules,
  PreGame: PreGame,
  ChooseColor:ChooseColor,
  Ranking: Ranking,
})

export default createSwitchNavigator({
  Intro: IntroStack,
  Ranking: Ranking,
  PreGame: PreGame,
  MainScreen: MainScreen,
  ChooseColor: ChooseColor,
  
})
