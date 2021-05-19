import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogingDialogComponent } from './dialog/logindialog.component'

import { Router, ActivatedRoute, ParamMap } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(public dialog: MatDialog, private router: Router) { }

  title = 'stockplus';
  message = '';
  username = '';
  password = '';
  onSubmit() {
    debugger
    if (this.username == '1' && this.password == '1') {



      this.router.navigate(['/dashboard']);
      return;
    }

    if (this.username == '' || this.password == '') {
      this.message = this.username == '' ? 'กรุณาผู้ใช้งานให้ถูกต้อง' : 'กรุณารหัสผ่านให้ถูกต้อง';
      this.dialog.open(LogingDialogComponent, {
        data: this.message
      });
    } else {
      
    }

  }
}

