import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { Department } from '../models/department.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() public Cname;
  @Input() public options;
  @Input() public States;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
