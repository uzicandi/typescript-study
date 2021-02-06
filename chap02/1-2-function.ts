{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function jsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  // TypeScript ✨
  function jsFetchNum(id: string): Promise<number> {
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript ✨ => TypeScript :
  // Optional parameter❓ : 있어도 되고 없어도 되는 😎
  // type = (String | undefined): 항상 "undefined" 이라고 명시해줘야 해서 불편
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs');
  printName('Ellie');
  printName('Anna', undefined);

  // Default parameter
  // 전달하지 않으면 기본 값으로 전달됨
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest Parameter : ...params (갯수에 상관없이 동일한 타입의 배열)
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4, 5)); // 인자 제한 없는 함수는 ?
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
}
