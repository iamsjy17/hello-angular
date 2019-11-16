import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CatImage } from "./models/cat-image.model";

@Injectable({
  providedIn: "root"
})
export class CatService {
  catImages: CatImage[] = [];

  constructor(private http: HttpClient) {}

  fetchImages() {
    this.http
      .get<CatImage[]>("https://api.thecatapi.com/v1/images/search", {
        headers: new HttpHeaders({
          "x-api-key": "4a5fca65-9a9d-4c62-9930-0c8f69bbcaf8"
        }),
        params: {
          limit: "10", // limits에 지정한 갯수만큼 냥짤을 얻어옵니다.
          page: "1"
        }
      })
      .subscribe(images => {
        this.catImages = [...this.catImages, ...images];
      });
  }
  fetchImage(id: string) {
    this.http
      .get<CatImage>(`https://api.thecatapi.com/v1/images/${id}`, {
        headers: new HttpHeaders({
          "x-api-key": "4a5fca65-9a9d-4c62-9930-0c8f69bbcaf8"
        })
      })
      .subscribe(image => {
        this.catImages = [...this.catImages, image];
      });
  }
  getImage(id: string) {
    return this.http.get<CatImage>(
      `https://api.thecatapi.com/v1/images/${id}`,
      {
        headers: new HttpHeaders({
          "x-api-key": "4a5fca65-9a9d-4c62-9930-0c8f69bbcaf8"
        })
      }
    );
  }
  findImage(id: string) {
    return this.catImages.find(image => image.id === id);
  }
}
