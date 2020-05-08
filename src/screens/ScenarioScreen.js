import React, { useContext, useState } from 'react'
import { Context } from '../context/ScenarioConext'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
import ActionsForm from '../components/ActionsForm'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ScenarioScreen = ({ navigation }) => {
  // const [action, setAction] = useState('')

  const { state, addActionToScenario } = useContext(Context)
  console.log(state)

  return (
    <View>
      <Spacer />
      <ActionsForm
        onPress={() => navigation.navigate('Confirm')}
        submitButtonText='Submit'
        headerText='Enter a action to carry out during the scenario '
      />
    </View>
  )
}

ScenarioScreen.navigationOptions = ({ navigation }) => {
  return (
    {
      headerShown: true,
      title: 'Scenarios',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        flex: 1
      }
    },
    {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <FontAwesome5 size={40} name='user-cog' color='green' />
        </TouchableOpacity>
      )
    }
  )
}

const styles = StyleSheet.create({})

export default ScenarioScreen

//onSubmit={(title, content) => {
//addBlogPost(title, content, () => navigation.navigate('Index'))
