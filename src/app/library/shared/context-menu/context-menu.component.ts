import { ChangeDetectorRef, Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { ContextMenuView, MenuItem } from './context-menu.models';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
})
export class ContextMenuComponent implements OnInit {
  @Input() data: ContextMenuView;
  @ViewChild('container') container: ElementRef;

  containerPosY = 0;
  containerPosX = 0;
  isArrowUpward = true;

  private autoHideTimer: any;
  private static IDLE_TIMEOUT_MS = 2000;
  private static MOUSE_OUT_TIMEOUT_MS = 250;

  constructor(@Inject(ChangeDetectorRef) private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.cdr.detectChanges();
    this.prepareContextMenu();
  }

  public hideContextMenuWithTimer(milliseconds = null) {
    if (isNullOrUndefined(milliseconds)) {
      milliseconds = ContextMenuComponent.MOUSE_OUT_TIMEOUT_MS;
    }
    this.autoHideTimer = setTimeout(() => {
      this.data.show = false;
    }, milliseconds);
  }

  public clearContextMenuHideTimer() {
    clearTimeout(this.autoHideTimer);
  }

  isValueNullOrUndefined(value) {
    return !!isNullOrUndefined(value);
  }

  callSubscriber(item: MenuItem) {
    item.subject.next(item);
  }

  private prepareContextMenu() {
    try {
      this.validateData();
      this.buildDisplayPositions();
    } catch (e) {
      this.hideContextMenuWithTimer(0);
      console.error('unable to prepareContextMenu the context menu due to following exception/error: ' + e);
    } finally {
      if (this.data.show) {
        this.hideContextMenuWithTimer(ContextMenuComponent.IDLE_TIMEOUT_MS);
      }

    }
  }

  private buildDisplayPositions() {
    const containerElement: any = this.container.nativeElement;
    let height = 0;
    if (!isNullOrUndefined(containerElement)) {
      height = containerElement.offsetHeight;
    }

    if (height > 0) {
      this.buildTopPosition(height);
      this.buildLeftPosition();
    }
  }

  private validateData() {
    if (isNullOrUndefined(this.data)) {
      throw new TypeError('context menu info can not be null or undefined');
    }

    if (isNullOrUndefined(this.data.mouseEvent)) {
      throw new TypeError('context menu should be associated with mouseEvent e.g. mouse left click');
    }

    if (isNullOrUndefined(this.data.menuItems)) {
      throw new TypeError('action item is missing');
    }
  }

  private buildLeftPosition() {
    this.containerPosX = this.data.mouseEvent.clientX;
  }

  private buildTopPosition(contextMenuHeight: number) {
    const clickedElementHeight = this.data.mouseEvent.currentTarget.offsetHeight;
    const pageHeight = window.innerHeight;
    const clickedPosY = this.data.mouseEvent.clientY;
    const sum = contextMenuHeight + clickedPosY + clickedElementHeight;

    console.log('contextMenuHeight: ' + contextMenuHeight);
    console.log('clickedElementHeight: ' + clickedElementHeight);
    console.log('pageHeight: ' + pageHeight);
    console.log('clickedPosY: ' + clickedPosY);
    console.log('sum: ' + sum);

    let top = 0;

    if (sum < pageHeight) {
      top = clickedPosY + clickedElementHeight;
    } else {
      top = clickedPosY - (contextMenuHeight + clickedElementHeight);
      this.isArrowUpward = false;
    }

    if (top < 0) {
      top = 0;
    }
    this.containerPosY = top;
  }
}
