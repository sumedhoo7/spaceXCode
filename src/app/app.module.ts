import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppServer } from './app.server'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppServer],
  bootstrap: [AppComponent]
})
export class AppModule { }
