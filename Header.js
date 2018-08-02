import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
 
  render() {
    return (
      <View style={styles.container} >
        <Text> {this.props.title} </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '90EE90',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
