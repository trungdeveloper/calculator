import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Clear from './Clear';
import Number from '../Number';

export default class ComponentB extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Clear clear={this.props.clear} />
        <Number getResult={this.props.getResult} operator={'/'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // borderWidth: 0.5,
    borderColor: 'black',
  },
});
