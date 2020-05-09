import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button as notButton } from 'react-native-elements'

const Button = () => {
  return (
    <>
      <Button
        type='outline'
        buttonStyle={{
          color: 'green',
          margin: 20,
          borderColor: 'green',
          borderWidth: 3
        }}
        titleStyle={{ color: 'black', fontSize: 23 }}
        title={props.title}
        onPress={props.onPress}
      />
    </>
  )
}

const styles = StyleSheet.create({})

export default Button
