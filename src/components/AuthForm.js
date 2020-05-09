import React, { useState } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
// import { NavigationEvents } from 'react-navigation'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [company, setCompany] = useState('')

  // {function companyRender (props) {
  //   const isSignIn = props.headerText
  //   if (headerText === 'Sign In below:') {
  //     return <Text>Hello</Text>
  //   }
  // }}

  return (
    <View>
      <Spacer>
        <Text h3 h3Style={styles.h3}>
          {headerText}
        </Text>
      </Spacer>
      <Input
        label='Email'
        value={email}
        onChangeText={newEmail => setEmail(newEmail)}
        autoCapitalize='none'
        autoCorrect={false}
      />

      <Input
        secureTextEntry
        label='Password'
        value={password}
        onChangeText={newPassword => setPassword(newPassword)}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Input
        label='Company'
        value={company}
        onChangeText={newCompany => setCompany(newCompany)}
        autoCapitalize='none'
        autoCorrect={false}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Spacer>
        <Button
          type='outline'
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          title={submitButtonText}
          onPress={() => onSubmit({ email, password, company })}
        />
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/logo-rev_1_orig.png')}
        />
      </Spacer>
    </View>
  )
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red'
  },
  tinyLogo: {
    resizeMode: 'center',
    width: null,
    height: 100
  },
  button: {
    color: 'green',
    margin: 20,
    borderColor: 'green',
    borderWidth: 3
  },
  buttonTitle: { color: 'black', fontSize: 23 },
  h3: { fontSize: 35, margin: 10 }
})

export default AuthForm
