import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../components/RoundedButton'
import {fontSizes,spacing} from '../utils/sizes';

export const Focus=({addSubject})=>{
  const [subject,setSubject]=useState(null)
  return(
    <View style={styles.container}>
    <View style={styles.text}><TextInput style={styles.textinput} onChangeText={setSubject} label='Enter to Go on ..........' />
    <View style={styles.button}><RoundedButton size={50} title="+" onPress={()=>{addSubject(subject)}} /></View></View></View>
  )
}
const styles=StyleSheet.create({
  container:{
    
  },
  text:{
  
    padding:40,
    flexDirection:"row",
   
  },
  textinput:{
    flex:1,
    marginRight:spacing.md,
  },
  button:{
    justifyContent:"center",
    
  },
})