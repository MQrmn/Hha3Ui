import {Component} from '@angular/core';
import { VacancyRepositoryService } from 'src/app/services/vacancy-repository/vacancy-repository.service';

@Component({
    selector: 'app-result-panel',
    templateUrl: 'result-panel.html',
    providers: [],
  })
  export class AppResultPanelComponent {
    constructor( public _vacancyRepositoryService: VacancyRepositoryService) {}

    data: any = this._vacancyRepositoryService.vacancies.items;

  }