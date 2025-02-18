{
  class TimeoutError extends Error {}

  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
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
