import { Component, OnInit } from '@angular/core';
import { VideoCard } from '../video-card/interfaces';
import { PosterCard } from '../../shared/interfaces/poster-card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  videoCards: VideoCard[] = [];
  recentlyAddedMovies: PosterCard[] = [];
  recentlyAddedSeries: PosterCard[] = [];

  constructor() {
  }

  ngOnInit() {
    this.videoCards.push(...this.getContinueWatching());

    const recentlyAddedItem = {
      imagePath: 'https://image.tmdb.org/t/p/w220_and_h330_face/4uIPXX8DjTsCzUAdtMKHTpojYLq.jpg',
      subtitle: '3 minutes ago',
    };

    for (let i = 0; i < 8; i++) {
      this.recentlyAddedMovies.push(recentlyAddedItem);
      this.recentlyAddedSeries.push(recentlyAddedItem);
    }
  }

  private getContinueWatching(): VideoCard[] {
    const videoCards: VideoCard[] = [];

    videoCards.push({
      imagePath: 'https://www.thetvdb.com/banners/episodes/82696/4191204.jpg',
      leftSideText: 'S04E05 - Burnt and Purged Away',
      rightSideText: '32 min left',
      progressBarValue: 12,
      subtitle: 'Sons of Anarchy',
    });

    videoCards.push({
      imagePath: 'https://www.thetvdb.com/banners/episodes/81189/349235.jpg',
      leftSideText: 'S01E03 - ...And the Bag\'s in the River',
      rightSideText: '7 min left',
      progressBarValue: 90,
      subtitle: 'Breaking Bad',
    });

    videoCards.push({
      imagePath: 'https://image.tmdb.org/t/p/w500_and_h282_face/maDBFV1ZpL9eJ2yRMEv4xw0pcwX.jpg',
      leftSideText: '2017',
      rightSideText: '1 hour 2 min left',
      progressBarValue: 30,
      subtitle: 'Megan Leavey',
    });

    videoCards.push({
      imagePath: 'https://image.tmdb.org/t/p/w500_and_h282_face/cVh01PMK6ydxBrTpehHPJBNIXiq.jpg',
      leftSideText: '2006',
      rightSideText: '30 min',
      progressBarValue: 70,
      subtitle: 'Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan',
    });

    return videoCards;
  }

}
