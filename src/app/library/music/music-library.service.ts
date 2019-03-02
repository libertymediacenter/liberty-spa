import { Injectable } from '@angular/core';

export interface Track {
  trackNo: number;
  label: string;
  length: number;
}

export interface Artist {
  label: string;
  slug: string;
}

export interface Genre {
  label: string;
  slug: string;
}

export interface Album {
  coverPath: string;
  title: string;
  year: number;

  artists: Artist[];
  genres: Genre[];
  tracks: Track[];
}


@Injectable()
export class MusicLibraryService {

  public getAlbums() {
    const albums: Album[] = [];

    albums.push({
      coverPath: '',
      title: 'Doomsday Machine',
      year: 2012,
      artists: [
        { label: 'Arch Enemy', slug: 'arch-enemy' },
      ],
      genres: [
        { label: 'Heavy Metal', slug: 'heavy-metal' },
      ],
      tracks: [
        { trackNo: 1, label: 'Enter the Machine', length: 2.02 },
        { trackNo: 2, label: 'Taking Back My Soul', length: 4.35 },
        { trackNo: 3, label: 'Nemesis', length: 4.12 },
        { trackNo: 4, label: 'Enter the Machine', length: 2.02 },
        { trackNo: 5, label: 'Taking Back My Soul', length: 4.35 },
        { trackNo: 6, label: 'Nemesis', length: 4.12 },
        { trackNo: 7, label: 'Enter the Machine', length: 2.02 },
        { trackNo: 8, label: 'Taking Back My Soul', length: 4.35 },
        { trackNo: 9, label: 'Nemesis', length: 4.12 },
        { trackNo: 10, label: 'Enter the Machine', length: 2.02 },
      ],
    });

    return albums;
  }

}
