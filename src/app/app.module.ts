import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HraComponent } from './hra/hra.component';
// Import relevant http modules
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HhJsonpService } from './services/hh-jsonp.service';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Import relevant http modules
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [HhJsonpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
