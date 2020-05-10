import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext)
  console.log(state)

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText='Sign Up below:'
        errorMessage={state.errorMessage}
        submitButtonText='Sign Up'
        onSubmit={signup}
      />
      <NavLink
        routeName='SignIn'
        text='Already have an account? Sign in instead'
      />
    </View>
  )
}

SignupScreen.navigationOptions = () => {
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
  container: { flex: 1, justifyContent: 'center', marginBottom: 20 }
})

export default SignupScreen
