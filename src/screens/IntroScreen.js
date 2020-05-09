import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'

const IntroScreen = ({ navigation }) => {
  // const { state } = useContext(AppContext)
  return (
    <View>
      <Text style={styles.welcome}>Emergancy Scenario Generator</Text>

      <Button
        type='outline'
        buttonStyle={{
          color: 'green',
          margin: 20,
          borderColor: 'green',
          borderWidth: 3
        }}
        titleStyle={{ color: 'black', fontSize: 23 }}
        title='Sign In'
        onPress={() => navigation.navigate('SignIn')}
      />

      <Button
        type='outline'
        buttonStyle={{
          color: 'orange',
          margin: 20,
          borderColor: 'orange',
          borderWidth: 3
        }}
        titleStyle={{ color: 'black', fontSize: 23 }}
        title='Sign Up'
        onPress={() => navigation.navigate('SignUp')}
      />

      <Image
        style={styles.tinyLogo}
        source={require('../../assets/logo-rev_1_orig.png')}
      />
      <View style={styles.bottom}></View>
    </View>
  )
}

IntroScreen.navigationOptions = () => {
  return {
    headerShown: true,
    title: 'WELCOME',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center',
      flex: 1
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    fontSize: 40,
    fontFamily: 'Roboto',
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 40
  },
  tinyLogo: {
    resizeMode: 'center',
    width: null,
    height: 300
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  button: {
    margin: 15
  }
})

export default IntroScreen
