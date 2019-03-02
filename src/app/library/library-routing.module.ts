import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { MusicComponent } from './music/music.component';
import { VideoLibraryComponent } from './video-library/video-library.component';

const routes: Routes = [
  { path: '', redirectTo: 'books' },
  { path: 'books', component: BooksComponent },
  { path: 'movies', component: VideoLibraryComponent },
  { path: 'music', component: MusicComponent },
  { path: 'series', component: VideoLibraryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule {
}
