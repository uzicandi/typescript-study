/**
 * Let's make a game đš
 */

const position = { x: 0, y: 0 };

type Direction = 'up' | 'down' | 'left' | 'right';
function move(direction: Direction) {
  switch (direction) {
    case 'up':
      position.y += 1;
      break; // 계속 밑에있는 케이스 까지 실행되므로 꼭!
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
    default:
      throw Error('unknown command');
  }
}
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
