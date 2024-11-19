import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit{

  @Output() callbackData: EventEmitter<any> = new EventEmitter()
  src: string = ''
  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  callSearch(term: string): void {
    if(term.length >= 3){
      this.callbackData.emit(term)
      console.log('❤️❤️❤️ llamamos a nuestra api', term)

    }
  }

}
