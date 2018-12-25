import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { FormControl,FormGroup,Validators} from '@angular/forms';

//import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myForm = new FormGroup({
  searchedNumber : new FormControl('',Validators.compose(
    [Validators.minLength(11),
     Validators.maxLength(11),
     Validators.required,
     Validators.pattern('(201)[0-9]{9}')
    ]))
  });

  constructor() { }


  onclick(){
    console.log(this.myForm.value);

  }
  ngOnInit() {

  }

}
