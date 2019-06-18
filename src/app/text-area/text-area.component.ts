import { Component, OnInit, Input } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { format } from 'url';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {
@Input() overlayRef:OverlayRef;
  constructor() {}
  ngOnInit() {


  }
  
  add(){
    console.log('working.....')
  }
  close(){
    this.overlayRef.dispose();
  }
  
}
