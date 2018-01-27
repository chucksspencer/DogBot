import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DispenserComponent } from './components/dispenser/dispenser.component';
import { AppRoutingModule } from './routing/routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DispenserService } from './services/dispenser.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DefaultRequestOptions, requestOptionsProvider } from './services/default-request-options.service';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { TweakComponent } from './components/tweak/tweak.component';

@NgModule({
  declarations: [
    AppComponent,
    DispenserComponent,
    TweakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule
  ],
  providers: [
    DispenserService,
    DefaultRequestOptions,
    requestOptionsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
