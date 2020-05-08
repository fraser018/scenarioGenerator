import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'

const ActionsForm = ({
  headerText,
  errorMessage,
  onPress,
  submitButtonText
}) => {
  const [item, setItem] = useState('')

  return (
    <View style={styles.container}>
      <Text h3>{headerText}</Text>
      <View style={styles.form}>
        <Input
          containerStyle={{ height: 65 }}
          label='Action'
          value={item}
          onChangeText={newItem => setItem(newItem)}
        />
        <Input
          containerStyle={{ height: 65 }}
          label='Action'
          value={item}
          onChangeText={newItem => setItem(newItem)}
        />
        <Input
          containerStyle={{ height: 65 }}
          label='Action'
          value={item}
          onChangeText={newItem => setItem(newItem)}
        />
        <Input
          containerStyle={{ height: 65 }}
          label='Action'
          value={item}
          onChangeText={newItem => setItem(newItem)}
        />
        <Input
          containerStyle={{ height: 65 }}
          label='Action'
          value={item}
          onChangeText={newItem => setItem(newItem)}
        />
      </View>
      <Button
        type='outline'
        buttonStyle={{
          color: 'green',
          margin: 20,
          borderColor: 'green',
          borderWidth: 3
        }}
        titleStyle={{ color: 'black', fontSize: 23 }}
        title={submitButtonText}
        onPress={onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    fontSize: 14,
    justifyContent: 'flex-start',
    padding: 5
  },
  form: {
    paddingTop: 2,
    borderWidth: 5,
    borderRadius: 8,
    borderColor: 'green'
  }
})

export default ActionsForm
