import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default class Footer extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Button title='Increase' onPress={this.props.increase}/>
        <Button title='Decrease' onPress={this.props.decrease}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '00FF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
