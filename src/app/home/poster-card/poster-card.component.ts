import { Component, Input, OnInit } from '@angular/core';
import { PosterCard } from '../../shared/interfaces/poster-card';

@Component({
  selector: 'app-poster-card',
  templateUrl: './poster-card.component.html',
  styleUrls: ['./poster-card.component.scss']
})
export class PosterCardComponent implements OnInit {
  @Input() posterCard: PosterCard;

  constructor() { }

  ngOnInit() {
  }

}
