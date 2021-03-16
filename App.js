import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import Result from './src/Components/Result.js';
import Choice from './src/Components/Choice.js';
class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			answer:0,
			corAnswer:0,
			choices :[90,89,23,43,54,22],
			iterate:[1,2,3],
			showAlert: true,
			ans : []
		}
	this.ans=[];
 this.choices = [];
	}
	showAlert = () => {
		this.setState({
		  showAlert: true
		});
	  };
	 
	  hideAlert = () => {
		this.setState({
		  showAlert: false
		});
	  };
	computeAns = async(input)=>{
		if(input > this.state.answer){
			console.log("Wrong Answer")
			/// Alert to be implemented later.
			this.generateData();
		}
		else{
			const oldAns = Number(this.state.corAnswer);
			const curVal = Number(input);
			const newAns = oldAns+curVal;
			console.log("============="+newAns)
			await this.setState({corAnswer:newAns});
			if(this.state.corAnswer> this.state.answer){
					/// Alert to be implemented later.
				console.log("sorry you get it wrong.");
				await this.setState({corAnswer:0});
				this.generateData();
			}
			else if(this.state.corAnswer== this.state.answer){
				/// Alert to be implemented later.
				await this.setState({corAnswer:0}); 
				console.log(`Correct Answer`);
				this.generateData();
			}

			// const newAns = this.state.corAnswer + input;
			// console.log("New Answer => "+newAns);

			// if(newAns > this.state.answer){
			// 	console.log(newAns > this.state.answer);
			// 	console.log(this.state.answer);
			// 	console.log("Wrong Answer. Please Try again");
			// }
			// else{
			// 	this.setState({
			// 		corAnswer : newAns
			// 	});
			// 	console.log("ANSWER STATE IS "+this.state.answer)
			// }
		}
	
	}

generateData = ()=>{//////////////////////////////
	let keys = [];
	this.ans=[];
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
				const num = Math.floor(Math.random(1)*75);
				this.choices.push(num <= 9 ? "0"+num : num);	
			}
this.choices.push(firstNum <= 9 ? "0"+firstNum : firstNum);	
this.choices.push(secondNum <= 9 ? "0"+secondNum : secondNum);	// 



			break;

			case 3:

			break;

			case 4:

			break;
	
			case 5: 

			break;
		}

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

//console.log(this.ans);
// this.setState({
// 	//answer:Math.floor(res),
// 	choices:this.ans
// });
this.setState({
	answer:Math.floor(res),
	ans:this.ans //[Math.random(),3,]//
});
}
	componentDidMount(){
		this.generateData();
	}
reload = ()=>{
	this.generateData();
}
	 render(){
		
		//let choose = [];

		return(
			<View style={{flex:1,borderWidth:1,borderColor:"red"}}>
				<View  style={styles.layout} >
					<View style={styles.correctAnswer}>
						<Result   r={this.state.answer}/>
					</View>
				<View  style={styles.row}>
						<TouchableOpacity onPress={()=>{this.computeAns(this.state.ans[0])}} style={styles.choiceButtons}>
							<Choice data={this.state.ans[0]} />
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{this.computeAns(this.state.ans[1])}} style={styles.choiceButtons}>
							<Choice data={this.state.ans[1]} />
						</TouchableOpacity>		
					</View>

				<View  style={styles.row}>
						<TouchableOpacity onPress={()=>{this.computeAns(this.state.ans[2])}} style={styles.choiceButtons}>
							<Choice data={this.state.ans[2]} />
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{this.computeAns(this.state.ans[3])}} style={styles.choiceButtons}>
							<Choice data={this.state.ans[3]} />
						</TouchableOpacity>		
					</View>

				<View  style={styles.row}>
						<TouchableOpacity onPress={()=>{this.computeAns(this.state.ans[4])}} style={styles.choiceButtons}>
							<Choice data={this.state.ans[4]} />
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{this.computeAns(this.state.ans[5])}} style={styles.choiceButtons}>
							<Choice data={this.state.ans[5]} />
						</TouchableOpacity>		
					</View>
				</View>	


				<View >
					<TouchableOpacity onPress={this.reload} style={styles.reload}>
						<Text style={styles.text}>Reload</Text>
					</TouchableOpacity>

				</View>

<AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          title="AwesomeAlert"
          message="I have a message for you!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, delete it"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
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
