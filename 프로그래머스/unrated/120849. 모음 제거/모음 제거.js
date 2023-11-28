function solution(my_string) {
    let answer = '';
    
    let alphabet = ["a","e","i","o","u"];
    
    for(let alpha of alphabet){
        my_string = my_string.replaceAll(alpha, "");
    }
    
    answer += my_string;
    
    return answer;
}