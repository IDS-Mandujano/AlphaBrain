// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SecurityModule } from './security/security.module';
import { AppComponent } from './app.component';
import { UploadFileModule } from "./upload-file/upload-file.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SecurityModule,
    UploadFileModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }