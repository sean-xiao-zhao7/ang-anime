import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  animations: [
    trigger("divState", [
      state(
        "normal",
        style({
          "background-color": "red",
          transform: "translateX(0)",
        })
      ),
      state(
        "highlighted",
        style({
          "background-color": "green",
          transform: "translateX(100px)",
        })
      ),
      transition("normal <=> highlighted", animate(300)),
    ]),
    trigger("wildState", [
      state(
        "normal",
        style({
          "background-color": "red",
          transform: "translateX(0)",
        })
      ),
      state(
        "costanza",
        style({
          "background-color": "green",
          transform: "translateX(0px) scale(0.3)",
        })
      ),
      transition("costanza <=> *", [
        animate(
          1000,
          style({
            "border-radius": "50px",
          })
        ),
        animate(
          500,
          style({
            "background-color": "orange",
          })
        ),
        animate(500),
      ]),
    ]),
    trigger("list1", [
      state(
        "in",
        style({
          opacity: "1",
          transform: "translateX(0)",
        })
      ),
      transition("void => *", [
        style({ opacity: 0, transform: "translateX(-200px)" }),
        animate(300),
      ]),
      transition("* => void", [
        animate(300, style({ opacity: 0, transform: "translateX(200px)" })),
      ]),
    ]),
  ],
})
export class AppComponent {
  state = "normal";
  wildState = "normal";

  list = ["Milk", "Sugar", "Bread"];

  onAnimate() {
    this.state == "normal"
      ? (this.state = "highlighted")
      : (this.state = "normal");
  }

  onCostanza() {
    this.wildState = "costanza";
  }

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(index) {
    this.list.splice(index, 1);
  }
}
