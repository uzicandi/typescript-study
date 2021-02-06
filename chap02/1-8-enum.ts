{
  /**
   * Enum : 상수
   * JS에는 없는 타입
   */

  // JavaScript : 대문자로 지정
  // JS에는 관련있는 상수를 묶을 수 있는 기능이 없어서 freeze를 이용해서 수정할 수 없게 만듦.
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript : 첫자만 대문자로.
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  console.log(Days.Friday); // 4
  const day = Days.Saturday;
  console.log(day); // 5
  // 만약 0부터 시작하는게 싫으면 Monday = 1을 지정해준다.
  // 문자열도 가능한데, 단 문자열은 전체 다 할당해줘야 한다. (ex. Monday = 'Monday')

  /**
   * 하지만 Enum은 최대한 안쓰는게 좋다. 💩
   * 왜냐하면, 재할당이 가능하기 때문!
   * ex. */

  let test: Days = Days.Saturday;
  test = 10;

  /* 이렇게 해도 컴파일 에러 발생 안하는게 문제.
   * 즉, 타입이 정확하게 보장되지 않음.
   *  */

  /**
   * 대신, Union Type을 이용해서 만들 수 있다. ✨
   */
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let dayOfweek: DaysOfWeek = 'Monday'; // 코드 자동 완성
  dayOfweek = 'ellie'; // 이런 엉뚱한 값 할당도 불가능

  /**
   * Enum을 쓸 수 밖에 없는 경우?
   * 모바일 네이티브 프로그래밍에서는 Union을 사용할 방법이 없어서 사용.
   */
}
