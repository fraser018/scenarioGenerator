import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'

const ActionsForm = ({
  headerText,
  errorMessage,
  onSubmit,
  submitButtonText
}) => {
  const [item, setItem] = useState('')

  return (
    <View style={styles.container}>
      <Text h3>{headerText}</Text>
      <View style={styles.form}>
        <Input
          containerStyle={styles.input}
          label='Action'
          value={item}
          onChangeText={newItem => setItem(newItem)}
        />
      </View>
      <Button
        type='outline'
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        title={submitButtonText}
        onPress={() => onSubmit({ item })}
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
  },
  button: {
    color: 'green',
    margin: 20,
    borderColor: 'green',
    borderWidth: 3
  },
  buttonTitle: { color: 'black', fontSize: 23 },
  input: { height: 65 }
})

export default ActionsForm
