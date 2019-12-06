import { Injectable } from "@angular/core";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { Movie } from "./movie-corner/movie.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class MovieService {
  selectedMovie = new BehaviorSubject<Movie>(null);
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie>("https://movieapp-9dd4f.firebaseio.com/movies.json")
      .pipe(
        map(movie => {
          const moviesArr: Movie[] = [];
          Object.keys(movie).forEach(mv => {
            const movieObj: Movie = {
              id: mv,
              ...movie[mv]
            };
            moviesArr.push(movieObj);
          });
          return moviesArr;
        })
      );
  }
  addMovie(movie) {
    return this.http.post("https://movieapp-9dd4f.firebaseio.com/movies.json", {
      ...movie
    });
  }

  deleteMovie(id) {
    return this.http.delete(
      `https://movieapp-9dd4f.firebaseio.com/movies/${id}.json`
    );
  }

  updateMovie(movie, id) {
    console.log(movie);
    return this.http.put(
      `https://movieapp-9dd4f.firebaseio.com/movies/${id}.json`,
      movie
    );
  }
}
