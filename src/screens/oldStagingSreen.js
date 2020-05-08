import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StagingScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SCENARIO ARMED</Text>
      <Text>DATE</Text>
      <Button title='BACK' onPress={() => navigation.navigate('Staging')} />
      <Button title='ACCOUNT' onPress={() => navigation.navigate('Account')} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default StagingScreen
