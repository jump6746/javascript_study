function solution(my_string) {
    let answer = '';
    
    for(let string of my_string){
        if(string.charCodeAt() < 97){
            string = String.fromCharCode(string.charCodeAt() + 32);
        }
        else{
            string = String.fromCharCode(string.charCodeAt() - 32);  
        }
        answer += string;
    }
    
    return answer;
}