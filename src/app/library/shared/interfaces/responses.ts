export interface LibertyCollection<T> {
  data: T,
  count: number;
}

export interface LibertyMovie {
  title: string;
  slug: string;
  year: number | null;
  runtime: number | null;
  released: Date;
  tagline: string | null;
  plot: string | null;
  imdbId: string | null;
  theMovieDbId: string | null;
  path: string;
  poster: string | null;
  backdrop: string | null;
}
