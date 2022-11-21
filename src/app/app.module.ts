import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {MatTreeModule} from '@angular/material/tree';
import {TreeChecklistExample} from './components/material-tree/tree-checklist-example';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

// import {TreeChecklistExample} from './components/material-tree/tree-checklist-example';

@NgModule({
  declarations: [
    AppComponent,
    TreeChecklistExample
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTreeModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    TreeChecklistExample
  ]
})
export class AppModule { }
