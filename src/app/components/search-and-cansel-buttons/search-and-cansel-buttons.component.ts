import { Component } from '@angular/core';
import { VacancyRepositoryService } from 'src/app/services/vacancy-repository/vacancy-repository.service';

@Component({
  selector: 'app-search-and-cansel-buttons',
  templateUrl: './search-and-cansel-buttons.component.html',
  styleUrls: ['./search-and-cansel-buttons.component.scss'],
  providers: []
  
})
export class SearchAndCanselButtonsComponent {
  constructor(private _vacancyRepositoryService: VacancyRepositoryService){}
  getVacanciesFromHhApi(){
    this._vacancyRepositoryService.fillVacancies();
  }
}
