import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MovieItem } from '../shared/interfaces/media';
import { LibertyCollection, LibertyMovie } from '../shared/interfaces/responses';

@Injectable()
export class MovieService {
  private _done = new BehaviorSubject(false);
  private _loading = new BehaviorSubject(false);
  private _data = new BehaviorSubject<MovieItem[]>([]);

  private _baseUrl = environment.API_BASE_URL;
  private _assetBaseUrl = environment.ASSET_BASE_URL;

  private _page = 1;
  private _perPage = 32;

  data: Observable<MovieItem[]>;
  done: Observable<boolean> = this._done.asObservable();
  loading: Observable<boolean> = this._loading.asObservable();

  constructor(private http: HttpClient) {
    this.data = this._data.asObservable();
  }

  public more() {
    if (this._done.value || this._loading.value) {
      return;
    }

    this._loading.next(true);

    this.http.get<LibertyCollection<LibertyMovie[]>>(`${this._baseUrl}/movies`, {
      params: {
        page: this._page.toString(),
        perPage: this._perPage.toString(),
      },
    }).subscribe((res) => {
      this.mapCollection(res);
    });
  }

  private mapCollection(collection: LibertyCollection<LibertyMovie[]>) {
    this._page++;

    const getImageUrl = (image: string, dimensions) => {
      if (!image) {
        return null;
      }

      const imageFile = image.replace('images/', '');

      return `${this._assetBaseUrl}/images/${dimensions}/${imageFile}`;
    };

    const items = collection.data.map((movie) => <MovieItem> ({
      title: movie.title,
      releaseYear: movie.year,
      runtime: movie.runtime,
      imageUrl: getImageUrl(movie.poster, '155x255'),
      backdropUrl: getImageUrl(movie.backdrop, '768x432'),
      tagline: movie.tagline,
      summary: movie.plot,
      genres: null,
      starring: null,
      ratings: null,
      awards: null,
    }));

    this._data.next(items);
    this._loading.next(false);

    if (!collection.data.length) {
      this._done.next(true);
    }
  }
}
