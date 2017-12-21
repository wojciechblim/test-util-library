export function drop(num,arr){
	return arr.filter(function(item,index){
		if(index>=num) return item;
	})
}
