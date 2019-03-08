import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MovieItem } from '../shared/interfaces/media';
import { LibertyCast, LibertyCollection, LibertyGenre, LibertyMovie } from '../shared/interfaces/responses';

@Injectable()
export class MovieService {
  private _done = new BehaviorSubject(false);
  private _loading = new BehaviorSubject(false);
  private _data = new BehaviorSubject<MovieItem[]>([]);

  private _baseUrl = environment.API_BASE_URL;
  private _assetBaseUrl = environment.ASSET_BASE_URL;

  private _page = 1;
  private _perPage = 64;

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
      if (res.data.length === 0) {
        this._done.next(true);
      } else {
        this.mapCollection(res);
      }
    });
  }

  public reset() {
    this._page = 1;
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

    const sortStarring = (cast: LibertyCast[]) => {
      const sorted = cast.sort((a, b) => {
        return a.order - b.order;
      });

      return sorted.filter((x) => {
        if (x.order < 3) {
          return x;
        }
      });
    };

    const getGenres = (genres: LibertyGenre[]) => {
      return genres.filter((x, idx) => {
        if (idx < 2) {
          return x;
        }
      });
    };

    const items = collection.data.map((movie) => <MovieItem> ({
      title: movie.title,
      releaseYear: movie.year,
      runtime: movie.runtime,
      imageUrl: getImageUrl(movie.poster, '155x255'),
      backdropUrl: getImageUrl(movie.backdrop, '768x432'),
      tagline: movie.tagline,
      summary: movie.plot,
      genres: getGenres(movie.genres),
      starring: sortStarring(movie.cast).map((x) => ({
        displayName: x.person.name,
        slug: x.person.slug,
      })),
      ratings: null,
      awards: null,
      slug: movie.slug,
      librarySlug: movie.library.slug,
      libraryType: movie.library.type,
    }));

    this._data.next(items);
    this._loading.next(false);

    if (!collection.data.length) {
      this._done.next(true);
    }
  }
}
