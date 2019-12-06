import { Component, OnInit } from "@angular/core";
import { Movie } from "./movie.model";
import { MovieService } from "../movie.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { AddMovieComponent } from "../add-movie/add-movie.component";
@Component({
  selector: "app-movie-corner",
  templateUrl: "./movie-corner.component.html",
  styleUrls: ["./movie-corner.component.scss"]
})
export class MovieCornerComponent implements OnInit {
  selectedMovie: Movie;
  selectedId: string;
  movies: Movie[] = [];
  bsModalRef: BsModalRef;
  config = {
    animated: true
  };
  constructor(
    private movieService: MovieService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.selectedMovie = this.movies[0];
      this.selectedId = this.selectedMovie.id;
    });
  }

  onMovieSelected(movie: Movie) {
    this.selectedMovie = movie;
    this.selectedId = this.selectedMovie.id;
    console.log(this.selectedMovie);
  }
  addNewMovie() {
    this.bsModalRef = this.modalService.show(AddMovieComponent, this.config);
    this.bsModalRef.content.closeBtnName = "Close";
  }
}
