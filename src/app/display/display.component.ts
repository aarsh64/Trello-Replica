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
  //  myTemplate1:TemplateRef<any>;
  //  myTemplate2:TemplateRef<any>;
    @ViewChild('base',{static:false})
    base: ElementRef<any>;  
    
    done = [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ];
   selectedPortal: Portal<any>;
  // templatePortalContent:TemplateRef<any>;
    templatePortal:TemplatePortal<any>;  //----------
  
  backlog = ["Hey", "Yet to complete", "Demo", "Demo2", "Demo3","working?","sure?"];
  currentTask = ["Hey1", "Done1", "So is it working properly or not??"];
  validate = ["lol"];
  myForm: FormGroup;
  overlayRef: any;
  displayPortal: TemplatePortalDirective;
  positionStategy: any;
  overlayConfig: OverlayConfig;
  nForm: FormGroup;
  templateRef: Portal<any>;

  constructor(private overlay: Overlay,private _viewContainerRef: ViewContainerRef) {}
    
  ngOnInit() {
    // this.myForm = new FormGroup({
    //   in: new FormControl(""),
    // //   in1: new FormControl(),
    // //   in2: new FormControl(),
    // //   in3: new FormControl()
    //  });
    this.nForm = new FormGroup({
      in1: new FormControl(""),
      in2:new FormControl(''),
      in3:new FormControl(''),
      in4:new FormControl('')
    });
  }
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

  load() {
    
    const positionStrategy=this.overlay.position().connectedTo(this.base,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    // const positionStrategy=this.overlay.position().global().centerHorizontally().centerVertically();
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
      // attachOverlay(this.positionStategy); 
  this.overlayRef.attach(this.templatePortal);
     
    }
cTask(){
  const positionStrategy=this.overlay.position().connectedTo(this.base,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
  this.templatePortal= new TemplatePortal(this.currentTemp,this._viewContainerRef);
  // const positionStrategy=this.overlay.position().global().centerHorizontally().centerVertically();
  console.log('entered');
  this.overlayRef = this.overlay.create({ 
    positionStrategy,
   });
    // attachOverlay(this.positionStategy); 
this.overlayRef.attach(this.templatePortal);
   
}
    valid() {
      const positionStrategy=this.overlay.position().connectedTo(this.base,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
  this.templatePortal= new TemplatePortal(this.validTemp,this._viewContainerRef);
  // const positionStrategy=this.overlay.position().global().centerHorizontally().centerVertically();
  console.log('entered');
  this.overlayRef = this.overlay.create({ 
    positionStrategy,
   });
    // attachOverlay(this.positionStategy); 
this.overlayRef.attach(this.templatePortal);
  
      
}

  done1() {
    this.validate.push(this.myForm.value.in3);
  }
  newBoard() {
    console.log("working.....");
   
  }
    // .........To close the overlay..................
   
    // ........Add something using overlay..............
    add() {
      this.backlog.push(this.nForm.value.in1);
      this.overlayRef.dispose();
      this.myForm.reset();

    }
    add1(){
      console.log('upadted...');
      this.currentTask.push(this.nForm.value.in2);
      this.overlayRef.dispose();
      this.myForm.reset();
    }
    add2(){
      this.validate.push(this.nForm.value.in3);
      this.overlayRef.dispose();
      this.myForm.reset();
    }
  
    close() {
      this.overlayRef.dispose();
    }
  
}
