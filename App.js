//react-native run-ios
//npm start

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import LocationFetcher from './LocationFetcher';
import Geolocation from '@react-native-community/geolocation';
import UserMap from './UserMap';
import FBLoginButton from './FBLoginButton';


export default class App extends React.Component {
  state = {
    userLocation: null
  }

  locationFetcherHandler = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          userLocation: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
          }
        });
      },
      error => {
        console.log("fail");
      }
    );
  }

  render() {

    return (

      <View style = {styles.mainView}>
        {/* <View style = {styles.locButton}>  */}
        <View style = {styles.locButton}>
          <LocationFetcher onGetLocation = {this.locationFetcherHandler} />
        {/* </View> */}
        </View>
        <UserMap userLocation = {this.state.userLocation}/>

        <View style = {styles.fbLoginContainer}>
          <FBLoginButton/>
        </View>

      </View>


    )
  }
}

const styles = StyleSheet.create(
  {
    mainView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    fbLoginContainer: {
      flex: 1,
      marginTop: 20,
      marginBottom: 50,
      marginRight: 30
    },

    locButton: {
      flex: 1,
      marginTop: 80,
      marginBottom: 10
    }
  }
);

AppRegistry.registerComponent('ChrisApp', () => ChrisApp);
