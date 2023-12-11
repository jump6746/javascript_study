function solution(array, height) {
    
    return array.reduce((acc, cur) => cur > height ? ++acc : acc ,0);

}
