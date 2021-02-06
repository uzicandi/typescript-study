{
  // 타입 추론

  // 1.
  let text = 'hello';
  text = 1; // 자동으로 type이 string이라고 나옴.

  // 2.
  function print(message = 'hello') {
    // type = string이라고 자동 타입추론
    console.log(message);
  }
  print('hello');
  print(1);

  // 3.
  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);

  /**
   * 웬만하면 타입을 정확하게 명시하는게 좋다.
   * 다만, 너무 뻔한 것은 괜찮음.
   * 함수는 정확하게 명시하는게 중요
   *
   * 코딩 스타일 가이드를 통해서 스타일 일관성을 가질 것.
   */
}
