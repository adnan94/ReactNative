import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
// import Icon from 'react-native-ico-material-design';
import {Image } from 'react-native';


var iconHeight = 26
var iconWidth = 26

export default class App extends React.Component {

  state = {
  screenText:"Press A AButton"
  }

  changeText = (text)=>{
  console.log(text+' Button has been pressed!')
  this.setState({
  screenText : text
  })
  }

  render (){
    return (
      <View style={styles.container}> 
     
      <View>
      <Text style={styles.heading}>{this.state.screenText}</Text>
        <StatusBar style="auto" />  
      </View>
     
     <View style={styles.NavContainer}>
     
     <View style={styles.NavItem}>
     
     <Pressable onPress={() => this.changeText('Favourites')}android_ripple={{borderless:true,radius:50}}>
     <Image style={styles.IconBehave} source={require('./assets/one.png')} />
     </Pressable>
     
     <Pressable onPress={() => this.changeText('Likes')} android_ripple={{borderless:true,radius:50}}>
     <Image style={styles.IconBehave} source={require('./assets/one.png')} />
     </Pressable>

     <Pressable onPress={() => this.changeText('Chats')}  android_ripple={{borderless:true,radius:50}}>
     <Image style={styles.IconBehave} source={require('./assets/one.png')} />
     </Pressable>

     <Pressable onPress={() => this.changeText('Settings')} android_ripple={{borderless:true,radius:50}}>
     <Image style={styles.IconBehave} source={require('./assets/one.png')} />
     </Pressable>

     </View>
     
     </View>
     
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
  },heading: {
    fontSize:20,
    color:'#990099',
    alignItems: 'center'
  },NavContainer: {
    position:'absolute',
    bottom:20,
    alignItems: 'center'
  },NavItem: {
    flexDirection:'row',
    backgroundColor:'#eee',
    width:'90%',
    justifyContent: 'space-evenly',
    borderRadius:40,
    padding:5
  },IconBehave:{
    padding:14,width: 30, height: 30
  }
});
