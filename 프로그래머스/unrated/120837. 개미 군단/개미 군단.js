function solution(hp) {
    let answer = 0;
    let index = 0;
    let ant = [5, 3, 1];
    
    while(hp > 0){
        
        if(hp / ant[index] > 0){
            
            answer += parseInt(hp / ant[index]);
            hp = (hp % ant[index]);
            index++;
            
        } 
        
    }
    
    return answer;
}