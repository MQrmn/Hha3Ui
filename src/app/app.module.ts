import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }   from '@angular/common/http';

import {MatTreeModule} from '@angular/material/tree';
import {TreeChecklistExample} from './components/hha-areas-tree/hha-areas-tree';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import {HhaHeader} from './components/header/hha-header';


@NgModule({
  declarations: [
    AppComponent,
    TreeChecklistExample,
    HhaHeader
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTreeModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    TreeChecklistExample
  ]
})
export class AppModule { }
