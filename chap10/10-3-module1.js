// export default function add(a, b) {
//   return a + b;
// }

// // export "default" = import시 이름 바꿔도 상관 안한다는 의미.
// // 한 파일 내에서 두 가지 default는 불가능.
// // default는 가지고 올때 {}가 필요 없지만, 다른 것은 {print}이렇게 가져와야함.

// export function print() {
//   console.log('print');
// }

export function add(a, b) {
  return a + b;
}

export function print() {
  console.log('print');
}

export const number = 10;
