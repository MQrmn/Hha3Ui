export class VacanciesModel{
    items!: VacancyModel[];
  }

class VacancyModel{
    area!: Area;
    name!: string;
    salary!: Salary;
    schedule!: Shedule;
    constructor() {}
  }

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
  

  
 