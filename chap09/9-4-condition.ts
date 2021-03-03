// condition type : 어떤 type이 a 라면 b를 써야지. 라는 조건을 정할 수 있는 타입

type Check<T> = T extends string ? boolean : number;
type Type = Check<string>; // boolean

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';

type T0 = TypeName<string>;
'string';
type T1 = TypeName<'a'>;
'string';
type T2 = TypeName<() => void>;
'function';
