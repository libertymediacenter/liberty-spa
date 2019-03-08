import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as Hls from 'hls.js';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DrawerService } from '../../shared/services/drawer.service';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('libertyPlayer') player: ElementRef<HTMLVideoElement>;
  @ViewChild('overlay') overlay: ElementRef<HTMLElement>;

  public playerInfo: PlayerInfo;

  private _subscription: Subscription;
  private _hls: Hls;

  private _isPlaying = false;
  private _isFullscreen = false;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private drawerService: DrawerService,
              private watchService: WatchService) {
  }

  public ngOnInit() {
    this.drawerService.hide();

    this._subscription = this.route.params.subscribe(async (params) => {
      const libraryType = params['libraryType'];
      const librarySlug = params['librarySlug'];
      const videoSlug = params['videoSlug'];

      const stream = await this.watchService.getMovie(videoSlug);

      this.playerInfo = {
        title: stream.item.title,
        year: `${stream.item.year}`,
        plot: stream.item.plot,
        runtime: stream.item.runtime,
        poster: `${environment.ASSET_BASE_URL}/${stream.item.poster}`,
        backdrop: `${environment.ASSET_BASE_URL}/${stream.item.backdrop}`,
      };

      this.startStream(`${environment.ASSET_BASE_URL}/${stream.playlistUrl}`);

      this.player.nativeElement.addEventListener('play', () => {
        this.overlay.nativeElement.hidden = true;
      });

      this.player.nativeElement.addEventListener('pause', () => {
        this.overlay.nativeElement.hidden = false;
      });

      this.setupKeyboardEvents();
    });
  }

  public ngAfterViewInit(): void {
    if (Hls.isSupported()) {
      this._hls = new Hls({
        debug: !environment.production,
        maxBufferSize: 100,
      });

      this._hls.attachMedia(this.player.nativeElement);
    } else {
      console.error('HLS not supported!');
    }
  }

  public goBack() {
    this.location.back();
  }

  public ngOnDestroy(): void {
    this.drawerService.show();
    this._subscription.unsubscribe();
  }

  private startStream(playlistUrl: string) {
    this._hls.loadSource(playlistUrl);
  }

  private setupKeyboardEvents() {
    window.addEventListener('keyup', (event) => {
      const player = this.player.nativeElement;

      switch (event.code) {
        case 'MediaPlayPause':
        case 'Space':
          if (this._isPlaying) {
            player.pause();
            this._isPlaying = false;
          } else {
            player.play()
              .then(() => this._isPlaying = true)
              .catch(console.error);
          }

          break;
        case 'KeyF':
          if (!this._isFullscreen) {
            player.requestFullscreen()
              .then(() => this._isFullscreen = true)
              .catch(console.error);
          } else {
            document.exitFullscreen()
              .then(() => this._isFullscreen = false)
              .catch(console.error);
          }

          break;
        default:
          if (environment.production === false) {
            console.log(`[KeyCode]: ${event.code}`);
            break;
          }
      }

      event.preventDefault();
    });
  }

}

export interface PlayerInfo {
  title: string;
  year: string;
  plot: string;
  runtime: number;
  poster: string | null;
  backdrop: string | null;
}
