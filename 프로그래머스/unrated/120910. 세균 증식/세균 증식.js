function solution(n, t) {
    let answer = n;
    let count = 0;
    while(count < t){
        answer *= 2;
        count++;
    }
    return answer;
}