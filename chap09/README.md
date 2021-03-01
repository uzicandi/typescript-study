# 1. Interface 와 Type Alias의 차이점.

### Interface?

- 어떤 것의 규격 사항, 계약서
- object와 object끼리 의사소통할 때 정해진 interface를 토대로 해서 서로의 상호작용을 할 수 있도록 도와줌
- ex. coffeeMaker라는 함수를 인터페이스로 만들면 사용자가 다양한 커피기계의 coffeeMaker함수를 사용하여 다양하게 만듦.
- 최신 타입스크립트에서는 type도 가능은 하지만, 특정한 규격을 정하는 것이라면, 이 규격을 통해서 어떤것이 구현된다면 인터페이스를 사용할 것.

```
// ❌
type CoffeeMaker = {
    coffeeBeans: number;
    makeCoffee: (shots: number) => Coffee;
}
class CoffeeMachine implements CoffeeMaker {
    coffeeBeans: number;
    makeCoffee(shots: number) {
        return {};
    }
}
```

### Type

- 데이터를 담을 때, 어떤 데이터를 담을 수 있을지 데이터의 모습, 타입을 결정하는 것.

```
// ✅
type Position = {
    x: number;
    y: number;
};
const pos: Position = { x: 0, y: 0};
printPosition(pos);
```

# 2. Utility Types

- 타입을 transform할 수 있다.
- index type
- mapped type
