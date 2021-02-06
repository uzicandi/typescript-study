{
  // 기본적인 타입부터, 복잡한 타입까지 정의할 수 있다.
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'ellie';
  type Number = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 12
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'd'; // ❌

  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  const isCat: Boal = false; // ❌
}
