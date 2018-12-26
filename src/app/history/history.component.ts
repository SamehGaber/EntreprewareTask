import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers:[CommunicationService]

})
export class HistoryComponent implements OnInit {
  historyData:any=[];

  constructor(private services:CommunicationService) { }

  ngOnInit() {
    this.services.getDb().subscribe((database) =>{console.log(database);
      this.historyData=database;
      
      });
  }

}
