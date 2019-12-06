export interface Movie {
  id?: string;
  name: string;
  rating: number;
  cast: string[];
  imageUrl: string;
  language: string;
  genre: string[];
  duration: string;
  popularity: number;
  imdb_rating: number;
  synopsis: string;
}
