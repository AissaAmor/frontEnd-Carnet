import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carnet",
  templateUrl: "./carnet.component.html",
  styleUrls: ["./carnet.component.css"]
})
export class CarnetComponent implements OnInit {
  searchText: string = null;
  clickShow = false;
  menu = true;
  dataProfil;
  profile: any;
  profils = [
    { name: "Aissa", number: "123456789" },
    { name: "Amor", number: "123456789" },
    { name: "jassem", number: "123456789" },
    { name: "five", number: "123456789" },
    { name: "points", number: "123456789" },
    { name: "JohnDoe", number: "123456789" },
    { name: "JohnDoe", number: "123456789" },
    { name: "JohnDoe", number: "123456789" },
    { name: "JohnDoe", number: "123456789" }
  ];
  constructor() {}

  ngOnInit(): void {}

  getItems(data) {
    this.clickShow = true;
    this.menu = false;
    this.profile = data;
    console.log(this.profile);
  }
}
