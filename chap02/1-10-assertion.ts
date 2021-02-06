{
  /**
   * Type Assertions
   * 타입 강제 적용
   * 'as' | <>Element | ❗️
   * 불가피하게 사용하는 경우 : 자바스크립트와 연동되는 경우 !
   */

  // ex. 1 : 'as' | <>Element
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  // result.length  => any 타입이라서 문자열에서 사용하는 api인 length를 못 씀.
  console.log((result as string).length); // 5
  console.log((<string>result).length); // 5

  // ex. 2 : 'as'
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 에러 발생 및 어플리케이션 종료. 😱
  // wrong.push is not a function

  // ex. 3 : ❗️ = 확신할 때.
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  //numbers!.push(2); // 😱

  const button = document.querySelector('class');
  // button = Element | null 이기 때문에 보통은
  if (button) {
    button.nodeValue; // 이런식으로 사용함.
  }
  // 하지만 button의 값이 있을 때는
  const button2 = document.querySelector('class')!;
  // 이렇게 ❗️ 사용
}
