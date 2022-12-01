import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { SearchRequestDataService } from '../search-request-data/search-request-data.service';

class Area {
  id!: string;
  name!: string;
}

class Salary {
  from!: number;
  to!: number;
}

class Shedule {
  id!: string;
  name!: string;
}

class VacancyModel{
  area!: Area;
  name!: string;
  salary!: Salary;
  schedule!: Shedule;
  constructor() {}
}

class VacanciesModel{
  items!: VacancyModel[];
}

@Injectable()
export class VacancyRepositoryService{

    vacancies: any;

    constructor(private _httpService: HttpService, private _searchRequestDataService: SearchRequestDataService) {
      this.vacancies = new VacanciesModel();
    }

    fillVacancies(){
      this._httpService.get2<VacanciesModel>("https://api.hh.ru/vacancies/", { 
          params : {
                    text: this._searchRequestDataService.SearchPhrase,
                    area: this._searchRequestDataService.SelectedAreas,
                    per_page: 100
                  }
          
        }).subscribe(responce => {
          this.vacancies = responce;
          console.log("Result", this.vacancies.items);
        });

        // this.getVacanciesFromHhApi().subscribe(responce => this.vacancies = responce);
        // console.log("Result", this.vacancies);
    }

    private getVacanciesFromHhApi(){
        
        return this._httpService.get2<VacanciesModel>("https://api.hh.ru/vacancies/", { 
          params : {
                    text: this._searchRequestDataService.SearchPhrase,
                    area: this._searchRequestDataService.SelectedAreas,
                    per_page: 100
                  }
          
        });
      }

}