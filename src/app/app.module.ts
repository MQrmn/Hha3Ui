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
import {MatButtonModule} from '@angular/material/button';

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
import { HttpService } from './services/http/http.service';
import { SearchRequestDataService } from './services/search-request-data/search-request-data.service';
import { SearchAndCanselButtonsComponent } from './components/search-and-cansel-buttons/search-and-cansel-buttons.component'
import { VacancyRepositoryService } from './services/vacancy-repository/vacancy-repository.service';
import { ResultCardComponent } from './components/result-card/result-card.component';

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
    SearchCityFormComponent,
    SearchAndCanselButtonsComponent,
    ResultCardComponent
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
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    SearchRequestDataService,
    VacancyRepositoryService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
