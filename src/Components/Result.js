import React from 'react';
import {View,Text} from 'react-native';

const Result = (props)=>{
	return(
		<View>
			<Text style={{fontSize:50,color:"white",fontWeight:"bold",fontFamily:"serif"}}>{props.r}</Text>
		</View>
	)
}
export default Result;
