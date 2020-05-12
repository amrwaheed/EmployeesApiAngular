import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Angular Forms Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './core/header/header.component';

// MDB Angular Free
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './core/home/home.component';
import { ErrorInterceptor } from './error.interseptor';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,

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
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS ,useClass:ErrorInterceptor , multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
