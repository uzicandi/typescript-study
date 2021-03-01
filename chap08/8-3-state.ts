{
  // 언제 error | error state?

  // 예상할 수 있는 상태를 타입으로 정리하는 것이 안정적이고 예상 가능하게 코딩하는 방법.
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };
  type SuccessState = {
    result: 'success';
  };
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      throw new Error('no network!');
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {} // DI : Dependency Injection

    login() {
      try {
        this.client.tryConnect();
        //login....
      } catch {
        console.log(`catched!`);
      }
    }
  }

  // const client = new NetworkClient();
  // const service = new UserService(client);
  // service.login();

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // any type
        // show dialog to user

        if (error instanceof OfflineError) {
          // 타입에 대한 정보 사라져서 instanceof 불가능.
        }
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
