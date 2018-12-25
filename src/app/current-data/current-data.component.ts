import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication.service';

@Component({
  selector: 'app-current-data',
  templateUrl: './current-data.component.html',
  styleUrls: ['./current-data.component.css'],
  providers:[CommunicationService]
})
export class CurrentDataComponent implements OnInit {
phoneData:any=[];
  constructor(private services:CommunicationService) { }

  ngOnInit() {
    //subscribing the observable form the services and assign it to variable "phoneData" and with data Binding display it in the template
    this.services.getAPI().subscribe((retrieved) =>{
      this.phoneData=retrieved;
      console.log(this.phoneData);
    });




  }


}
