import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Feather } from 'react-native-vector-icons'
import Spacer from '../components/Spacer'

// import { LinearGradient } from 'expo'

const ArmedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Scenario has been armed</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Boom')}>
        <Text style={styles.icon}>
          <FontAwesome5 name={'bomb'} size={200} />;
        </Text>
      </TouchableOpacity>
      <View>
        <Text>(click image to skip to scenario screen)</Text>
        <Text style={styles.daysText}>Tuesday 5th May</Text>
        <Text style={styles.timeText}>13:30 pm</Text>
      </View>
    </View>
  )
}

ArmedScreen.navigationOptions = ({ navigation }) => {
  return (
    {
      headerShown: true,
      title: 'Scenarios',
      headerTintColor: 'orange',
      headerStyle: {
        backgroundColor: 'orange'
      },
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
          <FontAwesome5 size={40} name={'user-cog'} color='green' />
        </TouchableOpacity>
      )
    }
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    paddingTop: 0
  },
  icon: {
    color: 'green',
    paddingTop: 60
  },
  timeText: {
    fontSize: 50,
    color: 'black',
    paddingBottom: 20
  },
  headerText: {
    fontSize: 40,
    fontFamily: 'Roboto',
    textAlign: 'center',
    paddingTop: 0,
    paddingBottom: 0
  },
  daysText: {
    color: 'black',
    fontSize: 25,
    paddingBottom: 0
  }
})

export default ArmedScreen
