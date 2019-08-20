import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  myDateValue: Date;
  passengerForm = {
    formGroup: new FormGroup({}),
    model: {},
    options: {
      formState: {
        submitted: false
      }
    },
    fields: [
      {
        key: 'date',
        type: 'datepicker',
        templateOptions: {
          required: true,
          label: 'Date example'
        }
      },
    ]
  }
  ngOnInit() {
  }

  
}
