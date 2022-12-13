import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import SampleComponent from './components/FeatureComponent';

export default class App extends React.Component {
 
  state={
    value:'Tap Me',
    value1:'Tap Me',
  }

  updateState = () => {
    this.setState({value:'Hello Mate'})
  }
  
  updateState1 = () => {
    this.setState({value1:'Code Palace'})
  }

  render(){
  return (
    <View style={styles.container}>
      <SampleComponent value={this.state.value} doSomeThing={this.updateState}/>
      <SampleComponent value={this.state.value1} doSomeThing={this.updateState1}/>
      <StatusBar style="auto" />
    </View> 
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
