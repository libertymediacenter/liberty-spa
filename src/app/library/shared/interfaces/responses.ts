export interface LibertyCollection<T> {
  data: T,
  count: number;
}

export interface LibertyGenre {
  name: string;
}

export interface LibertyPerson {
  name: string;
  slug: string;
  bio?: string;
  imdbId?: string;
  tmdbId?: string;
  image?: string,
}

export interface LibertyCast {
  role: string;
  order: number;
  person: LibertyPerson;
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
  genres: LibertyGenre[];
  cast: LibertyCast[];
}
