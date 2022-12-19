import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as SecureStore from 'expo-secure-store'
import React from 'react';

export default function App() {
const [key,onChangeKey] = React.useState(''); 
const [value,onChangeValue] = React.useState(''); 
const [result,onChangeResult] = React.useState('(result)'); 

async function save(key,value){
  if(key.length === 0 || value.length === 0){
    alert("empty values not allowed") 
  }else{
    await SecureStore.setItemAsync(key,value)
    clearValues()
  }
}

async function getValueFor(key){
  if(key.length === 0){
    alert("empty key not allowed") 
   return
  }
 
  let result = await SecureStore.getItemAsync(key);
  if(result){
   onChangeResult(result);
  }else{
    clear
    alert('Invalid Key')
  }
}

function clearValues(){
  onChangeKey('')
  onChangeValue('')
  onChangeResult('')
}

  return (
    <View style={styles.container}>
      <Text style={styles.maintext}>Save a key/value </Text>
      
      <TextInput style={styles.inputField}
      placeholder={'Enter a key : '}
      onChangeText={text => onChangeKey(text)}
      value={key}
      />


<TextInput style={styles.inputField}
      placeholder={'Enter a value : '}
      onChangeText={text => onChangeValue(text)}
      value={value}
      />

<Button title='Save'onPress={() => {
  save(key,value)
}}
/>


<Text style={styles.maintext}>Enter your value</Text>


<TextInput style={styles.inputField}
      placeholder={'Enter a Key : '}
      onSubmitEditing={event => {
        getValueFor(event.nativeEvent.text);
        }}
      />

      
<Text style={styles.maintext}>{result}</Text>


<StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  maintext:{
    margin:20,
    fontSize:20,
    fontWeight:'bold',
    alignItems:'center',
    alignContent:'center',
    textAlign:'center'
  },
  inputField:{
    height:50,
    borderColor:'grey',
    borderWidth:0.5,
    borderRadius:20,
    margin:10,
    padding:10    
  }

});
