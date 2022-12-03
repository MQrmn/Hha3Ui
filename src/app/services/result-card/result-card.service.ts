// import {ResultCardModel} from "../../models/result-card/result-card.model";
import { ResultCardModel } from "../../models/result-card/result-card.model";
import { VacancyRepositoryService } from "../../services/vacancy-repository/vacancy-repository.service";
import { VacanciesModel } from "../../models/vacancies/vacancies.mobel";

export class ResultCardService {

    resultCards!: ResultCardModel[];
    constructor(private _vacancyRepositoryService: VacancyRepositoryService) {}

    addResultCard(){
        this.resultCards.push(new ResultCardModel(this._vacancyRepositoryService.vacancies))
    }
}