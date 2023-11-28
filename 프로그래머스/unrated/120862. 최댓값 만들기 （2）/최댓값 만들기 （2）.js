function solution(numbers) {
    let answer = 0;
    
    numbers.sort(function(a,b){ return a - b;});
    
    if((numbers[0] * numbers[1]) > (numbers.at(-1) * numbers.at(-2))){
        answer = numbers[0] * numbers[1];
    }else{
        answer = numbers.at(-1) * numbers.at(-2);
    } 
    
    return answer;
}