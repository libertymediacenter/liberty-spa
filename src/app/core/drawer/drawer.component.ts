import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrawerService } from '../../shared/services/drawer.service';

export interface DrawerMenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit, OnDestroy {
  public menuItems: DrawerMenuItem[] = [
    { label: 'Movies', route: '/libraries/movies' },
    { label: 'Series', route: '/libraries/series' },
    { label: 'Sports', route: '/libraries/sports' },
    { label: 'Books', route: '/libraries/books' },
    { label: 'Music', route: '/libraries/music' },
  ];

  public display: boolean;
  private _subscription: Subscription;

  constructor(private drawerService: DrawerService) {
  }

  ngOnInit() {
    this._subscription = this.drawerService.display
      .subscribe((display) => this.display = display);
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
