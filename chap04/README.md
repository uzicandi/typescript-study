# 객체지향 프로그래밍 (OOP)

✅ A programming **paradigm** based on the concept of **"objects"** which can contain **data** and **code**

- java, C++ C#, Python, Kotlin, TS

### 💩 Imperative and Procedural Programmming

객체지향과 반대되는 **명령과 절차지향적 프로그래밍** <br />

- 어플리케이션이 동작하기 위한 data, function 위주로 프로그래밍 하는 방법.
- main()을 시작으로 여러 함수로 연결.
- 정의된 순서대로 함수가 하나씩 실행됨

#### 단점

- 하나를 수정하기 위해 전체적인 어플리케이션 동작 방식을 알아야 함
- side effect 발생 가능성
- 유지보수, 확장가능성 떨어짐

## ✨객체지향 프로그래밍

- 서로 관련있는 함수와 데이터를 객체로 만들어서 프로그래밍
- object{ data1, data2, function() }
- class { fields, methods }
- Error, Exception, Event도 Object 로 만듦

#### 장점

- 관련있는 Object만 수정하면 됨
- 여러 반복은 관련 Object 재사용 하면 됨
- 새로운 Object 만들면서 확장 가능성 UP
- 높은 퀄리티의 프로그램, 빠른 문제해결과 유지보수

#### class? 붕어빵 틀

- 아무것도 정의되지 않은 template
- declare once
- no data in

#### object? 팥붕어빵, 크림붕어빵...

- instance of class
- created many times
- data in

## 중요한 객체지향의 4가지 원칙!
### 1. Encapsulation (캡슐화) 
흩어져있는 데이터들을 분류<br/>
외부에서 보일 필요가 없는 데이터를 숨겨서 캡슐화  <br/>
어떤 관련있는 데이터를 묶어 놓을 것인지, 어떤 것을 숨길 것인지 생각하는 것이 OOP의 시작 <br/>

```
고양이는 기쁘고 슬픈 state가 있다. 이런 상태는 명령할 수 없고, 
놀아주거나, 먹이를 주면서 state를 바꿀 수 있다.
=> 외부 function을 통해서 내부 state를 바꾼다.
```

### 2. Abstraction (추상화)

내부의 복잡한 기능을 다 이해하지 않고, 외부 interface에서 사용할 수 있는 것.<br/>
```
커피머신의 내부구조를 다 알 필요 없이 특정 방법을 통해서 커피를 내릴 수 있다.
```

### 3. Inheritance (상속) 

잘 만들어진 class를 가져와서 재사용 할 수 있다.<br/>
- Parent/Child, Super/Sub, Base/Derived
- `IS-A` 관계 


### 4. Polymorphism (다형성)

