// n의 배수 고르기
// function solution(n, numlist) {
//     return numlist.filter((v) => v % n === 0);
//   }
//   console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));
//   console.log(solution(5, [1, 9, 3, 10, 13, 5]));
//   console.log(solution(12, [2, 100, 120, 600, 12, 12]));

// 암호 해독
// function solution(cipher, code) {
//     const arr = cipher.split("");

//     let ciperArr = [];
//     for (let i = 1; i <= arr.length / code; i++) {
//       ciperArr.push(arr[code * i - 1]);
//     }
//     return ciperArr.join("");
//   }
//   console.log(solution("dfjardstddetckdaccccdegk", 4)); //a->3 t-> tack
//   console.log(solution("pfqallllabwaoclk", 2));

// 중복된 문자 제거
// function solution(my_string) {
//   const duplication = my_string.split("").filter((v) => v);
//   return [...new Set(duplication)].join("");
// }
// console.log(solution("people"));

// A로 B 만들기
// function solution(before, after) {
//   function Sorted(comparisonString) {
//     return ggg.split("").sort().join("");
//   }

//   if (Sorted(before) === Sorted(after)) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// console.log(solution("olleh", "hello"));
// console.log(solution("allpe", "apple"));

// 세균 증식
// function solution(n, t) {
//   return n * 2 ** t;
// }
// console.log(solution(2, 10));
// console.log(solution(7, 15));

// 제곱수 판별하기
// function solution(n) {
//   return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
// }

// console.log(solution(144));
// console.log(solution(976));

// 숫자 찾기
// function solution(num, k) {
//   const search = (num + "")
//     .split("")
//     .map((v) => Number(v))
//     .indexOf(k);

//   if (search > -1) {
//     return search + 1;
//   } else {
//     return -1;
//   }
// }
// console.log(solution(999, 9));
// console.log(solution(232443, 4));
// console.log(solution(123456, 7));

// 편지
// function solution(message) {
//   return message.split("").length * 2;
// }
// console.log(solution("happy birthday!"));
// console.log(solution("I love you~"));

// 약수 구하기

// function solution(n) {
//   var answer = [];
//   for (let i = 1; i <= n; i++) {
//     answer.push(i);
//   }
//   return answer.filter((value) => n % value === 0);
// }
// console.log(solution(24));
// console.log(solution(29));

// 가장 큰 수 찾기
// function solution(array) {
//   const maxValue = Math.max(...array);
//   return [maxValue, array.indexOf(maxValue)];
// }
// console.log(solution([1, 8, 3]));
// console.log(solution([9, 10, 11, 8]));

// function solution(order) {
//   const number = `${order}`.split("").map((v) => parseInt(v));
//   let count = 0;
//   number.map((v) => {
//     if (v === 3 || v === 6 || v === 9) {
//       count = count + 1;
//     }
//   });
//   return count;
// }

// console.log(solution(3));
// console.log(solution(29423));

// 문자열 정렬하기 (2)
// function solution(my_string) {
//   return my_string.toLowerCase().split("").sort().join("");
// }

// console.log(solution("Bcad"));
// console.log(solution("heLLo"));
// console.log(solution("Python"));

// 가까운 수
// function solution(array, n) {
//   const aaa = [...array.sort().map((v) => Math.abs(v - n))];

//   return array[aaa.indexOf(Math.min(...aaa))];
// }
// console.log(solution([33, 10, 28], 20));
// console.log(solution([10, 11, 12], 13));
// console.log(solution([1, -1], 0));

// function solution(array, n) {
//   return array[
//     [...array.sort().map((v) => Math.abs(v - n))].indexOf(Math.min(...array.sort().map((v) => Math.abs(v - n))))
//   ];
// }
// console.log(solution([33, 10, 28], 20));
// console.log(solution([10, 11, 12], 13));
// console.log(solution([1, -1], 0));

// 한 번만 등장한 문자
// function solution(s) {
//   const arrString = s.split("").sort();
//   const result = {};
//   arrString.forEach((x) => {
//     result[x] = (result[x] || 0) + 1;
//   });
//   return Object.keys(result)
//     .filter((key) => result[key] === 1)
//     .join("");
// }

// console.log(solution("abcabcadc"));
// console.log(solution("abdc"));
// console.log(solution("hello"));

// 이진수 더하기
// function solution(bin1, bin2) {
//   return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
// }
// console.log(solution("10", "11"));
// console.log(solution("1001", "1111"));

// 7의 갯수
// function solution(array) {
//   return array
//     .join("")
//     .split("")
//     .filter((v) => v === "7").length;
// }
// console.log(solution([7, 77, 17]));
// console.log(solution([10, 29]));

// k의 개수

function solution(i, j, k) {
  let arr = [];
  for (let n = i; n <= j; n++) {
    arr.push(n);
  }

  return arr
    .join("")
    .split("")
    .filter((v) => Number(v) === k).length;
}

console.log(solution(1, 13, 1));
console.log(solution(10, 50, 5));
console.log(solution(3, 10, 2));
