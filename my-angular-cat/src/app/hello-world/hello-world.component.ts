// src/app/hello-world/hello-world.component.ts

import { Component } from "@angular/core";

//<hello-world></hello-world>
//app.module.ts에 선언을 해주어야 사용할 수 있다.
//@? Decorator 선언된 클래스를 꾸며주는 역할
//@Component? 컴포넌트를 정의하는데 있어서 필수적인 데코레이터.
@Component({
  selector: "hello-world",
  template: "<h1>Hello world!</h1>"
})
export class HelloWorldComponent {}
