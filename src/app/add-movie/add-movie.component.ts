import { Component, OnInit, SimpleChanges } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { MovieService } from "../movie.service";
import { Movie } from "../movie-corner/movie.model";

import { BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.scss"]
})
export class AddMovieComponent implements OnInit {
  movieForm: FormGroup;
  selectedMovieId = null;
  editMode = false;
  formTitle: string = "Add New Movie";
  constructor(private movieSvc: MovieService, public bsModalRef: BsModalRef) {}

  get movieCast() {
    return (this.movieForm.get("movieCast") as FormArray).controls;
  }
  get genre() {
    return (this.movieForm.get("genre") as FormArray).controls;
  }

  ngOnInit() {
    this.movieForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      rating: new FormControl(null, Validators.required),
      movieCast: new FormArray([], Validators.required),
      imageUrl: new FormControl(null, Validators.required),
      language: new FormControl(null, Validators.required),
      genre: new FormArray([], Validators.required),
      duration: new FormControl(null, Validators.required),
      popularity: new FormControl(null, Validators.required),
      imdbRating: new FormControl(null, Validators.required),
      synopsis: new FormControl(null, Validators.required)
    });

    this.movieSvc.selectedMovie.subscribe(val => {
      const {
        id,
        cast,
        duration,
        genre,
        imageUrl,
        imdb_rating,
        language,
        name,
        popularity,
        rating,
        synopsis
      } = val;
      this.selectedMovieId = id;
      this.formTitle = "Edit Movie";
      if (id !== null) {
        this.editMode = true;
        let castArr = [];
        let genreArr = [];
        for (let cst of cast) {
          castArr.push(new FormControl(cst));
        }
        for (let gen of genre) {
          genreArr.push(new FormControl(gen));
        }
        this.movieForm = new FormGroup({
          name: new FormControl(name, Validators.required),
          rating: new FormControl(rating, Validators.required),
          movieCast: new FormArray([...castArr], Validators.required),
          imageUrl: new FormControl(imageUrl, Validators.required),
          language: new FormControl(language, Validators.required),
          genre: new FormArray([...genreArr], Validators.required),
          duration: new FormControl(duration, Validators.required),
          popularity: new FormControl(popularity, Validators.required),
          imdbRating: new FormControl(imdb_rating, Validators.required),
          synopsis: new FormControl(synopsis, Validators.required)
        });
      }
    });
  }

  addCast() {
    const ctrl = new FormControl(null);
    (this.movieForm.get("movieCast") as FormArray).push(ctrl);
  }
  addGenre() {
    const ctrl = new FormControl(null);
    (this.movieForm.get("genre") as FormArray).push(ctrl);
  }
  onSubmit() {
    const {
      name,
      rating,
      movieCast,
      imageUrl,
      language,
      genre,
      duration,
      popularity,
      imdbRating,
      synopsis
    } = this.movieForm.value;

    const movieObj: Movie = {
      name,
      rating,
      cast: movieCast,
      imageUrl,
      language,
      genre,
      duration,
      popularity,
      imdb_rating: imdbRating,
      synopsis
    };
    if (this.editMode) {
      console.log("edit mode");
      this.movieSvc
        .updateMovie(movieObj, this.selectedMovieId)
        .subscribe(res => {
          this.bsModalRef.hide();
        });
    } else {
      console.log("add mode");
      this.movieSvc.addMovie(movieObj).subscribe(result => {
        this.bsModalRef.hide();
      });
    }
  }
}
