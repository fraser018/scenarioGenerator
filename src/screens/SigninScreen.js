import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context } from '../context/AuthContext'

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context)
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText='Sign In below:'
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText='Sign In'
      />
      <NavLink
        text='Dont have an account? Sign up instead!'
        routeName='SignUp'
      />
    </View>
  )
}
SigninScreen.navigationOptions = () => {
  return {
    headerShown: true,
    title: '',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 10,
      textAlign: 'center',
      flex: 1
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 20
  }
})

export default SigninScreen
