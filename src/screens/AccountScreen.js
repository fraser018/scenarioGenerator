import React, { useContext, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableHighlight
} from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer'
import { Context as AuthConext } from '../context/AuthContext'

const AccountScreen = () => {
  const { signout } = useContext(AuthConext)
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              This feature is not available yet
            </Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible)
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Text
        style={{ fontSize: 44, justifyContent: 'center', textAlign: 'center' }}
      >
        Account Screen
      </Text>
      <Spacer>
        <Button
          type='outline'
          buttonStyle={{
            color: 'green',
            margin: 20,
            borderColor: 'green',
            borderWidth: 3
          }}
          titleStyle={{ color: 'black', fontSize: 23 }}
          title='Sign Out'
          onPress={signout}
        />
      </Spacer>
      <Button
        type='outline'
        buttonStyle={{
          color: 'green',
          margin: 20,
          borderColor: 'green',
          borderWidth: 3
        }}
        titleStyle={{ color: 'black', fontSize: 23 }}
        title='See Previous Scenarios'
        onPress={() => {
          setModalVisible(true)
        }}
      />
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/logo-rev_1_orig.png')}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  tinyLogo: {
    paddingTop: 50,
    resizeMode: 'center',
    width: null,
    height: 500,
    justifyContent: 'flex-end'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: 'blue',
    borderRadius: 3,
    padding: 10,
    elevation: 5,
    paddingLeft: 40,
    paddingRight: 40
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Roboto'
  }
})

export default AccountScreen
