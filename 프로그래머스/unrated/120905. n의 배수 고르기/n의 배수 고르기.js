function solution(n, numlist) {
    let answer = [];
    let index = 0;
    
    for(let num of numlist){
        if(num % n === 0){
            answer[index] = num;
            index++;
        }
    }
    
    return answer;
}