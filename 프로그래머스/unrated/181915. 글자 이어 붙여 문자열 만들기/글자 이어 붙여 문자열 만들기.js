function solution(my_string, index_list) {
    
    let answer = '';
    let string = [...my_string];
    
    for(let index of index_list){
        
        answer += string[index];
        
    }
    
    return answer;
}