export interface Component {
  // 자기 자신을 제공된 부모 컴포넌트에 붙여줌.
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
  // 전달 받은 컴포넌트를 나 자신 안에 붙여줌.
  attach(component: Component, position?: InsertPosition): void;
  registerEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any
  ): void;
}

/**
 * Encapsulate the HTML element creation
 */

export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;
  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
  removeFrom(parent: HTMLElement) {
    if (parent !== this.element.parentElement) {
      throw new Error('Parent mismatch!');
    }
    parent.removeChild(this.element);
  }
  attach(component: Component, position?: InsertPosition) {
    component.attachTo(this.element, position);
  }
  // The same signature as the HTMLElement.addEventListener method
  registerEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any
  ): void {
    this.element.addEventListener(type, listener);
  }
}
