import { Component, ViewChild } from '@angular/core';
import {MatAccordion, MatAccordionDisplayMode} from '@angular/material/expansion';

@Component({
  selector: 'app-search-expansion-panel',
  templateUrl: './search-expansion-panel.component.html',
  styleUrls: ['./search-expansion-panel.component.scss'] 
})
export class AppSearchExpansionPanelComponent {
  
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  matAccordionDisplayMode: MatAccordionDisplayMode = "flat";
}
