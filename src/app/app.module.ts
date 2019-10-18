import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeListComponent } from './employee-list-component/employee-list-component.component';
import { EmployeeCountComponent } from './employee-count-component/employee-count-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, EmployeeListComponent, EmployeeCountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
