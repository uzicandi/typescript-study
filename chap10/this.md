# Arrow Function과 그냥 Function의 차이

### 1. This

`this`는 현재 실행 문맥을 뜻한다. 즉 **호출한 것이 누구냐** 는 것이다.

### 2. 그냥 Function

```
class Counter {
    count = 0;
    increase = function() {
        console.log(this); // Counter {count:0, increase: F}, undefined
    }
}

const counter = new Counter();
counter.increase();

const caller = counter.increase.bind(counter);

caller();
```

this는 호출한 것에 따라 달라지므로, `bind` 함수로 꽁꽁 묶어야 함.

### 3. Arrow Function

클래스 내부에 **binding** 하고 싶은 함수가 있거나, <br />
this에 접근하는 함수가 있다면, 화살표 함수를 쓰는게 더 좋을 수 있다.

```
class Counter {
    count = 0;
    increase = () => {
        console.log(this);
        // Counter {count:0, increase: F}, Counter {count:0, increase: F}
    }
}

const counter = new Counter();
counter.increase();

const caller = counter.increase;

caller();
```
