import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { CatComponent } from "./cat/cat.component";
import { MainComponent } from "./main/main.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { IntersectionObserverComponent } from './intersection-observer/intersection-observer.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CatComponent,
    MainComponent,
    IntersectionObserverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: MainComponent },
      { path: "cats/:cat-id", component: CatComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
