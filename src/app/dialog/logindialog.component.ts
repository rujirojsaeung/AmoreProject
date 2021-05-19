import { Component, Inject } from '@angular/core';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
    selector: 'dialog-data-example-dialog',
    templateUrl: 'logindialog.component.html'
})
export class LogingDialogComponent {
    error = '';
    constructor(@Inject(MAT_DIALOG_DATA) public data: string) {

        console.log(data);
        this.bindmessage(data);
    }

    bindmessage(message: string) {
        this.error = message;
    }


}

