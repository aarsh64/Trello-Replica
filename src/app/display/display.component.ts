import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";
import { format } from "util";
// import { FormGroup,FormControl,Validators } from '@angular/forms';
import { NgModule } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { Button } from "protractor";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { Overlay, OverlayConfig, CdkOverlayOrigin } from "@angular/cdk/overlay";
import {
  ComponentPortal,
  TemplatePortalDirective,
  Portal,
  CdkPortal,
  TemplatePortal
} from "@angular/cdk/portal";
import { TextAreaComponent } from "../text-area/text-area.component";
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"],
  exportAs:"cdkPortal",
})
export class DisplayComponent implements OnInit {
  @ViewChild('backlogTemp',{static:false})
    backlogTemp:TemplateRef<any>;
  @ViewChild('currentTemp',{static:false})
    currentTemp:TemplateRef<any>;
  @ViewChild('validTemp',{static:false})
    validTemp:TemplateRef<any>;
    @ViewChild('newAct',{static:false})
    newAct:TemplateRef<any>;
    @ViewChild('doneTemp',{static:false})
    doneTemp:TemplateRef<any>;  
    @ViewChild('dotfunc',{static:false})
    dotfunc:TemplateRef<any>;
    @ViewChild('dotfunc1',{static:false})
    dotfunc1:TemplateRef<any>;
    @ViewChild('dotfunc2',{static:false})
    dotfunc2:TemplateRef<any>;
    @ViewChild('td',{static:false})
    td:ElementRef<any>;
    @ViewChild('td1',{static:false})
    td1:ElementRef<any>;
    @ViewChild('td2',{static:false})
    td2:ElementRef<any>;
    @ViewChild('base',{static:false})
    base: ElementRef<any>;  
  @ViewChild('base4',{static:false})
  base4:ElementRef<any>;
 
    done = [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ];
   selectedPortal: Portal<any>;
 
  templatePortal:TemplatePortal<any>;  //----------
  
  backlog = ["Hey", "Yet to complete", "Demo", "Demo2", "Demo3","working?","sure?"];
  currentTask = ["Hey1", "Done1", "So is it working properly or not??"];
  validate = ["lol"];
  myForm: FormGroup;
  overlayRef: any;
  displayPortal: TemplatePortalDirective;
  overlayConfig: OverlayConfig;
  nForm: FormGroup;
  templateRef: Portal<any>;
  newArray= ['demo'];

  constructor(private overlay: Overlay,private _viewContainerRef: ViewContainerRef) {}
    
  ngOnInit() {
     this.nForm = new FormGroup({
      in1: new FormControl(""),
      in2:new FormControl(''),
      in3:new FormControl(''),
      in4:new FormControl('')
    });
  }
  // .....................Drag-Drop Angular-CDK code............................

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
// ..............................................................................

  load() {
    
    const positionStrategy=this.overlay.position().connectedTo(this.base,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal);
     
    }
    
    load4(){
      const positionStrategy=this.overlay.position().connectedTo(this.base4,{originX:'start',originY:'bottom'},{overlayX:'end',overlayY:'bottom'});
      this.templatePortal= new TemplatePortal(this.newAct,this._viewContainerRef);
      console.log('entered');
      this.overlayRef = this.overlay.create({ 

        positionStrategy,
       });
       this.overlayRef.attach(this.templatePortal);
    
    }

cTask(){

  const positionStrategy=this.overlay.position().connectedTo(this.base,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
  this.templatePortal= new TemplatePortal(this.currentTemp,this._viewContainerRef);
  console.log('entered');
  this.overlayRef = this.overlay.create({ 
    positionStrategy,
   });
  this.overlayRef.attach(this.templatePortal);
   
}


valid() {
      const positionStrategy=this.overlay.position().connectedTo(this.base,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
  this.templatePortal= new TemplatePortal(this.validTemp,this._viewContainerRef);
  console.log('entered');
  this.overlayRef = this.overlay.create({ 
    positionStrategy,
   });
 this.overlayRef.attach(this.templatePortal);
  
}

done1() {
    const positionStrategy=this.overlay.position().connectedTo(this.base,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.doneTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
   this.overlayRef.attach(this.templatePortal);
  
  }


  newBoard() {
    console.log("working.....");
    // const positionStrategy=this.overlay.position().global().centerHorizontally().centerVertically();
    // this.templatePortal=new TemplatePortal(this.newGrid,this._viewContainerRef); 
    // this.overlayRef=this.overlay.create({
    //   width:10000,
    //   height:5000,
    //   positionStrategy
     
    // }).attach(this.templatePortal);
    }
  
  //  ...............3-Dots function()............
dots(){
  console.log('3-dot function-1');
  const positionStrategy=this.overlay.position().connectedTo(this.td,{originX:'start',originY:'bottom'},{overlayX:'start',overlayY:'bottom'});
  this.templatePortal= new TemplatePortal(this.dotfunc,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
   this.overlayRef.attach(this.templatePortal)
}
backlogDel(){
  this.backlog.splice(this.backlog.length-1,1);
  this.overlayRef.dispose();
}
dots1(){
  console.log('3-dot function-1');
  const positionStrategy=this.overlay.position().connectedTo(this.td1,{originX:'start',originY:'bottom'},{overlayX:'start',overlayY:'bottom'});
  this.templatePortal= new TemplatePortal(this.dotfunc1,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
   this.overlayRef.attach(this.templatePortal)
}
cTaskDel(){
  this.currentTask.splice(this.currentTask.length-1,1);
  this.overlayRef.dispose();
}
dots2(){
  console.log('3-dot function-3'); 
  const positionStrategy=this.overlay.position().connectedTo(this.td2,{originX:'start',originY:'bottom'},{overlayX:'start',overlayY:'bottom'});
  this.templatePortal= new TemplatePortal(this.dotfunc2,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
   this.overlayRef.attach(this.templatePortal)
}
validateDel(){
  this.validate.splice(this.validate.length-1,1);
  this.overlayRef.dispose();
}
dots3(){
  console.log('3-dot function-4');
}

    // ........Add something using overlay(Overlay)for all cards................
    add() {
      this.backlog.push(this.nForm.value.in1);
      this.overlayRef.dispose();
      this.nForm.reset();

    }
    add1(){
      console.log('upadted...');
      this.currentTask.push(this.nForm.value.in2);
      this.overlayRef.dispose();
      this.nForm.reset();
     
    }
    add2(){
      this.validate.push(this.nForm.value.in3);
      this.overlayRef.dispose();
      this.nForm.reset();
    }
    addNew(){
      this.done.push(this.nForm.value.in3);
      this.overlayRef.dispose();
      this.nForm.reset();
    }
   // .........To close the overlay..................
   
    close() {
      this.overlayRef.dispose();
    }
  
}
