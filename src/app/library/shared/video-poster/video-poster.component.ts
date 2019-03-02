import { Component, Input, OnInit } from '@angular/core';

export interface VideoPosterItem {
  title?: string;
  imageUrl: string;
}

@Component({
  selector: 'app-video-poster',
  templateUrl: './video-poster.component.html',
  styleUrls: ['./video-poster.component.scss'],
})
export class VideoPosterComponent implements OnInit {
  @Input() video: VideoPosterItem;
  @Input() width = 155;

  constructor() {
  }

  ngOnInit() {
  }

}
