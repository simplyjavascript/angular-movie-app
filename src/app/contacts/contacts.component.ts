import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"]
})
export class ContactsComponent implements OnInit {
  contact = {
    name: "Angular Trainings",
    address: "123 Main St, Toronto, L5D 3T3",
    mail: "SOMETHING@GMAIL.COM",
    startDate: new Date(),
    fees: 750,
    description: "For trainings, feel free to get in touch at adress@gmail.com"
  };
  constructor() {}

  ngOnInit() {}
}
