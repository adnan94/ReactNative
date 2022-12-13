import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

state={
  data:{'activity':'Loading...'}
}

getJsonData = () => {

  fetch('https://www.boredapi.com/api/activity/',
  {method:'GET'}).then((response) => response.json())
  
  .then((responseJson) =>{ 
    console.log(responseJson);
    
    this.setState({
    data:responseJson
    })

  })
  .catch((error) =>{
  console.error(error)
  });

}

componentDidMount = () =>{ //this function called when project started
  this.getJsonData()
}
 
  render(){
  return (
    <View style={styles.container}>
      <Text style={{margin:10 , fontSize:30, color:'#990099'}}>Suggestions</Text>
      <Text style={{margin:10 , fontSize:40 ,textAlign: 'center'} } selectable={true}>{this.state.data['activity']}</Text>
      <Text style={{margin:10 , fontSize:20}}>{'Peoples : '+this.state.data['participants']}</Text>
      <Text style={{margin:10 , fontSize:20}}>{"Price : "+this.state.data['price']}</Text>
    
    <View style={{position:'absolute',bottom:20,width:'50%'}}>
    <Button onPress={this.getJsonData} title="Press Me"/>
    </View>
    
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
