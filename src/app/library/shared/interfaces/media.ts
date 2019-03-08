export interface Genre {
  name: string;
}

export interface Person {
  displayName: string;
  slug: string;
}

export interface Rating {
  sourceName: string;
  sourceUrl: string;
  displayScore: string;
  score: number;
}

export interface VideoItem {
  title: string;
  slug: string;
  releaseYear?: number;
  runtime?: number;
  imageUrl?: string;
  backdropUrl?: string;
  tagline?: string;
  summary?: string;
  genres?: Genre[];
  starring?: Person[];
  ratings?: Rating[];
  awards?: string[];
  librarySlug: string;
  libraryType: string;
}

export interface MovieItem extends VideoItem {
}

export interface SeriesItem extends VideoItem {
  seasons: number;
}
