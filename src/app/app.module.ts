import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BannerComponent } from "./banner/banner.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MovieCornerComponent } from "./movie-corner/movie-corner.component";
import { MovieListItemComponent } from "./movie-list-item/movie-list-item.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { FooterComponent } from "./footer/footer.component";
import { MovieCardComponent } from "./movie-card/movie-card.component";
import { ShadowDirective } from "./shadow.directive";
import { ModalModule } from "ngx-bootstrap/modal";
import { HomeComponent } from "./home/home.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { AppRoutingModule } from "./app-routing.module";
import { NgxMasonryModule } from "ngx-masonry";
import { AddMovieComponent } from "./add-movie/add-movie.component";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    MovieCornerComponent,
    MovieListItemComponent,
    MovieDetailComponent,
    FooterComponent,
    MovieCardComponent,
    ShadowDirective,
    HomeComponent,
    GalleryComponent,
    ContactsComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    NgxMasonryModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [AddMovieComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
