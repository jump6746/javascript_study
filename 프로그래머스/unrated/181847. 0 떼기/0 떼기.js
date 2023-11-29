function solution(n_str) {
    
    let str = [...n_str];
    
    while(str[0] === "0"){
        
        str.shift();
        
    }
    
    return str.join("");
    
}