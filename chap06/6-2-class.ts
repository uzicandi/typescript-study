// either : a or b

interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}
const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); // 5
const best = new SimpleEither(4, 'hello');
const best1 = new SimpleEither({ name: 'ellie' }, 'hello');

/**
 * 활용성이 높은 클래스, 함수를 만들 수 있다.
 */
