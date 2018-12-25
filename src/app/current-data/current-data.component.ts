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
    this.services.getAPI().subscribe((retrieved) =>{
      this.phoneData=retrieved;
      console.log(this.phoneData);
    });




  }


}
