{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result = checkNotNullBad(123);
  console.log(result); // 123
  checkNotNullBad(null); // error

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
  //const boal: string = checkNotNull(true); => error

  /**
   * 제네릭을 사용하면
   * 사용하는 사람이 어떤 타입인지 결정할 수 있음.
   * 유연하지만 타입이 보장받을 수 있음.
   *
   * 즉, 숫자를 넣으면 숫자가 리턴되고
   * boolean을 넣으면 boolean이 리턴되는 것 !
   */
}
