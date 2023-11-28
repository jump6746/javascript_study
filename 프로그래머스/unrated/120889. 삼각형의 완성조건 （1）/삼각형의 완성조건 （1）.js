function solution(sides) {
    let answer = 2;
    
    sides.sort(function(a , b){
        return a - b;
    })
    
    if(sides[2] < (sides[0] + sides[1])){
        answer = 1;
    }
    
    return answer;
}