
function solution(n) {
    const num = n - 1;
    
    for(let i = 2; i <= num; i++){
        if(num % i == 0){
            return i;
        }
    }        
}