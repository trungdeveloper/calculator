import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Clear extends Component {
  handleTouch = () => {
    this.props.clear();
  };
  render() {
    return (
      <View style={styles.container} onTouchEnd={this.handleTouch}>
        <Text style={styles.clear}>CLEAR</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    borderWidth: 0.5,
  },
  clear: {
    fontSize: 40,
    color: '#515251',
    textAlign: 'center',
  },
});
