import { Subject } from 'rxjs';

export class MenuItem {
  constructor(
    public label: string,
    public value: string,
    public subject: Subject<any>,
  ) {
  }
}

export class ContextMenuView {
  show = false;
  menuItems: MenuItem[];
  mouseEvent: any;

  constructor() {
  }

}
