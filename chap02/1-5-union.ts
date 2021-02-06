{
  /**
   * Union Types: OR ✨
   * 발생할 수 있는 모든 케이스 중 하나만 할당할 수 있을 때 사용
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down'); // 내용 자동생성 ❗️

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // 실전 예제
  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  //function login(): Promise<LoginState> { // 원래의 로그인형태면 Promise겠지
  function login(): LoginState {
    return {
      response: {
        body: 'logged in!'
      }
    };
  }

  // printLoginState(state)
  // success ->  🎉 body
  // fail -> 😢 reason

  function printLoginState(state: LoginState) {
    if ('response' in state) {
      // 👎🏻 => discriminated Union 사용하기 !
      // 차별화되는 타입을 둠으로써 간편하게 구분할 수 있는 것.
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😢 ${state.reason}`);
    }
  }
}
