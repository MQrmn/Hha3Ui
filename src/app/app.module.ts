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
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

// HHa Components
import {AppHeaderComponent} from './components/header/header.component';
import {AppSearchPanelComponent} from './components/search-panel/search-panel.component';
import {TreeChecklistExample} from './components/areas-tree/areas-tree.component';
import {AppResultPanelComponent} from './components/result-panel/result-panel';
import {AppFooterComponent} from './components/footer/footer';
import {AppSearchFormComponent} from './components/search-vacancy-form/search-vacancy-form.component';
import {AppSearchExpansionPanelComponent } from './components/search-expansion-panel/search-expansion-panel.component';
import {SearchCityFormComponent } from './components/search-city-form/search-city-form.component';

// Services
import {SearchRequestData} from './services/search-request-data/search-request-data.service'

@NgModule({
  declarations: [
    AppComponent,
    TreeChecklistExample,
    AppHeaderComponent,
    AppResultPanelComponent,
    AppFooterComponent,
    AppSearchPanelComponent,
    AppSearchFormComponent,
    AppSearchExpansionPanelComponent,
    SearchCityFormComponent
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
    MatExpansionModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [
    SearchRequestData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
