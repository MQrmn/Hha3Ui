export class AreaItemNode {
    name: string;
    id:string;
    parent_id: string;
    children!: AreaItemNode[];
    
    constructor(name:string, id:string, parent_id:string){
        this.name = name;
        this.id = id;
        this.parent_id = parent_id;
    }
  }
  
  export class AreaItemFlatNode extends AreaItemNode {
    level!: number;
    expandable!: boolean;
  }