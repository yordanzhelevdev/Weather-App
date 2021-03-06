import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-days",
  templateUrl: "./days.component.html",
  styleUrls: ["./days.component.css"]
})
export class DaysComponent implements OnInit {
  @Input()
  weekly: Array<object>;

  constructor() {}

  ngOnInit() {}
}
