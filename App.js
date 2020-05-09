import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Provider as ScenarioProvider } from './src/context/ScenarioConext'
import { Provider as AuthProvider } from './src/context/AuthContext'
import IntroScreen from './src/screens/IntroScreen'
import ScenariosScreen from './src/screens/ScenarioScreen'
import BoomScreen from './src/screens/BoomScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import { setNavigator } from './src/navigationRef'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import AccountScreen from './src/screens/AccountScreen'
import ResultsScreen from './src/screens/ResultsScreen'
import ConfirmScreen from './src/screens/ConfirmScreen'
import ArmedScreen from './src/screens/ArmedScreen'

const stackNavigator = createStackNavigator(
  {
    Boom: BoomScreen,
    ResolveAuth: ResolveAuthScreen,
    Intro: IntroScreen,
    SignIn: SigninScreen,
    SignUp: SignupScreen,
    Scenarios: ScenariosScreen,
    Confirm: ConfirmScreen,
    Armed: ArmedScreen,
    Results: ResultsScreen,
    Account: AccountScreen
  },
  {
    headerLayoutPreset: 'center'
  }
)

const App = createAppContainer(stackNavigator)
export default () => {
  return (
    <ScenarioProvider>
      <AuthProvider>
        <App
          ref={navigator => {
            setNavigator(navigator)
          }}
        />
      </AuthProvider>
    </ScenarioProvider>
  )
}
