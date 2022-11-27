import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCityFormComponent } from './search-city-form.component';

describe('SearchCityFormComponent', () => {
  let component: SearchCityFormComponent;
  let fixture: ComponentFixture<SearchCityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCityFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
