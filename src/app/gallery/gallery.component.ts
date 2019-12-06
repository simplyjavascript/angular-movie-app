import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";
import { Movie } from "../movie-corner/movie.model";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieSvc: MovieService) {}

  ngOnInit() {
    this.movieSvc.getMovies().subscribe(movies => (this.movies = movies));
  }
}
