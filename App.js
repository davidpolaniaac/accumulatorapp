import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

export default class App extends React.Component {

  constructor(){
    super();
    this.state={
      number: 0
    }
  }

  increase = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  decrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Header title='Accumulator'/>
        <Body number={this.state.number}/>
        <Footer increase={this.increase} decrease={this.decrease} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
