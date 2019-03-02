import { Component, Input, OnInit } from '@angular/core';

export interface InfoViewLinkItem {
  label: string;
  href: string;
  external: boolean;
}

@Component({
  selector: 'app-info-view-link-section',
  templateUrl: './info-view-link-section.component.html',
  styleUrls: ['./info-view-link-section.component.scss'],
})
export class InfoViewLinkSectionComponent implements OnInit {
  @Input() title: string;
  @Input() linkItems: InfoViewLinkItem[];

  constructor() {
  }

  ngOnInit() {
  }

}
