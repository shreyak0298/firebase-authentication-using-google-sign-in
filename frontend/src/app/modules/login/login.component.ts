import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { SnackbarService } from '../../services/snackbar/snackbar.service';
import * as firebase from 'firebase';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngUnsubscribe: Subject<void> = new Subject();
  constructor(
    private _loginService: LoginService,
    private _zone: NgZone,
    private _route: Router,
    private _snackbar: SnackbarService
  ) {}

  ngOnInit(): void {}

  login() {
    this._loginService
      .googleLogin()
      .then((resp) => {
        firebase.default.auth()
          .currentUser.getIdToken()
          .then((token) => {
            this._loginService
              .authenticateUser(token)
              .pipe(takeUntil(this.ngUnsubscribe))
              .subscribe(
                (jwt) => {
                  this._loginService.localStorageSetItem('token', token);
                  this._loginService.localStorageSetItem(
                    'email',
                    resp.additionalUserInfo.profile['email']
                  );
                  this._loginService.localStorageSetItem(
                    'name',
                    resp.additionalUserInfo.profile['name']
                  );
                  this._loginService.localStorageSetItem(
                    'picture',
                    resp.additionalUserInfo.profile['picture']
                  );
                  this._snackbar.showSnackbar('Logged In Successfully', {
                    type: 'success',
                  });
                  this._zone.run(() => {
                    this._route.navigate(['/admin']);
                  });
                },
                (err) => {
                  if (err.status != 401 && err.status != 403)
                    this._snackbar.showSnackbar(
                      `User authentication failed. Please sign in using quantiphi email`,
                      { type: 'error' }
                    );
                }
              );
          });
      })
      .catch((error) => {
        this._snackbar.showSnackbar(`Error: ${error.message}`, {
          type: 'error',
        });
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
