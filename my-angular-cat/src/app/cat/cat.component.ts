import { RouterModule, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { CatService } from "../cat.service";
import { CatImage } from "../models/cat-image.model";

@Component({
  selector: "app-cat",
  templateUrl: "./cat.component.html",
  styleUrls: ["./cat.component.css"]
})
export class CatComponent implements OnInit {
  constructor(private route: ActivatedRoute, private catService: CatService) {}

  ngOnInit() {
    if (this.image === undefined) {
      this.catService.fetchImage(this.id);
    }
  }

  get id() {
    return this.route.snapshot.paramMap.get("cat-id");
  }

  get image() {
    return this.catService.findImage(this.id);
  }
}
