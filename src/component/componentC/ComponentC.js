import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Number from '../Number';

export default class ComponentC extends Component {
  render() {
    const show = this.props.show;
    return (
      <View style={styles.container}>
        {show.map((e, i) => (
          <Number
            calculate={
              i === 3 && this.props.calculate ? this.props.calculate : null
            }
            getResult={this.props.getResult ? this.props.getResult : null}
            key={e}
            number={i < 3 ? e : null}
            operator={i === 3 ? e : null}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'black',
  },
});
