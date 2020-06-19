import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { EventEmitterService } from "./services/event-emitter.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = "meal";

  constructor(private Myevent: EventEmitterService) {}

  ngOnInit() {
    this.Myevent.subscribe("Wohoo", (data) => {
      console.log("Am subbed to Wohoo");
    });
    this.Myevent.subscribe("Fire", (data) => {
      console.log("Am subbed to Fire");
    });
    this.Myevent.subscribe("testing", (data) => {
      console.log("Am subbed to testing");
    });
  }

  getChannels(){
    console.log(this.Myevent.getTopic);
  }
  DispatchEvent1() {
    this.Myevent.publish("Wohoo", {
      name: "Dev",
      age: 30,
    });
  }
  DispatchEvent2() {
    this.Myevent.publish("Fire", {
      name: "Dev",
      age: 30,
    });
  }
  DispatchEvent3() {
    this.Myevent.publish("testing", {
      name: "Dev",
      age: 30,
    });
  }
}
