class Sorter{
	constructor(){
		this.arr = [];
		this.compare = (a,b) => a-b;
	}

	add(element){
		this.arr.push(element)
	}

	at(index){
		return this.arr[index]
	}

	get length(){
		return this.arr.length
	}

	toArray(){
		return this.arr.slice()
	}

	sort(indices){
		let subArray = indices.sort().map((index) => this.arr[index]);
		subArray.sort(this.compare);
		this.arr.reduce((previousValue, currentItem, index, arr) =>{
			if(indices.indexOf(index) > -1){
			arr[index] = subArray[indices.indexOf(index)]}
			return arr}, null);
		return this
	}
	
	setComparator(compareFunction){
		this.compare = compareFunction;
	}
}
module.exports = Sorter;
