// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.

function solution(seoul) {
  // let x = seoul.indexOf('Kim')  이한줄로 실행이된다.

  // kim 의 index 값을 담아주는 변수
  let x = 0;

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      x = i;

      // 반복문을 종료
      break;
    }
  }
  return "김서방은 " + x + "에 있다";
}

function solution(seoul) {
  // console.log(seoul)
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") return `김서방은 ${i}에 있다`;
  }
}

// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
//  예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.

function solution(s) {
  let answer = true;

  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i]) === true) {
      answer = false;

      break;
    }
  }
  return answer;
}

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  const answer =
    s
      .split("") //문자열을 배열로 만들어준다.
      .filter((str) => isNaN(str) === true).length === 0;

  return answer;
}

// 약수의 합
// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.

// 입출력 예
// n	return
// 12	28
// 5	6

// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer = answer + i;
    }
  }

  return answer;
}

function solution(n) {
  let answer = 0;

  const array = new Array(n).fill(1).forEach((num, index) => {
    n % (num + index) === 0 ? (answer = answer + (num + index)) : null;
  });

  return answer;
}
