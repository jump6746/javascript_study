function solution(n) {
    let answer = 0;
    while(n > 0){
        answer += n % 10;
        n = (n - (n % 10)) / 10;        
    }
    return answer;
}