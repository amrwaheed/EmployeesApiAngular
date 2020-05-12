import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent, HttpErrorResponse } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { catchError} from "rxjs/operators"
import {  Observable, throwError } from 'rxjs';


import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private toastr: ToastrService
      ){
    
      }
    intercept(req: HttpRequest<any>,
              next: HttpHandler) : Observable<HttpEvent<any>> {

      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse)=>{
            let errorMessage = "An unkown error occurred!"
            console.log(error)
            if (error.error.message) {
              console.log(error)
                errorMessage = error.error.message;
            }
            this.toastr.error(errorMessage, 'Error');
            return throwError(error)
        })
    );
 
        
    }
}