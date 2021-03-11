import React from 'react';
import {View,Text} from 'react-native';

const Choice = (props)=>{
	return(
		<View>
			<Text style={{fontSize:40,fontFamily:'serif'}}>
				{props.data}
			</Text>
		</View>
	);
}

export default Choice;
