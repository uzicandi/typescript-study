export class PageComponent {
  // page에 대한 부모 컴포넌트

  // 카드들의 목록 = HTMLUListElement (UL = Unordered List)
  private element: HTMLUListElement;
  constructor() {
    // 우리가 필요한 Page Container요소를 만듦
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = 'This is PageComponent';
  }

  // 외부에서 페이지를 만들어서 필요한 곳에 넣기
  // HTMLElement = html 어떤 것이든 추가 가능
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
