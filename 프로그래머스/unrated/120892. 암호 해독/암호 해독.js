function solution(cipher, code) {
    let answer = '';
    let count = code;
    
    while(count <= cipher.length){
        answer += cipher.charAt(count - 1);
        count += code;    
    }
    
    return answer;
}