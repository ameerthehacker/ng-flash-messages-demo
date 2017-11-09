import { 
  Component, 
  OnInit 
} from '@angular/core';
import { 
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  flashForm: FormGroup;

  ngOnInit() {
    this.flashForm = new FormGroup({
      message: new FormControl("Hey there i'm a flash message", Validators.required),
      timeout: new FormControl('2000'),
      type: new FormControl('info'),
      dismissible: new FormControl('yes')
    });
  }
  get message(): FormControl {
    return <FormControl>this.flashForm.get('message');
  }
  onFlashFormSubmit() {

  }

}
