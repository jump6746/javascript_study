function solution(age) {
    
    let answer = [];
    let pro_962 = ["a","b","c","d","e","f","g","h","i","j"];
    
    while(age > 0){
        
        answer.unshift(pro_962[age % 10]);
        age = (age - (age % 10)) / 10;
        
    }
    
    return answer.join("");
}