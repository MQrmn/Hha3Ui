import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchExpansionPanelComponent } from './search-expansion-panel.component';

describe('AppSearchExpansionPanelComponent', () => {
  let component: AppSearchExpansionPanelComponent;
  let fixture: ComponentFixture<AppSearchExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSearchExpansionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSearchExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
