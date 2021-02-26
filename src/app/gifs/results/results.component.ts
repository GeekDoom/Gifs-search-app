import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent {

  get results() {
    return this.gifsService.results;
  }

  constructor(private gifsService: GifsService) { }

}
