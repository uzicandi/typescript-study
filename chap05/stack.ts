interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

// 언어자체에서 제공하는 배열 array를 쓰지않고 => 연결리스트 사용

// Data를 담고있는 node가 필요함.
type StackNode = {
  readonly value: string; // readonly = 불변성 유지
  //next: StackNode | undefined;
  readonly next?: StackNode;
};

class stackImpl implements Stack {
  private _size: number = 0; // 내부에서만 쓰이는
  // readonly라고 하면 내부에서 정보 바꿀 수 없으므로 private으로 놓고 get size() 추가
  // 읽을 수만 있고 내부적으로 변경할 수 있게끔.

  private head?: StackNode;

  // 보통은 constructor에서 어떤 사이즈로 전달 받을 건지 정해둠.
  constructor(private capacity: number) {} // 총 스택의 사이즈. 이 사이즈 내에서만 사용가능
  get size() {
    return this._size;
  }
  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!');
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
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

const stack = new stackImpl(10);
stack.push('Ellie 1');
stack.push('Bob 2');
stack.push('Steve 3');
while (stack.size !== 0) {
  console.log(stack.pop());
}
