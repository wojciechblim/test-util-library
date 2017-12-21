export function flatten(arr){
	return arr.reduce(function(acc,item){
		return acc.concat(item);
	},[]);
}
