import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Material
import {MatTreeModule} from '@angular/material/tree';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

// HHa Components
import {AppHeaderComponent} from './components/header/header.component';
import {AppSearchPanelComponent} from './components/search-settings-panel/search-panel.component';
import {TreeChecklistExample} from './components/hha-areas-tree/hha-areas-tree';
import {AppResultPanelComponent} from './components/result-panel/result-panel';
import {AppFooterComponent} from './components/footer/footer';
import {AppSearchFormComponent} from './components/search-form/search-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeChecklistExample,
    AppHeaderComponent,
    AppResultPanelComponent,
    AppFooterComponent,
    AppSearchPanelComponent,
    AppSearchFormComponent,
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
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    TreeChecklistExample
  ]
})
export class AppModule { }
