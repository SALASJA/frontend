class TowerOfHanoi {
	constructor(disks){
		if(disks > 6){
			disks = 6;
		}
		if(disks < 1){
			disks = 1;
		}
		this.disks = disks;
		this.solution = this.getSolution(this.disks, "L", "R", "C");
		this.step_index = 0;
		this.towers = new Map();
		var disk_array = [];
		var i = disks ;
		while(i >= 1){
			disk_array.push(i);
			i = i - 1;
		}
		this.towers.set("L",disk_array);
		this.towers.set("C",[]);
		this.towers.set("R",[]);
	}
	
	
	getSolution(numDiscs, from, to, middle){
		if(numDiscs <= 1){
			return [[from,to]];
		}
		
		var left_result = this.getSolution(numDiscs - 1, from, middle, to);
		var mid_result = [[from,to]];
		var right_result = this.getSolution(numDiscs - 1, middle, to, from);
		return left_result.concat(mid_result).concat(right_result);
	}
	
	getStep(){
		if (this.step_index == this.solution.length){
			this.step_index = 0; //stops process
			return undefined;
		}
		
		var step = this.solution[this.step_index];
		this.step_index++;
		return step;
	}
	
	isSolved(){
		var tower = this.towers.get("R");
		
		var total = 0;
		for(var i = 0; i < tower.length; i++){
			total = total + tower[i];
		}
		return total === (this.disks  * (this.disks + 1))/2;
	}
	
	isLegal(from, to){
		var from_stack = this.towers.get(from);
		var to_stack = this.towers.get(to);
		if(from_stack.length == 0){
			return false;
		}
		
		if (to_stack.length == 0){
			return true;
		} 
		
		var top_of_from_stack = from_stack[from_stack.length - 1];
		var top_of_to_stack = to_stack[to_stack.length - 1];
		if(top_of_from_stack > top_of_to_stack) {
			return false;
		}
		
		return true;
	}
	
	operation(from,to){
		if(!this.isLegal(from,to)){
			console.log(`${from} > ${to} is an illegal operation`);
			return;
		}
		var from_stack = this.towers.get(from);
		var to_stack = this.towers.get(to);
		var value = from_stack.pop();
		to_stack.push(value);
	}
	
	reset(){
		var disk_array = [];
		var i = this.disks ;
		while(i >= 1){
			disk_array.push(i);
			i = i - 1;
		}
		this.towers.set("L",disk_array);
		this.towers.set("C",[]);
		this.towers.set("R",[]);
		this.step_index = 0;
	}
	
	
	getState(){
		return this.towers;
	}
	
	getNumDisks(){
		return this.disks;
	}
}


export default TowerOfHanoi;