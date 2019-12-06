import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef
} from "@angular/core";
import { Movie } from "../movie-corner/movie.model";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { MovieService } from "../movie.service";
import { AddMovieComponent } from "../add-movie/add-movie.component";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"]
})
export class MovieDetailComponent implements OnInit, OnChanges {
  @Input() selectedMovie: Movie;
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private movieSvc: MovieService
  ) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {}

  editMovie(template: TemplateRef<any>) {
    console.log("Editing...");
    this.movieSvc.selectedMovie.next(this.selectedMovie);
    this.modalRef = this.modalService.show(AddMovieComponent);
  }
  deleteMovie(id: string) {
    this.movieSvc.deleteMovie(id).subscribe(res => {
      console.log("Movie deleted");
    });
  }
}
