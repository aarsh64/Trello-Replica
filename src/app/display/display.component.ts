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
  Validators,
  RequiredValidator
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
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { displayStructure } from '../displayStructure';
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';
import { bindCallback } from 'rxjs';
@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"],
  exportAs:"cdkPortal",
})
export class DisplayComponent implements OnInit {
  @ViewChild('backlogTemp',{static:false})
    backlogTemp:TemplateRef<any>;
    @ViewChild('subMenuTemplate',{static:false})
    subMenuTemplate:TemplateRef<any>;
    @ViewChild('newCardTemplate',{static:false})
    newCardTemplate:TemplateRef<any>;
     @ViewChild('base1',{static:false})
    base1: ElementRef<any>; 
   @ViewChild('deleteList',{static:false})
    deleteList:TemplateRef<any>;
  @ViewChild('binButton',{static:false})
  binButton:ElementRef<any>;
  @ViewChild('sideButtonId',{static:false})
  sideButtonId:ElementRef<any>;
 
    done = [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ];
    justExtra=[];
    justExtra1=[];
    justExtra2=[];
    justExtra3=[];
    cards=4;
   selectedPortal: Portal<any>;
 gridContinerArray=displayStructure;
  templatePortal:TemplatePortal<any>;  //----------
   currentTask = ["Hey1", "Done1", "So is it working properly or not??"];
  validate = ["lol"];
  backlog=['Working?','Demo'];
  myForm: FormGroup;
  overlayRef: any;
  displayPortal: TemplatePortalDirective;
  overlayConfig: OverlayConfig;
  displayComp:displayStructure[] = [{header:'Backlog',cardsName:this.backlog},
                                 {header:'CurrentTask',cardsName:this.currentTask},
                                 {header:'Validate',cardsName:this.validate},
                                 { header:'Done',cardsName:this.done} ];
  nForm: FormGroup;
  templateRef: Portal<any>;
  newArray= ['demo'];
  boardName:any;
  selectedCard: number;
    overlayOpen=0;
  colors=['Lush Green','Blue','Lemon Yellow','Dark Mode'];
    constructor(private overlay: Overlay,private _viewContainerRef: ViewContainerRef) {}
    
  ngOnInit() {
     this.nForm = new FormGroup({
      in1: new FormControl("",Validators.required),
      in2:new FormControl(''),
      in3:new FormControl(''),
      in4:new FormControl(''),
      boardName:new FormControl('',Validators.required),
      boardCard:new FormControl('',Validators.required )
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

onTap(w:any,i:any){
  this.selectedCard=i;
  console.log('selected Card:',this.selectedCard,'index',i);
}
 load(i:number) {
      if(i==0){
        if(this.overlayOpen==1){
          this.overlayRef.dispose();
        }
        const z=document.getElementById('down0');
        const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
        this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
         this.overlayRef.attach(this.templatePortal);
         this.overlayOpen=1;
      }
      if(i==1){
        if(this.overlayOpen==1){
          this.overlayRef.dispose();
        }
        const z=document.getElementById('down1');
        const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
        this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
         this.overlayRef.attach(this.templatePortal); 
         this.overlayOpen=1;
      }
      if(i==2){
        if(this.overlayOpen==1){
          this.overlayRef.dispose();
        }
        const z=document.getElementById('down2');
        const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
        this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
         this.overlayRef.attach(this.templatePortal);
         this.overlayOpen=1;
      }
      if(i==3){
        if(this.overlayOpen==1){
          this.overlayRef.dispose();
        }
        const z=document.getElementById('down3');
        const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
        this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
         this.overlayRef.attach(this.templatePortal);
         this.overlayOpen=1;
      }
      if(i==4){
        if(this.overlayOpen==1){
          this.overlayRef.dispose();
        }
        const z=document.getElementById('down4');
        const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
        this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
         this.overlayRef.attach(this.templatePortal);
         this.overlayOpen=1;
      }
      if(i==5){
        if(this.overlayOpen==1){
          this.overlayRef.dispose();
        }
        const z=document.getElementById('down5');
        const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
        this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
         this.overlayRef.attach(this.templatePortal);
         this.overlayOpen=1;   
      }
      if(i==6){
        if(this.overlayOpen==1){
          this.overlayRef.dispose();
        }
        const z=document.getElementById('down6');
        const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
        this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
         this.overlayRef.attach(this.templatePortal); 
         this.overlayOpen=1;   
      }
      if(i==7){
        if(this.overlayOpen==1){
          this.overlayRef.dispose();
        }
        const z=document.getElementById('down7');
        const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
        this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
         this.overlayRef.attach(this.templatePortal);
         this.overlayOpen=1;
      }   
  }

load1(){
 let i=this.selectedCard;
  if(i==0){
    if(this.overlayOpen==1){
      this.overlayRef.dispose();
    }
    const z=document.getElementById('down0');
    const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal);
     this.overlayOpen=1;
  }
  if(i==1){
    if(this.overlayOpen==1){
      this.overlayRef.dispose();
    }
    const z=document.getElementById('down1');
    const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal); 
     this.overlayOpen=1;
  }
  if(i==2){
    if(this.overlayOpen==1){
      this.overlayRef.dispose();
    }
    const z=document.getElementById('down2');
    const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal);
     this.overlayOpen=1;
  }
  if(i==3){
    if(this.overlayOpen==1){
      this.overlayRef.dispose();
    }
    const z=document.getElementById('down3');
    const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal);
     this.overlayOpen=1;
  }
  if(i==4){
    if(this.overlayOpen==1){
      this.overlayRef.dispose();
    }
    const z=document.getElementById('down4');
    const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal);
     this.overlayOpen=1;
  }
  if(i==5){
    if(this.overlayOpen==1){
      this.overlayRef.dispose();
    }
    const z=document.getElementById('down5');
    const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal);  
     this.overlayOpen=1; 
  }
  if(i==6){
    if(this.overlayOpen==1){
      this.overlayRef.dispose();
    }
    const z=document.getElementById('down6');
    const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal); 
     this.overlayOpen=1;   
  }
  if(i==7){
    if(this.overlayOpen==1){
      this.overlayRef.dispose();
    }
    const z=document.getElementById('down7');
    const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal);
     this.overlayOpen=1;
  }   
  
}

  sideButton() {
    if(this.overlayOpen==1){
      this.overlayRef.dispose();
    }
    console.log("working.....");
      const positionStrategy=this.overlay.position().global().centerHorizontally().centerVertically();
      this.templatePortal=new TemplatePortal(this.newCardTemplate,this._viewContainerRef); 
      this.overlayRef=this.overlay.create({
       
        positionStrategy  
      });
      this.overlayRef.attach(this.templatePortal);
      this.overlayOpen=1;
  }

    addBoard(){
      console.log(this.nForm.value.boardName);
      console.log(this.nForm.value.boardCard);
      if(this.cards>=8){
       window.alert('Max 8 cards can be there!');
      }
    else{
      this.displayComp.push({
        header:this.nForm.value.boardName,
        cardsName:this.justExtra,
      });
      this.nForm.reset();
     this.overlayRef.dispose();
   this.cards++;
    } 
   }
  
  //  ...............3-Dots function()............

  dots(i:number){
  
  if(i==0){
      const v=document.getElementById('header0');
      const positionStrategy=this.overlay.position().connectedTo(v,{originX:'end',originY:'bottom'},{overlayX:'start',overlayY:'top'});
      this.templatePortal= new TemplatePortal(this.subMenuTemplate,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
       this.overlayRef.attach(this.templatePortal);
       this.overlayOpen=1;
  }
  console.log('3-dot function-1');
  if(i==1){
    if(this.overlayOpen==1){
      this.overlayRef.dispose();
    }
    const v=document.getElementById('header1');
    const positionStrategy=this.overlay.position().connectedTo(v,{originX:'end',originY:'bottom'},{overlayX:'start',overlayY:'top'});
    this.templatePortal= new TemplatePortal(this.subMenuTemplate,this._viewContainerRef);
      console.log('entered');
      this.overlayRef = this.overlay.create({ 
        positionStrategy,
       });
     this.overlayRef.attach(this.templatePortal);
     this.overlayOpen=1;
    
} 
if(i==2){
  if(this.overlayOpen==1){
    this.overlayRef.dispose();
  }
  const v=document.getElementById('header2');
  const positionStrategy=this.overlay.position().connectedTo(v,{originX:'end',originY:'bottom'},{overlayX:'start',overlayY:'top'});
  this.templatePortal= new TemplatePortal(this.subMenuTemplate,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
   this.overlayRef.attach(this.templatePortal);
   this.overlayOpen=1;
    
} 
if(i==3){
  if(this.overlayOpen==1){
    this.overlayRef.dispose();
  }
  const v=document.getElementById('header3');
  const positionStrategy=this.overlay.position().connectedTo(v,{originX:'end',originY:'bottom'},{overlayX:'start',overlayY:'top'});
  this.templatePortal= new TemplatePortal(this.subMenuTemplate,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
   this.overlayRef.attach(this.templatePortal);
   this.overlayOpen=1;
    
} 
if(i==4){
  if(this.overlayOpen==1){
    this.overlayRef.dispose();
  }
  const v=document.getElementById('header4');
  const positionStrategy=this.overlay.position().connectedTo(v,{originX:'end',originY:'bottom'},{overlayX:'start',overlayY:'top'});
  this.templatePortal= new TemplatePortal(this.subMenuTemplate,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
   this.overlayRef.attach(this.templatePortal); 
   this.overlayOpen=1;
     
}  
if(i==5){
  if(this.overlayOpen==1){
    this.overlayRef.dispose();
  }
  const v=document.getElementById('header5');
  const positionStrategy=this.overlay.position().connectedTo(v,{originX:'end',originY:'bottom'},{overlayX:'start',overlayY:'top'});
  this.templatePortal= new TemplatePortal(this.subMenuTemplate,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
   this.overlayRef.attach(this.templatePortal);
   this.overlayOpen=1;
    
} 
if(i==6){
  if(this.overlayOpen==1){
    this.overlayRef.dispose();
  }
  const v=document.getElementById('header6');
  const positionStrategy=this.overlay.position().connectedTo(v,{originX:'end',originY:'bottom'},{overlayX:'start',overlayY:'top'});
  this.templatePortal= new TemplatePortal(this.subMenuTemplate,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
   this.overlayRef.attach(this.templatePortal);
   this.overlayOpen=1;
    
}  
if(i==7){
  if(this.overlayOpen==1){
    this.overlayRef.dispose();
  }
  const v=document.getElementById('header7');
  const positionStrategy=this.overlay.position().connectedTo(v,{originX:'end',originY:'bottom'},{overlayX:'start',overlayY:'top'});
  this.templatePortal= new TemplatePortal(this.subMenuTemplate,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
   this.overlayRef.attach(this.templatePortal);
   this.overlayOpen=1;
    
}  
  }   

//.....to remove the last task from the speicifc card.....

undoFunction(i:number){
  
        console.log('inside undo:',i);
        if(this.selectedCard==0){
          this.backlog.splice(this.backlog.length-1,1);
          this.overlayRef.dispose();
        }
        else if(this.selectedCard==1){
          this.currentTask.splice(this.currentTask.length-1,1);
          this.overlayRef.dispose();
        }
        else if(this.selectedCard==2){
          this.validate.splice(this.validate.length-1,1);
          this.overlayRef.dispose();
        }
        else if(this.selectedCard==3){
          this.done.splice(this.done.length-1,1);
        }
        else if(this.selectedCard==4){
          this.justExtra.splice(this.justExtra.length-1,1);
        }
        else if(this.selectedCard==5){
          this.justExtra1.splice(this.justExtra1.length-1,1);
        }
        else if(this.selectedCard==6){
          this.justExtra2.splice(this.justExtra2.length-1,1);
        }
        else if(this.selectedCard==7){
          this.justExtra3.splice(this.justExtra3.length-1,1);
        }
        else{
          window.alert('Something went wrong!');
        }
}

// used to move all the tasks from one card to another....

moveTo(j:number){
     let  i=this.selectedCard;
    console.log(this.backlog.length);
    console.log('moveda to array:',this.displayComp[j].cardsName);
    if(i==j){
      window.alert("not possible!");
      this.overlayRef.dispose();
      
    }
    if(i==0){
      for(let k=0;k<this.backlog.length;k++){
            this.displayComp[j].cardsName.push(this.backlog[k]);  
            this.overlayRef.dispose();    
      }
      this.backlog.splice(0,this.backlog.length);
           
    }  
    if(i==1){
      for(let k=0;k<this.currentTask.length;k++){
            this.displayComp[j].cardsName.push(this.currentTask[k]); 
            this.overlayRef.dispose();     
      }
      this.currentTask.splice(0,this.currentTask.length);
    } 
    if(i==2){
      for(let k=0;k<this.validate.length;k++){
            this.displayComp[j].cardsName.push(this.validate[k]);  
            this.overlayRef.dispose();    
      }
      this.validate.splice(0,this.validate.length);
    }
    if(i==3){
      for(let k=0;k<this.done.length;k++){
            this.displayComp[j].cardsName.push(this.done[k]);
            this.overlayRef.dispose();      
      }
      this.done.splice(0,this.done.length);
    }

   
 }

 // ..... used to copy content from one card to another...

 copyTo(j:number){
  let  i=this.selectedCard;
  console.log(this.backlog.length);
  console.log('moveda to array:',this.displayComp[j].cardsName);
  if(i==j){
    window.alert("not possible!");
    this.overlayRef.dispose();
    
  }
  if(i==0){
    for(let k=0;k<this.backlog.length;k++){
          this.displayComp[j].cardsName.push(this.backlog[k]);  
          this.overlayRef.dispose();    
    }
         
  }  
  if(i==1){
    for(let k=0;k<this.currentTask.length;k++){
          this.displayComp[j].cardsName.push(this.currentTask[k]); 
          this.overlayRef.dispose();     
    }
  } 
  if(i==2){
    for(let k=0;k<this.validate.length;k++){
          this.displayComp[j].cardsName.push(this.validate[k]);  
          this.overlayRef.dispose();    
    }
  }
  if(i==3){
    for(let k=0;k<this.done.length;k++){
          this.displayComp[j].cardsName.push(this.done[k]);
          this.overlayRef.dispose();      
    }
  }
}

changeColor(a:number){
  console.log("color-index:",a);
let x=this.displayComp.length;
console.log('length:',x);

  for(let i=0;i<x;i++){
    
    
    if(a==0){
      let g=document.getElementsByClassName('card');
      //  console.log('g',g);
    let h=document.getElementsByClassName('head');
      //  console.log('h',h);
      let t=document.getElementsByClassName('addTask');
      // console.log('t',t);
      let p=document.getElementsByClassName('priority');
      let sideButton=document.getElementById('addBoardButton');
     for(const d of g){
    d.style.backgroundColor="#77dd77";
    for(const h1 of h){
      h1.style.color="white";
    }
  
      for(const m of t){
      m.style.color="white";
     }
     for(const p1 of p){
       p1.style.backgroundColor="#77dd77";
     }   
        sideButton.style.color="white";
        sideButton.style.backgroundColor="#77dd77"; 
          }
          this.overlayRef.dispose();      
      }

    if(a==1){
      
      let g=document.getElementsByClassName('card');
      //  console.log('g',g);
    let h=document.getElementsByClassName('head');
      //  console.log('h',h);
      let t=document.getElementsByClassName('addTask');
      // console.log('t',t);
      let p=document.getElementsByClassName('priority');
      let sideButton=document.getElementById('addBoardButton');
      console.log('s1',sideButton);
      //  let c=document.get(this.newCardT);
      // console.log(c);
      // g.style.backgroundColor="#E6F2FE";  
   for(const d of g){
     d.style.backgroundColor="#E6F2FE";
   }
   
   for(const h1 of h){
    h1.style.color="#2E84D2";
  }

    for(const m of t){
    m.style.color="#2E84D2";
   }
   for(const p1 of p){
     p1.style.backgroundColor="#2E84D2";
   }   
      sideButton.style.color="#2E84D2";
      sideButton.style.backgroundColor="#E6F2FE";
        }
        this.overlayRef.dispose();
  }  

  if(a==2){

    let g=document.getElementsByClassName('card');
    //  console.log('g',g);
  let h=document.getElementsByClassName('head');
    //  console.log('h',h);
    let t=document.getElementsByClassName('addTask');
    // console.log('t',t);
    let p=document.getElementsByClassName('priority');
    let sideButton=document.getElementById('addBoardButton');
    console.log('s1',sideButton);
    for(const d of g){
      d.style.backgroundColor="#FFE854";
    }
    for(const h1 of h){
      h1.style.color='#2E84D2';
    }
    for(const m of t){
      m.style.color="#2E84D2";
    }
    sideButton.style.backgroundColor="#FFE854";
    sideButton.style.color="#2E84D2";
  }
  else if(a==3){
    
    let g=document.getElementsByClassName('card');
    //  console.log('g',g);
  let h=document.getElementsByClassName('head');
    //  console.log('h',h);
    let t=document.getElementsByClassName('addTask');
    // console.log('t',t);
    let p=document.getElementsByClassName('priority');
    let sideButton=document.getElementById('addBoardButton');
    console.log('s1',sideButton);
    for(const d of g){
      d.style.backgroundColor="black";
    }
    for(const h1 of h){
      h1.style.color='#FFE854';
    }
    for(const m of t){
      m.style.color="#FFE854";
    }
    for(const p1 of p){
      p1.style.backgroundColor="#FFE854";
    }
    sideButton.style.backgroundColor="black";
    sideButton.style.color="#FFE854";
}  

}


// ........Add something using overlay(Overlay)for all cards................
 
    add(i:number) {
      if(this.selectedCard>7){
        console.error('Max 8 cards are allowed!');
        
      }

          if(this.selectedCard==0){
            this.backlog.push(this.nForm.value.in1);
            this.nForm.reset();
            this.overlayRef.dispose();
          }
         else if(this.selectedCard==1){
            this.currentTask.push(this.nForm.value.in1);
            this.nForm.reset();
            this.overlayRef.dispose();
          
          }
         else if(this.selectedCard==2){
            this.validate.push(this.nForm.value.in1);
            this.nForm.reset();
            this.overlayRef.dispose();
          
          }
         else if(this.selectedCard==3){
            this.done.push(this.nForm.value.in1);
            this.nForm.reset();
            this.overlayRef.dispose();
           
          }
          else if(this.selectedCard==4){
            this.justExtra.push(this.nForm.value.in1);
            this.nForm.reset();
            this.overlayRef.dispose();
          }
          else if(this.selectedCard==5){
            this.justExtra1.push(this.nForm.value.in1);
            this.nForm.reset();
            this.overlayRef.dispose();
          }
          else if(this.selectedCard==6){
            this.justExtra2.push(this.nForm.value.in1);
            this.nForm.reset();
            this.overlayRef.dispose();
          }
          else if(this.selectedCard==7){
            this.justExtra3.push(this.nForm.value.in1);
            this.nForm.reset();
            this.overlayRef.dispose();
          }
          else{
           window.alert('Seems like something is wrong now!'); 
          }
          // this.nForm.reset();
      }
  
    // .........To close the overlay..................
   
    close() {
      this.overlayRef.dispose();
    } 
  
 // ............used to call(pop-up) the delete-List template...
 
binButtonFunction(){
    console.log('entered');
    const positionStrategy=this.overlay.position().connectedTo(this.binButton,{originX:'start',originY:'bottom'},{overlayX:'end',overlayY:'top'});
    this.templatePortal=new TemplatePortal(this.deleteList,this._viewContainerRef);
    this.overlayRef=this.overlay.create({
        positionStrategy,
    });
    this.overlayRef.attach(this.templatePortal);
  }

  // ..............To remove the whole card from the container..........
  // (1) is called by the sidebar... (2) is called from the individual card
 
  deleteListFunction(i){
    console.log('index',i);
    this.displayComp.splice(i,1); 
    this.overlayRef.dispose();
  }
  deleteListFunction1(){
    this.displayComp.splice(this.selectedCard,1);
    this.overlayRef.dispose();
  }
}


  
    
    // load4(){
    //   // const positionStrategy=this.overlay.position().connectedTo(this.base4,{originX:'start',originY:'bottom'},{overlayX:'end',overlayY:'bottom'});
    //   this.templatePortal= new TemplatePortal(this.newAct,this._viewContainerRef);
    //   console.log('entered');
    //   this.overlayRef = this.overlay.create({ 

    //     // positionStrategy,
    //    });
    //    this.overlayRef.attach(this.templatePortal);
    
    // }



