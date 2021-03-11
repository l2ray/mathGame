import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import Result from './src/Components/Result.js';
import Choice from './src/Components/Choice.js';
class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			answer:0,
			corAnswer:-1,
			choices :[90,89,23,43,54,22],
			
			iterate:[1,2,3]
		}
	this.ans=[];
 this.choices = [];
	}

generateData = ()=>{

	let keys = [];
		let res = Math.random(1)*100;

		const flag = 2;//Math.floor(Math.random(2)*7);
		switch(flag){
			case 2:
				let firstNum = 0; 
					while(true){
						firstNum = Math.floor(Math.random(1)*100);
						if(firstNum <= res){
							break;
						}
					}
			const secondNum = Math.floor(res-firstNum);
			
			while(keys.length !== 6){
				index = Math.floor(Math.random()*7);
				if(!keys.includes(index))  keys.push(index);
			}
		

			for(var x = 0; x<=keys.length; x++){
				const key = keys.splice(Math.floor(Math.random()*keys.length),1);
				this.choices.push(Math.floor(Math.random(1)*75));	
			}
this.choices.push(firstNum);	
this.choices.push(secondNum);	
			break;

			case 3:

			break;

			case 4:

			break;
	
			case 5: 

			break;
		}

		this.setState({
			answer:Math.floor(res)
		});

		for(let i = 0; i<this.choices.length; i++){
			//curIndex = ;
			//currChoice1 = ;
			this.ans.push(this.choices.splice(Math.floor(Math.random()*this.choices.length),1));

		}
for(let i = 0; i<this.choices.length; i++){
			//curIndex = ;
			//currChoice1 = ;
			this.ans.push(this.choices.shift());

		}
this.ans.push(this.choices.shift());
}
	componentDidMount(){
this.generateData();
	}
reload = ()=>{
	this.generateData();
}
	 render(){
		
		//let choose = [];
		const items = this.state.iterate.map(item=>{
		//console.log(this.choices);
			//const itemss = this.choices[0];

//console.log("CurIndex "+curIndex+" : CurChoice "+currChoice1);
			
/*
			const curIndex2 = Math.floor(Math.random()*this.choices.length);
			const currChoice2 = this.choices.splice(curIndex2,1);
*/
			return (
				<View key={item.key} style={styles.row}>
						<TouchableOpacity style={styles.choiceButtons}>
							<Choice data={23} />
						</TouchableOpacity>
						<TouchableOpacity style={styles.choiceButtons}>
							<Choice data={43} />
						</TouchableOpacity>		
					</View>
				
			)
		})
		return(
			<View style={{flex:1,borderWidth:1,borderColor:"red"}}>
				<View  style={styles.layout} >
					<View style={styles.correctAnswer}>
						<Result   r={this.state.answer}/>
					</View>
				<View  style={styles.row}>
						<TouchableOpacity style={styles.choiceButtons}>
							<Choice data={this.ans[0]} />
						</TouchableOpacity>
						<TouchableOpacity style={styles.choiceButtons}>
							<Choice data={this.ans[1]} />
						</TouchableOpacity>		
					</View>

				<View  style={styles.row}>
						<TouchableOpacity style={styles.choiceButtons}>
							<Choice data={this.ans[2]} />
						</TouchableOpacity>
						<TouchableOpacity style={styles.choiceButtons}>
							<Choice data={this.ans[3]} />
						</TouchableOpacity>		
					</View>

				<View  style={styles.row}>
						<TouchableOpacity style={styles.choiceButtons}>
							<Choice data={this.ans[4]} />
						</TouchableOpacity>
						<TouchableOpacity style={styles.choiceButtons}>
							<Choice data={this.ans[5]} />
						</TouchableOpacity>		
					</View>
				</View>	


				<View >
					<TouchableOpacity onPress={this.generateData} style={styles.reload}>
						<Text style={styles.text}>Reload</Text>
					</TouchableOpacity>

				</View>

			</View>
		)
	}

}
const styles = StyleSheet.create({
	reload:{
	flex:1,
	width: '100%',
    	backgroundColor: '#EE5407',
    	justifyContent: 'center',
    	alignItems: 'center',
    	position: 'absolute', //Here is the trick
   	 bottom: 0, //Here is the trick
		backgroundColor:"orange",
		alignItems:'center'
	},
	correctAnswer:{
		paddingTop:20,
		paddingBottom:20,
		marginBottom:20,
		alignItems:'center',
		borderWidth:1,
		backgroundColor:'orange'
	},
	choiceButtons:{
		backgroundColor:"orange",
		padding:20,
		borderRadius:50
	},
	layout:{
		flex:1,
	//	alignItems:"center",
	},
	text:{
		fontSize:20
	},
	choice:{
		//paddingRight:20
	},
	row:{
		marginBottom:20,
		flexDirection:"row",
		justifyContent:"space-around"
	}
})
export default App;
