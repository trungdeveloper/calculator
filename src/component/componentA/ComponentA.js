import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ComponentA extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.3,
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: '#433336',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'right',
    fontSize: 70,
    padding: 15,
  },
});
