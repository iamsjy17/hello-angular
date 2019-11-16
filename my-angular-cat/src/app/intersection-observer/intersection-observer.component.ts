import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "intersection-observer",
  template: `
    <div #anchor></div>
  `
})
export class IntersectionObserverComponent implements OnInit {
  @Output()
  intersect = new EventEmitter();

  @ViewChild("anchor", {
    static: true
  })
  anchor: ElementRef<HTMLDivElement>;
  observer: IntersectionObserver;

  constructor() {}

  ngOnInit() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.intersect.emit();
      }
    });

    this.observer.observe(this.anchor.nativeElement);
  }
  ngOnDestroy() {
    this.observer.disconnect();
  }
}
