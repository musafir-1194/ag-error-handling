import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import { WidgetComponent } from "./widget/widget.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { CustomErrorHandler } from './custom-error-handler.service';
import { GlobalHttpErrorHandlerInterceptor } from './global-http-error-handler.interceptor';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
      {
        provide: ErrorHandler,
        useClass: CustomErrorHandler
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: GlobalHttpErrorHandlerInterceptor,
        multi: true
      }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatToolbarModule,
        MatSnackBarModule,
        WidgetComponent,
    ]
})
export class AppModule { }
