export function dropRight(num,arr){
	return arr.filter(function(item, index){
		if(index<(arr.length-num)) return item;
	});
}
