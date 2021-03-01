{
  // 기존의 타입을 이용하면서 다른 형태로 이용하는 것

  type Video = {
    title: string;
    author: string;
    //description: string;
  };
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  // 이렇게 반복으로 정해주지 않고도 만들어 주는게 map type

  // [1, 2].map(item => item * item); // [1, 4]

  // Type Object안에서 []를 쓰면 for...in 처럼 key를 돌 수 있음.
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in 과 동일
    // Video의 Key들을 돌면서 Optional로 만듦.
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;

  const videoOp: VideoOptional = {
    title: 'hi'
    // animal => 불가능
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: 'dog'
  };
  animal.name = 'ellie';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'ellie'
  };
  video.author = 'aa'; // 변경 불가. error

  // 예제 코드
  type Nullable<T> = { [P in keyof T]: T[P] | null }; // T 타입을 돌면서 기존의 타입을 쓰거나 null이 가능하도록 만듦.
  const obj2: Nullable<Video> = {
    title: null,
    author: null
  };

  // TS 문서 코드.
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    // 전달되는 Object를 돌면서 타입을 감싸는 역할
    [P in keyof T]: Proxy<T[P]>;
  };
}
