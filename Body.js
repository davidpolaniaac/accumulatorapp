import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> {this.props.number} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor: '#32CD32',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
