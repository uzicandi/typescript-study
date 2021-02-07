{
  // 캡슐화

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public, private, protected 를 이용해서 정보 은닉
  // private: 외부에서 절대 접근 X
  // protected: 상속을 할 때, 상속한 자식 클래스에서만 접근할 수 있음.
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    // 밖에서 바꿀 이유가 없는 값이므로 private => 외부에서 보이지 않게 됨
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans; // 전달받은 coffeeBeans 갯수 설정
    }

    // 만약 static 함수가 있을 경우 constructor를 private으로 하는걸 권장.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // 함수 추가 ✨
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false
      };
    }
  }

  const maker = new CoffeeMaker(32);
  // private constructor라서 불가능 => static한 함수가 있다는 것을 예상
  const makerStatic = CoffeeMaker.makeMachine(32);
  maker.coffeeBeans = 3;
  maker.coffeeBeans = -34; // 외부에서 내부 상태 잘못된 입력 💩

  maker.fillCoffeeBeans(3);
}
