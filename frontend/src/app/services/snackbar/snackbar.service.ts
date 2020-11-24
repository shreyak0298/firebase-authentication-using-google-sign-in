import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/@theme/snackbar/snackbar.component';
import { Snackbar } from '../../@theme/models/snackbar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  /**
   * @param message : Message to be displayed
   * @param duration : Time in milliseconds
   * @param type : 'success' | 'info' | 'error' | 'warning'
   * @param verticalPostion : 'top' | 'bottom'
   * @param horizontalPosition : 'start' | 'center' | 'end' | 'left' | 'right';
   * @param action : Button text | '' for no button
   */
  showSnackbar( message: string, { duration = 2000, type = 'info',verticalPosition = 'top', horizontalPosition = 'right', action = '' } : Snackbar = {}){
    if(message){
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: duration,
        panelClass: ['snackbar',type],
        verticalPosition: verticalPosition,
        horizontalPosition: horizontalPosition,
        data: { message: message, type: type }
      });
    }
  }
}
