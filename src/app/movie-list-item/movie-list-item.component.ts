import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";
import { Movie } from "../movie-corner/movie.model";
import { faHeart, faChevronRight } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-movie-list-item",
  templateUrl: "./movie-list-item.component.html",
  styleUrls: ["./movie-list-item.component.scss"]
})
export class MovieListItemComponent implements OnInit {
  faChevronRight = faChevronRight;
  classId: string;
  @Input() movie: Movie;
  @Input() selectedId;
  @Output() movieSelected = new EventEmitter<Movie>();
  constructor() {}

  ngOnInit() {
    this.classId = this.selectedId;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.classId = this.selectedId;
  }

  selectMovie(movie: Movie) {
    this.movieSelected.emit(movie);
  }
}
