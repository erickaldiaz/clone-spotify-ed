import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listResults$: Observable<any> = of([])

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  receiveData(event: string): void {
    //TODO: agarras el termino y sabes que solo se ejecuta cunado tiene 3 caracters
    console.log('🎁 Estoy en el padre jua jua...', event);
    this.listResults$ = this.searchService.searchTracks$(event)
    

  }

}
