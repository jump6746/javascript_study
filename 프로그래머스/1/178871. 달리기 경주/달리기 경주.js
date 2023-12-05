/* 

해설진이 이름을 부르면 추월한 것

현재 등수 배열 : players

해설진이 부른 이름을 담은 문자열 배열 : callings

경주가 끝났을 때 선수들의 이름을 등수대로 배열로 return

*/


function solution(players, callings) {
    const playerMap = {};
  
    // calling 원소들의 idx를 미리 구해서 저장
    for (let i = 0; i < players.length; i++) {
        playerMap[players[i]] = i;
    }

    for (let i = 0; i < callings.length; i++) {
        const idx = playerMap[callings[i]];
        const temp = players[idx-1];
      
        // 해당 idx와 이전 idx의 원소를 swap
        players[idx-1] = callings[i];
        players[idx] = temp;
      
        // map의 idx도 갱신
        playerMap[callings[i]] = idx - 1;
        playerMap[temp] = idx;
    }
    
    return players;
}


