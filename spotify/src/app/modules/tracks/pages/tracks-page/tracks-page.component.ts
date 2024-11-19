import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService){}

  ngOnInit(): void {
    this.loadDataAll() 
    this.loadDataRandom()
  }

  async loadDataAll(): Promise<any> {
    // Reemplazamos toPromise() por firstValueFrom
    // this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
    this.tracksTrending = await firstValueFrom(this.trackService.getAllTracks$());

  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$()
      .subscribe((response: TrackModel[]) => {
        this.tracksRandom = response
      })
  }
  ngOnDestroy(): void {
    
  }
}
