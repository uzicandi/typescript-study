// 이전의 Stack은 String만 받을 수 있었음. String => T

interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

// 언어자체에서 제공하는 배열 array를 쓰지않고 => 연결리스트 사용

// Data를 담고있는 node가 필요함.
type StackNode<T> = {
  readonly value: T; // readonly = 불변성 유지
  //next: StackNode | undefined;
  readonly next?: StackNode<T>;
};

class stackImpl<T> implements Stack<T> {
  private _size: number = 0; // 내부에서만 쓰이는
  // readonly라고 하면 내부에서 정보 바꿀 수 없으므로 private으로 놓고 get size() 추가
  // 읽을 수만 있고 내부적으로 변경할 수 있게끔.

  private head?: StackNode<T>;

  // 보통은 constructor에서 어떤 사이즈로 전달 받을 건지 정해둠.
  constructor(private capacity: number) {} // 총 스택의 사이즈. 이 사이즈 내에서만 사용가능
  get size() {
    return this._size;
  }
  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!');
    }
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    // null == undefined, null !== undefined
    // 데이터 항상 있고, Stack이 비어있는지 확인.
    if (this.head == null) {
      throw new Error('Stack is empty!');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new stackImpl<string>(10);
stack.push('Ellie 1');
stack.push('Bob 2');
stack.push('Steve 3');
while (stack.size !== 0) {
  console.log(stack.pop());
}
const stack2 = new stackImpl<number>(10);
stack2.push(123);
stack2.push(456);
stack2.push(789);
while (stack2.size !== 0) {
  console.log(stack2.pop());
}
