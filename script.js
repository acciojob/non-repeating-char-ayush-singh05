function firstNonRepeatedChar(str) {
 // Write your code here
	let obj = {};
for(let i = 0; i < str.length; i++){
    if(obj[str[i]] == undefined){
        obj[str[i]] = 1;
    }else {
        obj[str[i]]++;
    }
}
console.log(obj);
for(let key in obj){
    if(obj[key] == 1){
        return key;
    }
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
