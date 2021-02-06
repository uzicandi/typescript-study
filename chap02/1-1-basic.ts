// {} 블럭을 통해서 local scope로 작성.
// 아니면 Global scope으로 적용되기 때문

{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined : 값이 있는지 없는지 결정되지 않음
  let name: undefined; // 💩
  let age: number | undefined; // ✅
  age = undefined;
  age = 1;
  function find(): number | undefined {
    // 함수 값을 찾으면 number, 없으면 undefined 을 보낸다는 표시
    return undefined;
  }

  // null : 값이 없다고 확정
  let person: null; // 💩
  let person2: string | null; // ✅

  // unknown 💩 : 웬만하면 안쓰고 타입을 구체적으로 사용하는게 좋다.
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩 : 불가피한 경우에만 !
  let anything: any = 0;
  anything = 'hello';

  // void : 아무것도 리턴하지 않음.
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never : 예상치 못한 에러 발생 시 || 무한 반복
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    /**
     * while(true){ }
     */
  }
  let neverEnding: never; // 💩

  // object : 💩 어떤 타입이든 광범위하게 담을 수 있음
  let obj: object = [1, 4];
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'elloe' });
  acceptSomeObject({ animal: 'dog' });
}
