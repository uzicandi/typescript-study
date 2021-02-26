// someting<T extends Something>

interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받으먼 파생된 자식들을 다 받을 수 있지만 (FullTimeEmployee, PartTimeEmployee..)
// 정말 광범위한 타입으로 다시 리턴하는 함수는 💩💩💩
// 나중에 발등에 총쏠 수 있음 🔫
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  // extends 가 바로 조건 constrains !!
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);
// ellieAfterPay.workFullTime();
/**
 * error
 * Fulltime이라는 정보를 잃어버리고 그냥 Employee만 리턴되기 때문에
 * 풀타임이었는지, 파트타임이었는지 세부 클래스의 정보를 잃어버림.
 *
 * const ellieAfterPay = pay(ellie) as FullTimeEmployee
 * 이런식으로 캐스팅을 하면 그때서야 workFullTime에 접근이 가능하지만
 * 가능하면 as를 쓰지 않는 것이 좋다.
 */

\

const obj = {
  name: 'ellie',
  age: 20
};

const obj2 = {
  animal: '🦮'
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name')); // ellie
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🦮
