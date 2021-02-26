/**
 * every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
 * 타입을 확인하고 싶은 경우
 * S는 T라는 타입에 속한 서브타입 사용 가능
 *  */

class Animal {}

class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
// animal안에 cat만 있는지 이외의 것도 있는지 확인
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat));

/**
 * every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
 * 우리가 전달한 어떤 것을 확인하는 것
 *  */

type Student = {
  passed: boolean;
};

const students: Student[] = [
  { passed: true },
  { passed: true },
  { passed: false }
];

const result = students.every(students => {
  return students.passed;
});

console.log(result); // false
