function solution(rsp) {
    let answer = '';
    
    for(let n of rsp){
        answer += rsp_rule(n);
    }
    
    
    function rsp_rule(n){
        switch(n){
                case("2"): return "0"; break;
                case("0"): return "5"; break;
                case("5"): return "2"; break;
        }
    }    
    
    return answer;
}