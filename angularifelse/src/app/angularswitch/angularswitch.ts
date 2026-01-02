import { Component } from '@angular/core';

@Component({
  selector: 'app-angularswitch',
  imports: [],
  templateUrl: './angularswitch.html',
  styleUrl: './angularswitch.css'
})
export class Angularswitch {

  color="blue"

  handlecolor(val:string){
       this.color=val
  }

}
