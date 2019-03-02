import { Component, Input, OnInit } from '@angular/core';
import { VideoCard } from './interfaces';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent implements OnInit {
  @Input() card: VideoCard;

  constructor() {
  }

  ngOnInit() {
  }

}
