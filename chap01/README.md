# TypeScript 란?

| Typed JavaScript at Any Scale!

1. TypeScript extends JavaScript by adding types.
2. By understanding JavaScript, TypeScript **saves you time catching errors** and **providing fixes** **before you run code.**
3. Any browser, any OS, anywhere JavaScript runs. Entirely Open Source.

### Providing Fixes?

1. type 없는 라이브러리 사용 시에도 자동 코드 완성
2. 인터페이스나 타입을 통해서 오브젝트가 어떤 데이터, 함수를 담고있는지 알 수 있고
3. 리액트같은 JSX 에서도 타입 체킹을 할 수 있다.

---

브라우저는 타입스크립트를 바로 실행할 수 없다. <br />
타입스크립트 툴을 이용해서 JS로 변환 후 실행해야 함 <br />
`$ tsc main.ts` ⇒ main.js 가 생김 <br />

---

이렇게 변환하지 않고 바로 실행하는 툴이 있음. <br />
`$ npm install -g ts-node` <br />
이후 `ts-node` 명령어 사용하여 실행. <br />

---

`$ tsc -h` : 모든 명령어의 설명 <br />
`$ tsc main.ts -w` : ts 파일에서 수정한 것을 컴파일 없이 바로바로 확인 가능 <br />
