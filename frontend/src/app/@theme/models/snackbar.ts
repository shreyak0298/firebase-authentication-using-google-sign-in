import { MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

export interface Snackbar{ 
    duration?: number,
    type?: string,
    verticalPosition?: MatSnackBarVerticalPosition,
    horizontalPosition?: MatSnackBarHorizontalPosition,
    action?: string
}