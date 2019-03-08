import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LibertyMovie } from '../library/shared/interfaces/responses';
import { MovieService } from '../shared/services/movie.service';

@Injectable()
export class WatchService {

  constructor(private http: HttpClient,
              private movieService: MovieService) {
  }

  public async getMovie(librarySlug: string, movieSlug: string): Promise<Stream<LibertyMovie>> {
    const item = await this.movieService.getMovie(librarySlug, movieSlug);
    const playlist = await this.getPlaylist(librarySlug, movieSlug, {
      startTime: 0,
      audioBitrate: 192,
      audioCodec: 'aac',
      audioChannels: 2,
      videoBitrate: 1000,
      videoCodec: 'x264',
    });

    return {
      item,
      playlistUrl: playlist.playlistUrl,
      //playlistUrl: "/transcode/5dd69c3eb1ce13003a461917ce27118ed55e2904b1fdc52aceabe22a88c085d5/bd5028d6e3afd01eb3628d6103658399e964244fa0801048f9f0ec6e54bb39ac.m3u8",
    };
  }

  private getPlaylist(librarySlug: string, videoSlug: string, options: StreamOptions): Promise<{ playlistUrl: string }> {
    return this.http.get<{ playlistUrl: string }>(`${environment.API_BASE_URL}/transcode/${librarySlug}/${videoSlug}`, {
      params: {
        startTime: String(options.startTime),
        audioBitrate: String(options.audioBitrate),
        audioCodec: String(options.audioCodec),
        audioChannels: String(options.audioChannels),
        videoBitrate: String(options.videoBitrate),
        videoCodec: String(options.videoCodec),
      },
    }).toPromise();
  }

}

export interface Stream<T> {
  item: T;
  playlistUrl: string;
}

export interface StreamOptions {
  startTime: number;
  audioBitrate: number;
  audioCodec: string;
  audioChannels: number;
  videoBitrate: number;
  videoCodec: string;
}
