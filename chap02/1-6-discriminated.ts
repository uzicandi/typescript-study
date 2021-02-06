{
  // 차별화 할 수 있는.
  // 직관적인 코드 작성

  // 실전 예제
  // function: login -> success, fail
  type SuccessState = {
    // ✨ 동일한 Key와 다른 Value를 가질 수 있도록 만들기
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  //function login(): Promise<LoginState> {
  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!'
      }
    };
  }

  // printLoginState(state)
  // success ->  🎉 body
  // fail -> 😢 reason

  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      // 👎🏻 => discriminated Union 사용하기 !
      // 차별화되는 타입을 둠으로써 간편하게 구분할 수 있는 것.
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😢 ${state.reason}`);
    }
  }
}
