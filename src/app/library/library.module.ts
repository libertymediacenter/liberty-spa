import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LibraryRoutingModule } from './library-routing.module';

import { BooksComponent } from './books/books.component';
import { MovieService } from './video-library/movie.service';
import { MusicLibraryService } from './music/music-library.service';
import { MusicComponent } from './music/music.component';
import { MusicGridViewComponent } from './music/views/music-grid-view/music-grid-view.component';
import { MusicListViewComponent } from './music/views/music-list-view/music-list-view.component';
import { InfoViewComponent } from './shared/info-view/info-view.component';
import { VideoPosterComponent } from './shared/video-poster/video-poster.component';
import { InfoViewLinkSectionComponent } from './shared/info-view/info-view-link-section/info-view-link-section.component';
import { VideoLibraryComponent } from './video-library/video-library.component';
import { ContextMenuComponent } from './shared/context-menu/context-menu.component';

@NgModule({
  declarations: [
    BooksComponent,
    MusicComponent,
    MusicGridViewComponent,
    MusicListViewComponent,
    InfoViewComponent,
    VideoPosterComponent,
    InfoViewLinkSectionComponent,
    VideoLibraryComponent,
    ContextMenuComponent,
  ],
  imports: [
    SharedModule,
    LibraryRoutingModule,
  ],
  providers: [
    MovieService,
    MusicLibraryService,
  ],
})
export class LibraryModule {
}
