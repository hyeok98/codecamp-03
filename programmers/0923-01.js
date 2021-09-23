// 하샤드 수
// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.
// 입출력 예
// arr	return
// 10	true
// 12	true
// 11	false
// 13	false
// 입출력 예 설명
// 입출력 예 #1
// 10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.

// 입출력 예 #2
// 12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.

// 입출력 예 #3
// 11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.

function solution(x) {
  let sum = 0;
  let arr = String(x).split("");

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  if (x % sum == 0) return true;
  return false;
}

function solution(x) {
  //숫자를 문자열 형태로 변환
  x = x.toString();

  //총합을 담아주는 변수
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    //다시 숫자 타입 으로변환
    sum += Number(x[i]);
  }

  return x % sum === 0 ? true : false;
}