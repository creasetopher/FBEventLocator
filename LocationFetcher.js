

import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

// {/*  */}
export default class LocationFetcher extends React.Component {
  b = () => {
    console.log('b pressed');
  }

  render() {
    return (
      <Button title = "Fetch Location" onPress = {this.props.onGetLocation} />
    );
  }
}
