import {AppComponent} from "./app.component";
import {Inject} from "testable-inject";
import {Renderer2} from "@angular/core";

describe('AppComponent', () => {

  it('Should mock inject', () => {

    let itWorked = false;

    Inject.mock(Renderer2, {
      addClass() {
        itWorked = true;
      }
    } as unknown as Renderer2)

    new AppComponent({nativeElement: null});

    expect(itWorked).toBeTruthy();
  });

});
