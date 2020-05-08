import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const IndustryForm = ({ onSubmit }) => {
  const [industry, setIndustry] = useState(industry)

  return (
    <View>
      <Text>What industry are you in? </Text>
      <TextInput
        style={styles.input}
        value={industry}
        onChangeText={text => setIndustry(text)}
      />
      <Button title='Next' onPress={() => onSubmit(industry)} />
      <Text>{state}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'grey'
  },
  title: {
    fontSize: 20
  },
  icon: {
    fontSize: 18
  }
})

export default IndustryForm
