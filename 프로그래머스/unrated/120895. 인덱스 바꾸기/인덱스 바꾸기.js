function solution(my_string, num1, num2) {
    let answer = '';
    let splitStr = [...my_string];
    let temp;
    
    temp = splitStr[num1];
    splitStr[num1] = splitStr[num2];
    splitStr[num2] = temp;
    
    answer = splitStr.join('');

    return answer;
}