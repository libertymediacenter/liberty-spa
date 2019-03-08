import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'libraries', loadChildren: './library/library.module#LibraryModule' },
  { path: 'watch', loadChildren: './watch/watch.module#WatchModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
