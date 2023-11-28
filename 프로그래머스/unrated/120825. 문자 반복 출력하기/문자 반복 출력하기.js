function solution(my_string, n) {
    let answer = '';
    
    for(let string of my_string){
        for(let i = 0; i < n; i++){
            answer += string
        }    
    }
    
    return answer;
}