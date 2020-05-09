import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native'
import { CheckBox } from 'react-native-elements'
import { Context as ScenarioContext } from '../context/ScenarioConext'
import { NavigationEvents } from 'react-navigation'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ResultsScreen = ({ navigation }) => {
  const { state, fetchScenarios } = useContext(ScenarioContext)
  const takenMins = navigation.state.params.data.timer.mins
  const takenSecs = navigation.state.params.data.timer.secs
  // console.log(navigation.state.params.data)

  return (
    <View>
      <NavigationEvents onWillFocus={fetchScenarios} />

      <Text style={styles.header}>
        Your team completed the following tasks in this time: {takenMins}
        Mins & {takenSecs} Secs
      </Text>

      <FlatList
        style={styles.flatList}
        data={state}
        renderItem={({ item }) => (
          <View style={{ justifyContent: 'center', marginBottom: 10 }}>
            <CheckBox
              title={item.action}
              checkedIcon={
                <FontAwesome5 size={40} name={'check-square'} color='green' />
              }
              uncheckedIcon={
                <FontAwesome5 size={40} name={'check-square'} color='white' />
              }
              checked={item.completed}
              onPress={'checked => setChecked(checked)'}
            />
          </View>
        )}
      />
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/logo-rev_1_orig.png')}
      />
    </View>
  )
}

ResultsScreen.navigationOptions = ({ navigation }) => {
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

const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  header: {
    paddingTop: 10,
    fontSize: 20,
    fontFamily: 'Roboto',
    textAlign: 'center',
    paddingBottom: 1
  },
  tinyLogo: {
    resizeMode: 'center',
    width: null,
    height: 100
  }
})

export default ResultsScreen
