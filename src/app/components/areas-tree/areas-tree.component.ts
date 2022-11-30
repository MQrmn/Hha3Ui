import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Area } from 'src/app/models/area/area.model';
import { AreaItemNode, AreaItemFlatNode } from 'src/app/models/todo-item-node/todo-item-node.model';
import {SearchRequestDataService} from '../../services/search-request-data/search-request-data.service';
import { HttpService } from 'src/app/services/http/http.service';

var areasTree: any = {};

@Injectable()
export class ChecklistDatabase {
  dataChange = new BehaviorSubject<AreaItemNode[]>([]);

  getAreasFromApi(){

    this._httpService.get<Area>('https://api.hh.ru/areas/113').subscribe(response => {
      areasTree = response.areas;
      this.initialize();
    })
  }

  constructor(private http: HttpClient, private _httpService: HttpService) {
    this.getAreasFromApi();
    this.initialize();
  }

  get data(): AreaItemNode[] {
    return this.dataChange.value;
  }

 initialize() {
    const data = this.buildFileTree(areasTree, 0);
    this.dataChange.next(data);
  }


  buildFileTree(obj: {[key: string]: any}, level: number): AreaItemNode[] {
    
    return Object.keys(obj).reduce<AreaItemNode[]>((accumulator, key) => {
      const value = obj[key];

      const node = new AreaItemNode( obj[key].name, obj[key].id, obj[key].parent_id);

      if (value != null) {
        if (typeof value === 'object') {
          if (value.areas != undefined || null) node.children = this.buildFileTree(value.areas, level + 1);
        } else {
          node.name = obj[key].name;
        }
      }
      
      return accumulator.concat(node);
      
    }, []);
  }

  updateItem(node: AreaItemNode, name: string) {
    node.name = name;
    this.dataChange.next(this.data);
  }
}

@Component({
  selector: 'app-areas-tree',
  templateUrl: 'areas-tree.component.html',
  styleUrls:['areas-tree.component.scss',],
  providers: [ChecklistDatabase,
              HttpService
              ],
})
export class TreeChecklistExample {

  rootParentId!: string;
  selectedAreas!: string[];
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<AreaItemFlatNode, AreaItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<AreaItemNode, AreaItemFlatNode>();

  /** A selected parent node to be inserted */
  selectedParent: AreaItemFlatNode | null = null;

  /** The new item's name */
  // newItemName = '';

  treeControl: FlatTreeControl<AreaItemFlatNode>;

  treeFlattener: MatTreeFlattener<AreaItemNode, AreaItemFlatNode>;

  dataSource: MatTreeFlatDataSource<AreaItemNode, AreaItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<AreaItemFlatNode>(true /* multiple */);

  constructor(private _database: ChecklistDatabase, private _searchRequestDataService: SearchRequestDataService) {
    
    this.treeFlattener = new MatTreeFlattener(
      
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren,
    );

    this.treeControl = new FlatTreeControl<AreaItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    _database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  
  getLevel = (node: AreaItemFlatNode) => node.level;

  isExpandable = (node: AreaItemFlatNode) => node.expandable;

  getChildren = (node: AreaItemNode): AreaItemNode[] => node.children;

  hasChild = (_: number, _nodeData: AreaItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: AreaItemFlatNode) => _nodeData.name === '';

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: AreaItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode =
      existingNode && existingNode.name === node.name ? existingNode : new AreaItemFlatNode(node.name, 
                                                                                            node.id, 
                                                                                            node.parent_id);
    flatNode.level = level;
    flatNode.expandable = !!node.children?.length;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  };

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: AreaItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every(child => {
        return this.checklistSelection.isSelected(child);
      });
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: AreaItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  areaItemSelectionToggle(node: AreaItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.forEach(child => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
    this.prepareSelectedAreas();
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  areaLeafItemSelectionToggle(node: AreaItemFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
    this.prepareSelectedAreas();
  }

  // Check node for existing & add to array
  addAreaToSelected(areaId: string): void {
    if (!this._searchRequestDataService.SelectedAreas.includes(areaId)){ 
      this._searchRequestDataService.SelectedAreas.push(areaId);
    }
  }

  // Preparing selected areas array before sending 
  // search requests
  prepareSelectedAreas(): void {
    
    this.rootParentId = areasTree[0].parent_id;
    this._searchRequestDataService.SelectedAreas = [];

    for (var area of this.checklistSelection.selected){
      if (area.parent_id == this.rootParentId){           // Check for parents node
        this.addAreaToSelected(area.id);
      }
      if (!this._searchRequestDataService.SelectedAreas.includes(area.parent_id)) { // Check parent existing
        this.addAreaToSelected(area.id);
      }
    }

    if (this._searchRequestDataService.SelectedAreas.length == 0){
      this.addAreaToSelected("113");
    }
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: AreaItemFlatNode): void {
    let parent: AreaItemFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: AreaItemFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every(child => {
        return this.checklistSelection.isSelected(child);
      });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /* Get the parent node of a node */
  getParentNode(node: AreaItemFlatNode): AreaItemFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }
}
