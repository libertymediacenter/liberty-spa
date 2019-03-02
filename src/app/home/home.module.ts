import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { VideoCardComponent } from './video-card/video-card.component';
import { PosterCardComponent } from './poster-card/poster-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    VideoCardComponent,
    PosterCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {
}
