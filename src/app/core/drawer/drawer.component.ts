import { Component, OnInit } from '@angular/core';

export interface DrawerMenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  public menuItems: DrawerMenuItem[] = [
    { label: 'Movies', route: '/libraries/movies' },
    { label: 'Series', route: '/libraries/series' },
    { label: 'Sports', route: '/libraries/sports' },
    { label: 'Books', route: '/libraries/books' },
    { label: 'Music', route: '/libraries/music' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
