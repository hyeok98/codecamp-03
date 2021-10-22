// 신규 아이디 추천

const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  // 1단계 : 대문자를 -> 소문자로 치환
  new_id = new_id.toLowerCase();

  let result = "";
  // 2단계 : 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자 제거
  for (let i = 0; i < new_id.length; i++) {
    if (filter.includes(new_id[i])) {
      result += new_id[i];
    }
  }

  // 3단계 : .가 연속으로 들어오면 .으로 치환 (.. => .)
  while (result.includes("..")) {
    result = result.replace("..", ".");
  }

  // 4단계 : .가 처음이나 끝에 위치한다면 제거
  if (result[0] === ".") {
    result = result.substr(1);
  }

  function removeLastDot() {
    if (result[result.length - 1] === ".") {
      result = result.slice(0, result.length - 1);
    }
  }
  removeLastDot();

  // 5단계 : 빈 문자열이라면 "a" 대입
  if (result === "") {
    result = "a";
  }

  // 6단계 : 문자열 길이가 16 이상이면 15의 길이값을 가지는 문자열로 치환 (= 15 길이까지 자른다)
  //        제거 후에, 마침표가 끝에 위치하면 제거
  if (result.length >= 16) {
    result = result.slice(0, 15);
    removeLastDot();
  }

  // 7단계 : 문자열 길이가 2자 이하라면, 마지막 글자를 3이 될때까지 반복해서 추가
  if (result.length <= 2) {
    result = result.padEnd(3, result[result.length - 1]);
  }

  return result;
}

const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  // 1단계 : 대문자를 -> 소문자로 치환
  new_id = new_id.toLowerCase();

  // 2단계 : 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자 제거
  let result = new_id.split("").filter((str) => filter.includes(str));

  // 3단계 : .가 연속으로 들어오면 .으로 치환 (.. => .)
  result = result.filter(
    (str, i) => (str === "." && result[i + 1] !== ".") || str !== "."
  );

  // 4단계 : .가 처음이나 끝에 위치한다면 제거
  if (result[0] === ".") {
    result.splice(0, 1);
  }

  function removeLastDot() {
    if (result[result.length - 1] === ".") {
      result.splice(result.length - 1, 1);
    }
  }
  removeLastDot();

  // 5단계 : 빈 문자열이라면 "a" 대입
  if (result.length === 0) {
    result = ["a"];
  }

  // 6단계 : 문자열 길이가 16 이상이면 15의 길이값을 가지는 문자열로 치환 (= 15 길이까지 자른다)
  //        제거 후에, 마침표가 끝에 위치하면 제거
  if (result.length >= 16) {
    result = result.slice(0, 15);
    removeLastDot();
  }

  // 7단계 : 문자열 길이가 2자 이하라면, 마지막 글자를 3이 될때까지 반복해서 추가
  if (result.length <= 2) {
    const add = new Array(3 - result.length).fill(result[result.length - 1]);
    result = result.concat(add);
  }

  return result.join("");
}
