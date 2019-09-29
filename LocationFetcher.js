

import React from 'react';
import {Button} from 'react-native';


export default class LocationFetcher extends React.Component {
  render() {
    return (
      <Button title = "Fetch Location" onPress = {this.props.onGetLocation} />
    );
  }
}
