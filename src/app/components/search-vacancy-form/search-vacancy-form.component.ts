import { Component } from '@angular/core';
import {SearchRequestDataService} from '../../services/search-request-data/search-request-data.service';

@Component({
  selector: 'app-search-vacancy-form',
  templateUrl: './search-vacancy-form.component.html',
  styleUrls: ['./search-vacancy-form.component.scss'],
})
export class AppSearchFormComponent {
  vacancyName: string;

  constructor(private _searchRequestDataService: SearchRequestDataService) {
    this.vacancyName = this._searchRequestDataService.SearchPhrase;
  }

  changeServiceValue(){
    this._searchRequestDataService.SearchPhrase  = this.vacancyName;
  }

  testLog(){
    console.log(this._searchRequestDataService);
  }
}
