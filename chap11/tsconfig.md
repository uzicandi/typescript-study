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

- outDir
  `tsconfig.json`에서 `outDir`에 경로 지정해준뒤 `$ tsc`로 컴파일 하면 해당경로로 ts 파일에서 컴파일된 js가 모인다. <br/>

- rootDir
  src 밖에 ts 파일이 없도록 하기. <br />

- exclude
  해당 파일은 컴파일 안하도록 지정 <br />

- include
  해당 파일만 컴파일 하도록 지정. <br />
