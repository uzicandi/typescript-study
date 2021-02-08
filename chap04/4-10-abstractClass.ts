{
  /**
   * 상속 클래스를 이용할 때, 무언가 반복되는 클래스에서 절차적으로 진행되는 것이 있고,
   * 특정한 기능만 자식클래스에서 달라진다면 => Abstract Class
   */
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  /**
   * makeCoffee에서 grindBeans, preheat, extract 하는 절차가 정해져 있다.
   * 만약 실수로 코딩을 잘못 했을 경우를 대비해 abstract class를 만들 수 있음.
   * abstract class => 🔥그 자체로는 object를 만들 수 없다.
   * 공통적인 기능이 있다면 다 구현할 수 있다.
   * 구현하는 클래스마다 달라져야 하는게 있다면 abstract method로 구현할 수 있다.
   *
   * 그래서 abstract class는 필요한 것을 정의하는 용도.
   */

  abstract class CoffeeMachine implements CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7;
    coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

    preheat(): void {
      console.log('heating up...🔥');
    }

    // 자식클래스마다 달라질 수 있는 행동이 있다면 abstract 붙인다. 내용도 없앰.
    // abstract 자식클래스는 항상 abstract는 부모클래스에서 구현해줘야 하는 것임!
    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk...🥛');
    }
    // makecoffee overriding필요 없음
    // 여기서 구현!
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    // super를 부르지 않고 추상메소드만 불러도 된다.
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true
      };
    }
  }

  // 추상클래스는 이것을 구현한 클래스만 만들 수 있음
  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, 'ssss'),
    new SweetCoffeeMaker(16)
  ];
  machines.forEach(machine => {
    console.log('----------------------');
    machine.makeCoffee(1);
  });
}
