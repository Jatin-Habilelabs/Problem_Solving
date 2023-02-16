const palindrome=(checkString)=>{
    const strLength=(checkString.length)/2;
    let lastIndex=checkString.length-1;
    for(var i=0;i<strLength;i++){
        if(checkString[i]!==checkString[lastIndex]){
            return false;
        }
        
            lastIndex--;
        
    }
    return true;
}
console.log(palindrome('habilelabs'));