import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  bellButton(){
    console.log('bell button working....');
  }
invite(){
  console.log('invite button....');
}
search(){
  console.log('searching working....');
}
}
