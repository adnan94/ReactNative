import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const SampleComponent = (props) => {
    return(
    <Text onPress={props.doSomeThing} style={style.text}>
        {props.value}
    </Text>
    )
}

const style = StyleSheet.create({
    text:{
        fontSize:26,
        color:'black',
        fontFamily:'Roboto',
        margin:20
    },
});

export default SampleComponent