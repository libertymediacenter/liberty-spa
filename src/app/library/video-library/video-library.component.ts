import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InfoView } from '../shared/info-view/info-view.interface';
import { VideoItem } from '../shared/interfaces/media';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-video-library',
  templateUrl: './video-library.component.html',
  styleUrls: ['./video-library.component.scss'],
})
export class VideoLibraryComponent implements OnInit, OnDestroy {
  public videos: VideoItem[] = [];
  public infoView: InfoView = null;
  public libraryType: string;

  private _segments$: Subscription;
  private _data$: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public movieService: MovieService) {
  }

  public ngOnInit() {

    this._segments$ = this.route.url.subscribe((segments) => {
      const type = segments[0].path.toLowerCase();

      this.libraryType = type;

      this.movieService.more();
    });

    this._data$ = this.movieService.data.subscribe((movies) => {
      if (movies.length > 0) {
        this.videos.push(...movies);
      }
    });
  }

  public scrollHandler(event) {
    if (event === 'bottom') {
      this.movieService.more()
    }
  }

  public onMouseOver(video: VideoItem) {
    this.infoView = {
      title: video.title,
      year: video.releaseYear,
      imageUrl: video.backdropUrl,
      runtime: video.runtime,
      genres: video.genres,
      summary: video.summary,
      starring: video.starring,
      ratings: video.ratings,
      awards: video.awards,
    };
  }

  public onClick(video: VideoItem) {
    alert(`Play ${video.title}`);
  }

  public ngOnDestroy(): void {
    this._segments$.unsubscribe();
    this._data$.unsubscribe();
  }

}
