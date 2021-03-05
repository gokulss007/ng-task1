import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  dialogbox1 = 'resolved';
  dialogbox2 = 'open';
  dialogbox3 = 'pendings';
  open = 1;
  pendings = 1;
  resolved = 1;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openstatus1(){
    let dialogRef = this.dialog.open(UpdateComponent);
    let currentVal = this.dialogbox1;

    dialogRef.afterClosed().subscribe( result => {
      this.dialogbox1 = result;
      console.log(this.dialogbox1);

      if (this.dialogbox1 === 'Open') {
        this.open++;
      } else if (this.dialogbox1 === 'Pending') {
        this.pendings++;
      } else if (this.dialogbox1 === 'Resolved') {
        this.resolved++;
      }

      if (currentVal === 'Open') {
        this.open--;
      } else if (currentVal === 'Pending') {
        this.pendings--;
      } else if (currentVal === 'Resolved') {
        this.resolved--;
      }

   
    });
  }
  openstatus2(){
    let dialogRef = this.dialog.open(UpdateComponent);
    let currentVal = this.dialogbox2;
    
    dialogRef.afterClosed().subscribe( result => {
      this.dialogbox2 = result;
      console.log(this.dialogbox2);

      if (this.dialogbox2 === 'Open') {
        this.open++;
      } else if (this.dialogbox2 === 'Pending') {
        this.pendings++;
      } else if (this.dialogbox2 === 'Resolved') {
        this.resolved++;
      }

      if (currentVal === 'Open') {
        this.open--;
      } else if (currentVal === 'Pending') {
        this.pendings--;
      } else if (currentVal === 'Resolved') {
        this.resolved--;
      }

    });
  }
  openstatus3(){
    let dialogRef = this.dialog.open(UpdateComponent);
    let currentVal = this.dialogbox3;
    
    dialogRef.afterClosed().subscribe( result => {
      this.dialogbox3 = result;
      console.log(this.dialogbox3);

      if (this.dialogbox3 === 'Open') {
        this.open++;
      } else if (this.dialogbox3 === 'Pending') {
        this.pendings++;
      } else if (this.dialogbox3 === 'Resolved') {
        this.resolved++;
      }

      if (currentVal === 'Open') {
        this.open--;
      } else if (currentVal === 'Pending') {
        this.pendings--;
      } else if (currentVal === 'Resolved') {
        this.resolved--;
      }
  
  });
}
}
