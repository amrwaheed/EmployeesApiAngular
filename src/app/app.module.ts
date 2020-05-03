import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Angular Forms Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './core/header/header.component';
import { EmoployeesComponent } from './features/emoployees/emoployees.component';
import { CreateEmployeeComponent } from './features/create-employee/create-employee.component';
// MDB Angular Free
import { ToastrModule } from 'ngx-toastr';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmoployeesComponent,
    CreateEmployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
