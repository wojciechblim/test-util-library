export function compact(arr){
 return arr.filter(function(item){
	if(!!item) return item;
 })
}
