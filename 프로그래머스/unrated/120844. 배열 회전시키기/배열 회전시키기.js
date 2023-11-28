function solution(numbers, direction) {
   
    if(direction === "left"){
        numbers.push(numbers.shift());
    }else{
        numbers.unshift(numbers.pop());
    }
    
    let answer = numbers;
    
    return answer;
}