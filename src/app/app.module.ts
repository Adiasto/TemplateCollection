import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateLibraryComponent } from './template/template-library/template-library.component';
import { Template1Component } from './template/template1/template1.component';
import { Header1Component } from './headers/header1/header1.component';
import { Cover1Component } from './cover/cover1/cover1.component';
import { BgInfo1Component } from './bg-info/bg-info1/bg-info1.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateLibraryComponent,
    Template1Component,
    Header1Component,
    Cover1Component,
    BgInfo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
