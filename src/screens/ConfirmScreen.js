import React, { useState } from 'react'
import {
  View,
  Platform,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Button } from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ConfirmScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState('time')
  const [show, setShow] = useState(false)
  // console.log(date)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)
  }

  const showMode = currentMode => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
  }

  const showTimepicker = () => {
    showMode('time')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>
        Pick a Date and Time to run the scenario
      </Text>
      <View>
        <Button
          type='outline'
          icon={
            <FontAwesome5
              name='calendar-alt'
              size={35}
              color='blue'
              padding={20}
            />
          }
          iconLeft
          titleStyle={{ color: 'black', fontSize: 23 }}
          onPress={showDatepicker}
          title='   Pick a Date!'
          buttonStyle={{
            color: 'red',
            margin: 20,
            borderColor: 'blue',
            borderWidth: 5
          }}
        />
      </View>
      <View>
        <Button
          type='outline'
          icon={
            <FontAwesome5 name='clock' size={35} color='blue' padding={20} />
          }
          iconLeft
          buttonStyle={{
            color: 'red',
            margin: 20,
            borderColor: 'blue',
            borderWidth: 5
          }}
          titleStyle={{ color: 'black', fontSize: 23 }}
          onPress={showTimepicker}
          title='   Pick a Time!'
        />
      </View>
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange}
        />
      )}
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>
          To confirm the scenario please click Arm Scenario
        </Text>
        <Text style={styles.bottomText}>
          You will be able to modify this scenario and see any others from your
          accounts screen.
        </Text>
        <Button
          type='outline'
          buttonStyle={{
            color: 'red',
            margin: 20,
            borderColor: 'orange',
            borderWidth: 5
          }}
          titleStyle={{ color: 'black', fontSize: 23 }}
          title='Arm Scenario'
          onPress={() =>
            navigation.navigate('Armed', { data: { chosenDate: { date } } })
          }
        />
      </View>
    </View>
  )
}

ConfirmScreen.navigationOptions = ({ navigation }) => {
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
  container: {
    flex: 1,
    paddingTop: 5,
    alignItems: 'center'
  },
  topText: {
    fontSize: 30,
    fontFamily: 'Roboto',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 20
  },
  bottomText: {
    fontSize: 15,
    fontFamily: 'Roboto',
    textAlign: 'center',
    paddingTop: 20
  }
})

export default ConfirmScreen
