import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { NavigationComponent } from './navigation/navigation.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {OverlayModule, OverlayContainer} from '@angular/cdk/overlay';
import { TextAreaComponent } from './text-area/text-area.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    NavigationComponent,
    TextAreaComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    OverlayModule,
    CommonModule
    ],
    entryComponents:[TextAreaComponent,DisplayComponent],
   providers: [OverlayContainer],
  bootstrap: [AppComponent]
})
export class AppModule { }
