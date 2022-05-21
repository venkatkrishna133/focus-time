import React,{useState} from "react";
import { View, Text,StyleSheet,Vibration } from "react-native";
import {Countdown} from '../components/CountDown';
import {ProgressBar} from 'react-native-paper';
import {colors} from '../utils/colors';
import { useKeepAwake } from 'expo-keep-awake';
import {RoundedButton} from '../components/RoundedButton';
import {spacing} from '../utils/sizes';
import {Timing} from './Timing';

   const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    5 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    5 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    5 * ONE_SECOND_IN_MS
    
  ];

export const Timer=({focusSubject,clearSubject,onTimerEnd})=>{

  useKeepAwake();
  const [isStarted,setIsStarted]=useState(false)
  const [progress,setProgress]=useState(1)
  const [minutes,setMinutes]=useState(0.1)

  const onEnd=(reset)=>{
   Vibration.vibrate(PATTERN);
   setIsStarted(false);
   setProgress(1);
   reset();
   onTimerEnd(focusSubject);
  }


  return(
  
  <View style={styles.container}>
  <View style={styles.countdown}>
  <Countdown minutes={minutes} isPaused={!isStarted} onProgress={setProgress}
   onEnd={onEnd}/>

  <View style={{paddingTop:spacing.sm }}>
  <Text style={styles.title}>Focus on:</Text>
  <Text style={styles.task}>{focusSubject}</Text>
  </View>

  <View style={{paddingTop:spacing.xxxl}}>
  <ProgressBar 
  progress={progress}
  color={colors.progress}
  style={{height:spacing.sm}}/></View>

  </View>

    <View style={styles.timewrapper}>

    <Timing onChangeTime={setMinutes}/>

    </View>


  <View style={styles.buttonWrapper}>
  {!isStarted && 
  (<RoundedButton title='start' onPress={()=>setIsStarted(true)}/>
  )}
  {isStarted && 
  (<RoundedButton title='pause' onPress={()=>setIsStarted(false)}/>
  )}
  </View>
  <View style={styles.clearSubjectWrapper}>
  <RoundedButton size={50} title='-' onPress={clearSubject}/>
  </View>

  
  </View>
)

}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.blue,
    
  },
  countdown:{
    flex:0.5,
    padding:50,
    backgroundColor:colors.blue,
    alignContent:"center",
    justifyContent:"center",
  },
  timewrapper:{
    flex:0.1,
    paddingTop:spacing.md,
    paddingRight:spacing.xl,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  clearSubjectWrapper:{
    alignItems:"center",
   
  },
  buttonWrapper:{
    flex:0.3,
    paddingTop:spacing.xl,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",

  },
  title:{
    color:colors.white,
    textAlign:"center",
    fontWeight:"bold",
  },task:{
    color:colors.white,
    textAlign:"center",
  }
})
