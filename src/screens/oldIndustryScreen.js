import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { Context } from '../context/IndustryContext'
import IndustryForm from '../components/IndustryForm'

const IndustryScreen = ({ navigation }) => {
  const { addIndustry } = useContext(Context)
  return (
    <IndustryForm
      onSubmit={(industry, date) => {
        addIndustry(industry, date, () => navigation.navigate('Scenarios'))
      }}
    />
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

export default IndustryScreen
