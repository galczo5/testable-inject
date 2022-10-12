import {Component, ElementRef, Renderer2} from "@angular/core";
import {inject} from "testable-inject";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(elementRef: ElementRef) {
    const renderer = inject(Renderer2);
    renderer.addClass(elementRef.nativeElement, 'class');
  }

}
