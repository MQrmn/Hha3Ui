import { VacanciesModel } from "../vacancies/vacancies.mobel";

export class ResultCardModel{
    nameOfSearchRequest!: string;
    salaryMin!: number;
    salaryMax!: number;
    salaryMiddle!: number;
    vacanciesNumber!: number;

    constructor(vacanciesarray: VacanciesModel) {

        // this.nameOfSearchRequest = nameOfSearchRequest;
        this.nameOfSearchRequest = "nameOfSearchRequest";
        this.salaryMin = 0; 
        this.salaryMax = 0;
        this.salaryMiddle = 0;
        this.vacanciesNumber = 0;
    }





  }