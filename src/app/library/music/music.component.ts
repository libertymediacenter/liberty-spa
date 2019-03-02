import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Album, MusicLibraryService } from './music-library.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit, OnDestroy {
  public viewType = 'list';
  public albums: Album[] = [];

  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private musicLibraryService: MusicLibraryService) {
  }

  ngOnInit() {
    this.albums = this.musicLibraryService.getAlbums();

    this.subscription = this.route.params.subscribe((params) => {
      const viewType = params['viewType'];

      if (viewType) {
        switch (viewType) {
          case 'list':
            this.viewType = 'list';
            break;
          case 'grid':
            this.viewType = 'grid';
            break;
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
