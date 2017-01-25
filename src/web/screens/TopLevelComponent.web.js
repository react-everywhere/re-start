import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class Screen1 extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          This is the top level component of this app.
        </Text>
      </View>
    );
  }
}
