import React, { useState, useEffect } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { decode } from '@mapbox/polyline'

//couple of hard coded locations
const House = {
  latitude: -45.03931,
  longitude: 168.629384,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
}

const Badgers = {
  latitude: -45.031128,
  longitude: 168.66109
}

// get directions for polyline to draw an actual route
const getDirections = async (startLoc, destinationLoc) => {
  // console.log(startLoc, destinationLoc)

  try {
    const KEY = ''
    let resp = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
    )

    let respJson = await resp.json()
    console.log(respJson)

    let points = decode(respJson.routes[0].overview_polyline.points)
    console.log('points=', points)
    let coords = points.map((point, index) => {
      return {
        latitude: point[0],
        longitude: point[1]
      }
    })
    return coords
  } catch (error) {
    return error
  }
}

const Map = () => {
  //initial location in state, takes an objoct, passing house
  const [coords, setCoords] = useState(House)

  useEffect(() => {
    getDirections('-45.03931,168.629384', '-45.031128,168.66109')
      .then(coords => setCoords(coords))
      .catch(err => console.log('Something went wrong'))
  }, [])
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} initialRegion={House}></MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})

export default Map
