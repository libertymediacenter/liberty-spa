import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';

const routes: Route[] = [
  { path: ':libraryType/:librarySlug/:videoSlug', component: PlayerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatchRoutingModule {
}
