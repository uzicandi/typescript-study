{
  class User {
    firstName: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${firstName} ${lastName}`;
    }
  }
  const user = new User('Steve', 'Jobs');
  console.log(user.fullName); // Steve Jobs
  user.firstName = 'Ellie';
  console.log(user.fullName); // Steve Jobs
  // why❓ : 한번 등록된 데이터는 바뀌지 않기 때문.
  // 그래서 getter, setter사용!

  /**
   *
   */

  class UserGetSet {
    // private firstName: string;
    // private lastName: string;
    // get fullName(): string {
    //   return `${this.firstName} ${this.lastName}`;
    // }
    // constructor(firstName: string, lastName: string) {
    //   this.firstName = firstName;
    //   this.lastName = lastName;
    // }

    // 위의 코드 리팩토링.
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }
  const user2 = new UserGetSet('Steve', 'Jobs');
  console.log(user.fullName); // 접근할 때는 함수지만 멤버변수에 접근하는 것처럼.
  user.firstName = 'Ellie';
  console.log(user.fullName); // Ellie Jobs

  user2.age = 6; // setter 호출
}
