import { Genre, Person, Rating } from '../interfaces/media';

export interface InfoView {
  title: string;
  year?: number;
  imageUrl?: string;
  runtime?: number;
  genres?: Genre[];
  tagline?: string;
  summary?: string;
  starring?: Person[];
  ratings?: Rating[];
  awards?: string[];
}
