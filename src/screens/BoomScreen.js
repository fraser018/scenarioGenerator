import React, { useContext, setState, useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native'
import { CheckBox } from 'react-native-elements'
import { Context as ScenarioContext } from '../context/ScenarioConext'
import { NavigationEvents } from 'react-navigation'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const formatNumber = number => `0${number}`.slice(-2)

const getRemainingTime = time => {
  const mins = Math.floor(time / 60)
  const secs = time - mins * 60
  return { mins: formatNumber(mins), secs: formatNumber(secs) }
}

const BoomScreen = ({ navigation }) => {
  const { state, fetchScenarios } = useContext(ScenarioContext)
  // console.log('Boomscreen =', state)
  const [remainingSecs, setRemainingSecs] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const { mins, secs } = getRemainingTime(remainingSecs)

  toggle = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs + 1)
      }, 1000)
    } else if (isActive && remainingSecs !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, remainingSecs])

  return (
    <View>
      <NavigationEvents onWillFocus={toggle} />

      <NavigationEvents onWillFocus={fetchScenarios} />

      <Text style={styles.header}>
        Tick off the actions below as they are completed.
      </Text>

      <FlatList
        style={styles.flatList}
        data={state}
        renderItem={({ item }) => (
          <View style={{ justifyContent: 'center', marginBottom: 10 }}>
            <TouchableOpacity>
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
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.bottom}>
        <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
        <TouchableOpacity
          onPress={() => {
            toggle()
            navigation.navigate('Results', {
              data: { timer: { mins, secs } }
            })
          }}
        >
          <FontAwesome5 size={80} name={'flag-checkered'} color='green' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

BoomScreen.navigationOptions = ({ navigation }) => {
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
  timerText: {
    color: 'green',
    fontSize: 90,
    marginBottom: 20
  },
  header: {
    paddingTop: 10,
    fontSize: 20,
    fontFamily: 'Roboto',
    textAlign: 'center',
    paddingBottom: 1
  }
})

export default BoomScreen

// <Button title='Get List' onPress={() => getIndustryList()} />
