function solution(my_string) {
    let answer = 0;
    
    for(let string of my_string){
        
        if(!isNaN(string)){
            answer += +string;
        }
        
    }
    
    return answer;
}