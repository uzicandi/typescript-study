{
  /**
   * Abstraction 하는 방법
   * 1. 캡슐화를 통해서 : 함수에 private처리해서 너무 많은 접근자가 생기지 않게 하기
   * 2. interface를 통해서
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 계약서 같은!
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // interface 심기
  // class는 interface에 적힌 모든 함수를 만들어줘야 함.
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...🧹');
    }

    grindBeans(shots) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...☕️`);
      return {
        shots,
        hasMilk: false
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  //   const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  //   maker.fillCoffeeBeans(32);
  //   maker.makeCoffee(2);

  //   const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  //   maker2.fillCoffeeBeans(32);
  //   maker2.makeCoffee(2);
  //   maker2.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  // 서로 연결된 인터페이스만 호출 가능
  amateur.makeCoffee();
  /**
   * grinding beans for 2
    heating up...🔥
    Pulling 2 shots...☕️
    { shots: 2, hasMilk: false }
   */
  pro.makeCoffee();
  /**
   * grinding beans for 2
    heating up...🔥
    Pulling 2 shots...☕️
    { shots: 2, hasMilk: false }
    cleaning the machine...🧹
   */
}
