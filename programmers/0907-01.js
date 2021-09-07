// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.


function solution(num) {
    var answer = '';
    return (num % 2 === 0? "Even": "Odd")
    
    
}

function solution(num) {
    var answer = '';
    if(num % 2 === 0 ) {
        return answer='Even';
    }else {
        return answer = 'Odd';
    }
    
}

// 평균 구하기
// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

function solution(arr) {
    var answer = 0;
    for(let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    return answer/arr.length;
    
}

// 가운데 글자 가져오기
// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
    //가운데 있는 글자의 인덱스 값을 저장
    const half = Math.floor(s.length /2);
    
    if(s.length % 2 === 0) {
        //짝수일경우
        return s[half-1] + s[half];
    }else {
        //홀수일경우
        return s[half];
    }
    
   
  
}


function solution(s) {
    //가운데 있는 글자의 인덱스 값을 저장
    const half = Math.floor(s.length /2);
    
    return s.length % 2 ===0 ? s[half-1] + s[half] : s[half]
    
}



