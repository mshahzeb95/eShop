import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dialog:MatDialog){}
  title = 'eshop';
  openDialog(){
    this.dialog.open(DialogComponent, {
      data: {
        
      },
    });
  }
  }

