// n의 배수 고르기
// function solution(n, numlist) {
//     return numlist.filter((v) => v % n === 0);
//   }
//   console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));
//   console.log(solution(5, [1, 9, 3, 10, 13, 5]));
//   console.log(solution(12, [2, 100, 120, 600, 12, 12]));

// 암호 해독
function solution(cipher, code) {
  const arr = cipher.split("");

  let ciperArr = [];
  for (let i = 1; i <= arr.length / code; i++) {
    ciperArr.push(arr[code * i - 1]);
  }
  return ciperArr.join("");
}
console.log(solution("dfjardstddetckdaccccdegk", 4)); //a->3 t-> tack
console.log(solution("pfqallllabwaoclk", 2));
