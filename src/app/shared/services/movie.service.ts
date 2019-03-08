import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LibertyMovie } from '../../library/shared/interfaces/responses';

@Injectable()
export class MovieService {
  private _baseUrl = `${environment.API_BASE_URL}/movies`;

  constructor(private http: HttpClient) {
  }

  public async getMovie(librarySlug: string, movieSlug: string): Promise<LibertyMovie> {
    return this.http.get<LibertyMovie>(`${this._baseUrl}/${movieSlug}`).toPromise();
  }

}
