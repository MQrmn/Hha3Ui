import { Component } from '@angular/core';

@Component({
  selector: 'app-search-vacancy-form',
  templateUrl: './search-vacancy-form.component.html',
  styleUrls: ['./search-vacancy-form.component.scss']
})
export class AppSearchFormComponent {
  vacancyName: string = 'Junior C# Developer'
}
