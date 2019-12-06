import { Component, OnInit } from "@angular/core";
import { faCoffee, faFilm } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  logoText = "movies";
  faFilm = faFilm;
  navItems = [
    { id: 1, text: "Home", path: "/home" },
    { id: 2, text: "Gallery", path: "/gallery" },
    { id: 3, text: "Contact", path: "/contact" }
  ];

  constructor() {}

  ngOnInit() {}
}
