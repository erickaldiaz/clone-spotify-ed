import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';
// import { LoginPageComponent } from './auth/pages/login-page/login-page.component';

@NgModule({
  declarations: [// declaraciones componentes directivas pipes
    AppComponent,
  ],
  imports: [// si es modulo se importa
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CookieService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InjectSessionInterceptor,
      multi:true
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
