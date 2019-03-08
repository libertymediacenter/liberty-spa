import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WatchRoutingModule } from './watch-routing.module';
import { PlayerComponent } from './player/player.component';
import { WatchService } from './watch.service';

@NgModule({
  declarations: [PlayerComponent],
  imports: [
    SharedModule,
    WatchRoutingModule,
  ],
  providers: [
    WatchService,
  ],
})
export class WatchModule {
}
