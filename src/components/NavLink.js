import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Spacer from '../components/Spacer'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    paddingLeft: 7
  }
})

export default withNavigation(NavLink)
