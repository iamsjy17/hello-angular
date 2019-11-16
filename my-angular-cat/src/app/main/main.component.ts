import { CatImage } from "./../models/cat-image.model";
import { Component, OnInit } from "@angular/core";
import { CatService } from "../cat.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  constructor(private catService: CatService) {}

  ngOnInit() {
    if (this.images.length === 0) {
      this.catService.fetchImages();
    }
  }

  get images() {
    return this.catService.catImages;
  }

  onIntersect() {
    this.catService.fetchImages();
  }
}
