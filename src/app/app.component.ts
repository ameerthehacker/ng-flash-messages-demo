import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { NgFlashMessageService } from "ng-flash-messages";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  flashForm: FormGroup;

  constructor(private ngFlashMessageService: NgFlashMessageService) {}

  ngOnInit() {
    this.flashForm = new FormGroup({
      message: new FormControl(
        "Hey there i'm a flash message",
        Validators.required
      ),
      timeout: new FormControl("2000"),
      type: new FormControl("info"),
      dismissible: new FormControl("no")
    });
  }
  get message(): FormControl {
    return <FormControl>this.flashForm.get("message");
  }
  get timeout(): FormControl {
    return <FormControl>this.flashForm.get("timeout");
  }
  get type(): FormControl {
    return <FormControl>this.flashForm.get("type");
  }
  get dismissible(): FormControl {
    return <FormControl>this.flashForm.get("dismissible");
  }
  onFlashFormSubmit() {
    let flashMessage = {
      messages: [this.message.value],
      timeout: this.timeout.value,
      type: this.type.value,
      centerAlign: true,
      dismissible: this.dismissible.value == "yes" ? true : false
    };

    this.ngFlashMessageService.showFlashMessage(flashMessage);
  }
}
