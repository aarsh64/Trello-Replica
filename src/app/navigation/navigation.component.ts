import { Component, OnInit, ViewContainerRef, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  templatePortal: any;
  backlogTemp: any;
  overlayRef: any;
@ViewChild('usersTemplate',{static:false})
usersTemplate:TemplateRef<any>;
@ViewChild('notifications',{static:false})
notifications:TemplateRef<any>;
@ViewChild('notification',{static:false})
notification:ElementRef<any>;
  constructor(private overlay: Overlay,private _viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

  users(){
    const positionStrategy=this.overlay.position().global().centerHorizontally().centerVertically();
    this.templatePortal=new TemplatePortal(this.usersTemplate,this._viewContainerRef); 
    this.overlayRef=this.overlay.create({
       positionStrategy  
    });
    this.overlayRef.attach(this.templatePortal); 
  }
  bellButton(){
    const positionStrategy=this.overlay.position().connectedTo(this.notification,{originX:'start',originY:'bottom'},{overlayX:'end',overlayY:'top'});
    this.templatePortal=new TemplatePortal(this.notifications,this._viewContainerRef); 
    this.overlayRef=this.overlay.create({
       positionStrategy  
    });
    this.overlayRef.attach(this.templatePortal); 

  }
invite(){
  console.log('invite button....');
}
search(){
  console.log('searching working....');
}
close(){
  this.overlayRef.dispose();
}
}
