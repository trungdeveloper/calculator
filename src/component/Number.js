import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Number extends Component {
  handleTouch = () => {
    this.props.calculate
      ? this.props.calculate()
      : this.props.getResult(
          this.props.number ? this.props.number : this.props.operator,
        );
  };
  render() {
    return (
      <View
        onTouchEnd={this.handleTouch}
        style={[
          styles.container,
          this.props.operator ? styles.operator : styles.numbers,
        ]}>
        <Text style={this.props.operator ? styles.operator : styles.number}>
          {this.props.operator ? this.props.operator : this.props.number}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: 'black',
    justifyContent: 'center',
  },
  operator: {
    backgroundColor: '#f2274f',
    textAlign: 'center',
    fontSize: 50,
  },
  number: {
    textAlign: 'center',
    fontSize: 50,
  },
});
