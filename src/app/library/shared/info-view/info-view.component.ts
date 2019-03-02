import { Component, Input, OnInit } from '@angular/core';
import { InfoViewLinkItem } from './info-view-link-section/info-view-link-section.component';
import { InfoView } from './info-view.interface';

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.scss'],
})
export class InfoViewComponent implements OnInit {
  @Input() info?: InfoView;

  constructor() {
  }

  ngOnInit() {
  }

  getRatings(): InfoViewLinkItem[] {
    const data = this.info.ratings.slice();

    return data.map((item) => <InfoViewLinkItem> ({
      label: `${item.sourceName}: ${item.displayScore}`,
      href: item.sourceUrl,
      external: true,
    }));
  }

  getStarring(): InfoViewLinkItem[] {
    const data = this.info.starring.slice();

    return data.map((item) => <InfoViewLinkItem> ({
      label: item.displayName,
      href: item.slug,
      external: false,
    }));
  }

}
