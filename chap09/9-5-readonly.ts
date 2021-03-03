{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    todo.title = 'jaja'; // 수정이 가능한 아이템은 불안정
  }
}
