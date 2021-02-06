{
  // ✅ Array 배열 정의 방식.
  const fruits: string[] = ['🍎', '🍌'];
  const scores: Array<number> = [1, 3, 4];

  // 두 배열 방식의 차이점.
  function printArray(fruits: readonly string[]) {
    // 주어진 데이터를 변경하거나 업데이트 못하게 하기
    // Readonly 많이 사용함.
    fruits.push; // 불가능~
  }
  function printArray(fruits: readonly Array<String>) {
    // 이건 안됨
  }

  // ✅ Tuple - but 권장 ❌ -> interface, type alias, class로 대체해서 사용 권장.
  // 배열이긴 한데, 서로 "다른 타입"의 데이터를 담을 수 있는 "배열"
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
