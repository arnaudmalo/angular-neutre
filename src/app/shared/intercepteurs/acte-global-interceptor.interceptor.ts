import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, finalize, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

/* SIGED GLOBAL INTERCEPTOR:

 * 1- ADDS USER TOKEN TO REQUESTS HEADER :
 *** For each outgoing reqs, [only outgoing reqs for now]
 *** add the user token to its header before send to backend

 * 2- MANAGES API CALL ERRORS AT A GLOBAL LEVEL :
 *** For each api call that generates an error
 *** manages the error at a root level
 *** No need to deal with errors in the api.service.ts anymore

  * 3- MANAGES THE VISIBILITY OF THE SHARED LOADING SPINNER COMPONENT AT A GLOBAL LEVEL :
 *** Whenever an api call is made
 *** it sets the visibility of the global shared loading spinner component to true
 *** this will display the spinner on the page where it is set
 *** and when the api cal ends (success or error), its turns back the visibility of the spinner to false

*/

@Injectable()
export class ActeGlobalInterceptor implements HttpInterceptor {
  userToken!: string | null;
  totalRequests = 0;
  completedRequests = 0;

  constructor(
    private router: Router,
  ) { }


  /* Here is the actual interceptor that deals w/ all incoming/outgoing reqs */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.totalRequests++;
    console.log(`Global interceptor processing request :  ${request.url}`);

    /* get the user token from local storage */
    this.userToken = localStorage.getItem('accessToken');
    const token = this.userToken;

    var changedReq = request;
    // if (token && !request.url.endsWith('sign-in') && !request.url.endsWith('tickets')) {
    //   const params = request.url.includes('?') ? '&alf_ticket=' + token : '?alf_ticket=' + token ;

    //   if(!request.url.includes('versions/1/nodes')){
    //     let mimeType='application/json';
    //     changedReq = request.clone({

    //       setHeaders: {
    //         'Content-Type': mimeType
    //       },
    //     });
    //   }

    //  // changedReq = changedReq.clone({ url: request.url + params });
    //   if(!changedReq.url.includes("alf_ticket")){
    //     changedReq = changedReq.clone({ url: changedReq.url + params });
    // }
    // } else {
      let mimeType='application/json';
      changedReq = request
        .clone({
          setHeaders: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': mimeType
          }
        })
        .clone({url:request.url});
      console.log("Global Acte", changedReq)

    // }

    return next.handle(changedReq).pipe(
      catchError((error) => {
        if (error.status === 401) {
          console.log("Token expired");
        }

        return throwError(() => error);
      }),
      finalize(() => {
        //
      })
    );
  }

  /* here is the function that handles the global errors of the whole application */
  globalErrorHandler(error: HttpErrorResponse) {
    let errMsg = `
    -----------------------------
    GLOBAL ERROR HANDLER
    -----------------------------
    -- ${error.name} trying to access ${error.url}
    -- Request error code : ${error.status}
    `;

    return throwError(() => errMsg);
  }
}
