

import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import MapView from 'react-native-maps';


export default class UserMap extends React.Component {

  render() {
    return (
      <View style = {styles.mapContainer}>
        <MapView style = {styles.actualMap}
        initialRegion = {
          {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }
        }
        region = {this.props.userLocation}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 200
  },
  actualMap: {
    width: '100%',
    height: '100%'
  },
});
