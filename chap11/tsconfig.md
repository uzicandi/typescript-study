# TypeScript Compiler

### 1. TSConfig 셋업하기!

- ts 파일 -> js 추가하기

```
$ tsc logging.ts -w
```

- tsconfig.json 생성하기

```
$ tsc --init
```

### 2. 프로젝트 구조 정리하가

- outDir <br/>
  `tsconfig.json`에서 `outDir`에 경로 지정해준뒤 `$ tsc`로 컴파일 하면 해당경로로 ts 파일에서 컴파일된 js가 모인다. <br/>

- rootDir <br/>
  src 밖에 ts 파일이 없도록 하기. <br />

- exclude <br/>
  해당 파일은 컴파일 안하도록 지정 <br />

- include <br/>
  해당 파일만 컴파일 하도록 지정. <br />

### 3. Compiler Options

- incremental <br />
  이전 컴파일과 비교해서 수정된 사항이 있는 것만 컴파일 하는 것 <br />
  대신, 이전 컴파일을 저장해두니까 프로젝트 파일이 커진다는 단점. <br />

- target <br />
  어떤 버전으로 컴파일 할 것인지 <br />

- module <br/>
  node프로젝트 : commonjs, 브라우저환경 : ECMAScript <br/>

- lib <br/>
  세부적으로 어떤 라이브러리를 사용할 건지 <br/>

- allowJs <br />
  프로젝트 안에서 자바스크립트를 같이 쓸건지 <br />

- checkJs <br />
  자바스크립트에서 뭔가 잘못되고 있다면 경고가 뜰 수 있도록 설정 <br />

- jsx <br />
  React에서 사용하는 jsx, React에 관련된걸 사용할 것인지 설정 <br />

- declaration <br />
  타입정의에 관련된 것, 내가 작성한 코드를 다른 사람에게 제공할 것이 아니라면 <br />
  일반 제품에서는 잘 사용하지 않음.<br />

- outFile <br/>
  다수의 타입스크립트 파일을 하나의 자바스크립트 파일로 만들 때 <br />

- composite <br />
  이전에 build된 것을 기억하고 있어서 다음에 빌드할 때 더 빠르게 도와줌 (like incremental) <br />

- tsBuildInfoFile <br />
  incremental 옵션이 true이면 관련된 정보를 담을 수 있는 파일을 만들어주는 폴더 경로 <br />

- removeComments <br />
  Comment 다 지워줌 <br />

- noEmit <br />
  컴파일 에러 체크만 하고, 자바스크립트로 변환하는 일을 하지 않음 <br />

### 디버깅

- tscofig의 sourceMap = true <br />
  map이라는 파일 생성 -> TS, JS를 연결시켜주는 모든 정보가 담긴 파일 <br />
- 브라우저에서 이해할 수 있는 파일 <br />
- typescript에서 breakpoint가 걸림.
