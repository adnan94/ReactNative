import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , ToastAndroid,TouchableOpacity , Button} from 'react-native';

export default class App extends React.Component {

state = {
  value: 0,
  total_taps: 0
}

incrementValue = () =>{
  this.setState({
  value:this.state.value+1,
  total_taps:this.state.total_taps+1
  })
  }

  
decrementValue = () =>{
  this.setState({
  value:this.state.value-1,
  total_taps:this.state.total_taps+1
  })
  }


render (){
  const showToast = () =>{
    console.log("Toast clicked")
    ToastAndroid.show("Button Clicked",ToastAndroid.SHORT,ToastAndroid.BOTTOM)
    }
    
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>This my first react native app</Text>
     
      <Text style={styles.subheading}>Toast Button</Text>  
     
      <StatusBar style="auto" />
     
      <TouchableOpacity style={styles.button} onPress={() => showToast()}>
      <Text style={{color:"#d9d9d9"}}>Toast Button</Text>   
      </TouchableOpacity>

      <Text style={{fontSize:30}}>{this.state.value}</Text>
      <Text style={{fontSize:20}}>{"Total Taps : "+this.state.total_taps}</Text>

     
      <View style={{flexDirection:'row'}}>    
      <Button onPress={this.incrementValue} title = "Increment"></Button>
      <Text> </Text>
      <Button onPress={this.decrementValue} title = "Decrement"></Button>
      </View>

    </View>
  );

}



}






const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  heading:{
    padding:10,
    fontSize:25,
    color:"#990099"
  },

  subheading:{
    padding:10,  fontSize:25,
    color:"#000"
  },
  
  button:{
    borderRadius:20,
    fontSize:20,
    backgroundColor:"#147EFC",
    width:150,
    height:50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
