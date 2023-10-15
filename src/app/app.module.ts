import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DimychHeaderComponent } from './dimych-header/dimych-header.component';
import { ContentSidebarComponent } from './content-sidebar/content-sidebar.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { AngularStartingComponent } from './angular-starting/angular-starting.component';
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DimychHeaderComponent,
    ContentSidebarComponent,
    ContentAreaComponent,
    AngularStartingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
