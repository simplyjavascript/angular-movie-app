import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"]
})
export class BannerComponent implements OnInit {
  @ViewChild("myInput", { static: false }) myInput: ElementRef;
  iframeUrl: any;
  nextMovieUrl = "eHzACuCx9zY";
  movieSrc = "zqn1IM2DU8A";

  private setIframeUrl(id) {
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}`
    );
  }
  constructor(private sanitizer: DomSanitizer) {
    this.setIframeUrl(this.movieSrc);
  }

  ngOnInit() {}

  showNextMovie() {
    this.setIframeUrl(this.nextMovieUrl);
  }
}
