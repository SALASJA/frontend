
import {Component} from "react";
import "./TodoList.css";

class TodoList extends Component {
	constructor(props){
		super(props);
		this.timerId = undefined;
		this.state = {value: "", id_count: 0, todos: new Map()};
		this.changeHandler = this.changeHandler.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	componentWillUnmount(){
		clearInterval(this.timerId);
	}
	
	
	componentDidMount(){
		this.read();
	}
	
	
	read(){
		fetch(`/api/read`)
		.then((res) => res.json())
		.then((res) => {
			//console.log(res);
			if(res.length > 0){
				var mappings = new Map()
				var max = res[0].id;
				mappings.set(res[0].id, res[0].task);
				for(var i = 1; i < res.length; i++){
					mappings.set(res[i].id, res[i].task);
					if(max < res[i].id){
						max = res[i].id;
					}
				}
				this.setState({id_count: max + 1, todos: mappings});
			}
		}, (err) => console.log(err));
	}
	
	changeHandler(event) {
		this.setState({value: event.target.value});
	}
	
	
	create_task(){
		fetch(`/api/add`, {
				method: "POST", 
				headers: {
					'Content-Type' : 'application/json'
				},
				body: JSON.stringify([this.state.id_count, this.state.value])
		})
		.then((res) => res.json())
		.then((res) => console.log(res), (err) => console.log(err));
	
		this.state.todos.set(this.state.id_count, this.state.value);
	
		console.log(this.state.todos);
		this.setState((state,props) => ({todos : state.todos, id_count: state.id_count + 1}));
	}
	
	
	delete_task(event){
		var size = this.state.todos.size;
		var ids = [];
		//console.log(event);
		for(var i = 0; i < size; i++){
			if(event.target[i].checked){
				ids.push(parseInt(event.target[i].value));
			}
		}
		
		for(var i = 0; i < ids.length; i++){
			this.state.todos.delete(ids[i]);
		}
		
		
		if(ids.length > 0){
			fetch(`/api/delete`, {
					method: "DELETE", 
					headers: {
						'Content-Type' : 'application/json'
					},
					body: JSON.stringify(ids)
			})
			.then((res) => res.json())
			.then((res) => console.log(res), (err) => console.log(err));
			this.setState((state,props) => ({todos : state.todos}));
		}
	}
	
	
	handleSubmit(event){
		var submitter = event.nativeEvent.submitter.name;
		if( submitter == "add" && this.state.value != ""){
			this.create_task();	
		}
		else if(submitter == "delete"){
			this.delete_task(event);
		}
		event.preventDefault();
	}
	
	
	render(){
		var checkboxes = [];
		for(var i of this.state.todos.keys()){
			checkboxes.push(<label key={i}><input type="checkbox" value={i} name={this.state.todos.get(i)}/>{this.state.todos.get(i)}</label>);
		}
		return(
			<section className="TodoList">
				<p>This is a CRD todolist that anyone can see live, treat this like any normal chat app</p>
				<form onSubmit={this.handleSubmit} className="TodoList-form">
					<div className="TodoList-todolist">
							{checkboxes}
					</div>
					<input type="text" placeholder="subject" className="TodoList-reasonInput" name="reason" value={this.state.value} onChange={this.changeHandler}/>
					<div>
						<input type="submit" className="TodoList-button" name="add" value="add"/>
						<input type="submit" className="TodoList-button" name="delete" value="delete"/>
					</div>
				</form>
			</section>
		);
	}
}

export default TodoList;