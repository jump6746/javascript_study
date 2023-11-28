function solution(array) {
    
    let answer = new Array(2);
    let index = 0;
    let min_num = -1;
    
    for(let val of array){
        if(val > min_num){
            answer[0] = val;
            answer[1] = index;
            min_num = val;
        }
        index++
    }
    
    return answer;
    
}