{
  // 객체지향적 커피 기계 만들기

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // class 생성
  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7;
    // class level (object 생성시 마다 만들어 지지 않음 = 메모리 낭비 방지)
    coffeeBeans: number = 0;
    // instance (object) level, 멤버 변수 : object 생성 시 마다 만들기

    // constructor: class로 Object를 만들 때 항상 처음 호출되는 함수
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans; // 전달받은 coffeeBeans 갯수 설정
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

  // object : class를 통해 데이터를 넣어서 object를 만들기
  // class가 있다면 이를 이용해서 object를 만들 수 있다.
  const maker = new CoffeeMaker(32); // () : 생성자 호출
  // new = class의 instance(object)를 만든다.
}
