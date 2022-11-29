import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndCanselButtonsComponent } from './search-and-cansel-buttons.component';

describe('SearchAndCanselButtonsComponent', () => {
  let component: SearchAndCanselButtonsComponent;
  let fixture: ComponentFixture<SearchAndCanselButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAndCanselButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAndCanselButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
