import { Component, OnInit } from "@angular/core";
import { Form, FormControl, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-sub-form",
  templateUrl: "./sub-form.component.html",
  styleUrls: ["./sub-form.component.scss"],
})
export class SubFormComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const phone =  this.fb.group({
      area: [] , 
      prefix: [],
      line: []
    })
    this.myForm = this.fb.group({
      email: "",
      message: "Default value",
      carrier: "",
      cellPhone: phone
    });

    this.myForm.valueChanges.subscribe(console.log);
  }
}
