const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

function CoffeeMachine(beans) {
  this.beans = beans;
  // 함수는 만들어지는 인스턴스가 만들어질 때 마다 들어있기 때문에 "인스턴스 레벨"
  //   this.makeCoffee = shots => {
  //     console.log('making...☕️');
  //   };
}
CoffeeMachine.prototype.makeCoffee = shots => {
  console.log('making...☕️');
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype); // letteMachine은 coffeemachine을 상속

const latteMachine = new LatteMachine(123);
console.log(latteMachine);

latteMachine.makeCoffee();

// prototype을 이용해서 상속을 구현할 수 있다!
// 코드를 재사용하기 위해서 만들어진 것이다!
