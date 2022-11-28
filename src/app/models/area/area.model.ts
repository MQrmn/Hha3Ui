export class Area {
    name: string;
    id:string;
    parent_id: string;
    areas?: Array<Area>;
  
    constructor(name: string, id: string, parentId: string, areas: Array<Area>){
      this.name = name;
      this.id = id;
      this.parent_id = parentId;
      this.areas = areas;
  }
  }