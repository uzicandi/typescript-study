# 기본 타입 마스터하기

### 왜 타입이 중요하고, 타입이 있다는게 어떤 의미일까?

프로그래밍을 한다는 것은 3가지로 구성된다. <br/>

- Input
- Operation
- Output

데이터를 Operation 하는 동안 잠시 담아두는 곳 => 변수 <br />
Type이 정해져 있지 않는 변수에는 아무거나 담을 수 있다. <br />

- Type이 있으면 어떤 기능을 하는지, 어떤 것을 담을 수 있는지 코드를 통해 확인할 수 있고
- 타입 보장하기 때문에 안정적인 프로그램을 만들 수 있다.

#### ❗ 명확하게 Type을 정해야 한다!

- [x] `1-1-basic.ts` : 기본 타입 정리
- [x] `1-2-function.ts` : 함수 타입 이용(spread, default, optional)
- [x] `1-3-array.ts` : 배열과 튜플
- [x] `1-4-alias.ts` : 기본적인 타입부터 복잡한 타입까지 정의할 수 있는 Type Alias와 String Literal Types
- [x] `1-5-union.ts` : 발생할 수 있는 모든 케이스 중 하나만 할당할 수 있을 때 사용하는 Union Type
- [x] `1-6-discriminated.ts` : Union에서 동일한 Key와 다른 Value를 가질 수 있도록 함.
- [x] `1-7-intersection.ts` : 다양한 타입을 하나로 묶을 수 있는 intersection Type
- [x] `1-8-enum.ts` : 여러가지의 관련된 상수 값들을 한 곳에 모아서 정의할 수 있게 도와주는 Type => Union type으로 사용하는게 Cool
- [x] `1-9-inference.ts` : 타입스크립트는 자동 타입추론이 가능하다! 하지만... 💩
- [x] `1-10-assertion.ts` : 타입을 강요할 때 사용. but 💩
