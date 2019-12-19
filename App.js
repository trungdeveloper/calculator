import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ComponentA from './src/component/componentA/ComponentA';
import ComponentB from './src/component/componentB/ComponentB';
import ComponentC from './src/component/componentC/ComponentC';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      componentC: [
        [7, 8, 9, '-'],
        [4, 5, 6, '+'],
        [1, 2, 3, '='],
      ],
    };
  }

  getResult = value => {
    this.setState({
      result: `${this.state.result}${value}`,
    });
  };

  clear = () => {
    this.setState({
      result: '',
    });
  };

  calculate = () => {
    this.setState({
      result: eval(this.state.result),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ComponentA result={this.state.result} />
        <ComponentB getResult={this.getResult} clear={this.clear} />
        {this.state.componentC.map((line, i) => (
          <ComponentC
            getResult={this.getResult}
            show={line}
            key={i}
            calculate={i === 2 ? this.calculate : null}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
