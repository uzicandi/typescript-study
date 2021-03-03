console.log(this);

function simpleFunc() {
  console.log(this);
}

simpleFunc(); // window.simpleFunc()이랑 같음
console.clear();

class Counter {
  count = 0;
  //increase = function() {
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();

// this를 잃어버릴 수 있기 때문에 (this는 부르는 사람에 따라 달라지므로) bind 함수로 꽁꽁 묶어줘야 함.
// 혹은 function아니고 arrow function을 사용하면 됨.
// arrow function도 그 당시의 문맥, scope의 this를 유지한다.
const caller = counter.increase;
// const caller = counter.increase.bind(counter);

caller();

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run();

/**
 * 요약
 *
 * this는 부르는 사람의 문맥에 따라 결정될 수 있으므로
 * 따로 bind를 호출하던지
 * 클래스 내부에 binding을 하고 싶은 함수가 있다면,
 * 또는 this에 접근하는 함수가 있다면,
 * arrow function을 쓰는게 더 좋을 수 있다.
 */
