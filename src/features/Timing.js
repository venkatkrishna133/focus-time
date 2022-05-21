import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../components/RoundedButton'
import {spacing} from '../utils/sizes'

export const Timing =({onChangeTime})=>{

return(
 <>
 <View style={styles.timeout}>

<RoundedButton  size={75} title='10' onPress={()=>onChangeTime(10)}/>




</View>
<View style={styles.timeout}>
<RoundedButton size={75} title='15' onPress={()=>onChangeTime(15)}/>
</View>
<View  style={styles.timeout}>
<RoundedButton size={75} title='20' onPress={()=>onChangeTime(20)}/>
</View>
 </>
)
}

const styles=StyleSheet.create(
{
    timeout:{
    felex:1,
    paddingLeft:spacing.xl,
  

  },
}
)
