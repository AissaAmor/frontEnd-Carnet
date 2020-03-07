import { Component, OnInit } from "@angular/core";
import { AlphabetPipe } from "../pipe/alphabet.pipe";

@Component({
  selector: "app-carnet",
  templateUrl: "./carnet.component.html",
  styleUrls: ["./carnet.component.css"]
})
export class CarnetComponent implements OnInit {
  searchText: "";
  alphaValue;
  clickShow = false;
  menu = true;
  dataProfil;
  profile: any;
  table: any[] = [];
  alphTab = [
    { char: "A" },
    { char: "B" },
    { char: "C" },
    { char: "D" },
    { char: "E" },
    { char: "F" },
    { char: "G" },
    { char: "H" },
    { char: "I" },
    { char: "J" },
    { char: "K" },
    { char: "L" },
    { char: "M" },
    { char: "N" },
    { char: "O" },
    { char: "P" },
    { char: "Q" },
    { char: "R" },
    { char: "S" },
    { char: "T" },
    { char: "U" },
    { char: "V" },
    { char: "W" },
    { char: "X" },
    { char: "Y" },
    { char: "Z" }
  ];
  profils = [
    { name: "Aissa", number: "123456789" },
    { name: "Amor", number: "123456789" },
    { name: "jassem", number: "123456789" },
    { name: "five", number: "123456789" },
    { name: "Points", number: "123456789" },
    { name: "JohnDoe", number: "123456789" },
    { name: "JohnDoe", number: "123456789" },
    { name: "JohnDoe", number: "123456789" },
    { name: "JohnDoe", number: "123456789" }
  ];
  constructor() {}

  ngOnInit(): void {
    this.table = this.profils;
  }

  getItems(data) {
    this.clickShow = true;
    this.menu = false;
    this.profile = data;
    console.log(this.profile);
  }
  alphSearch(alpha) {
    console.log(alpha);
    const p = new AlphabetPipe();
    this.table = p.transform(this.profils, alpha);
  }
}
