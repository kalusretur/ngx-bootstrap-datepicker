import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AppComponent } from './app.component';
import { DatepickerTypeComponent } from './type';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { fr } from 'ngx-bootstrap/locale';
defineLocale('fr', fr);

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot() ,
    FormlyModule.forRoot({
      types: [{
					name: 'datepicker',
					component: DatepickerTypeComponent,
					defaultOptions: {
						templateOptions: {
							datepickerOptions: {}
						}
					}
				},]
    }),
    FormlyBootstrapModule
  ],
  declarations: [ AppComponent,DatepickerTypeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
