import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthenticatedUser: Boolean;
  constructor(public _afAuth: AngularFireAuth,private _http: HttpClient) { 
    this.isAuthenticatedUser = false;
  }

  googleLogin(){
    return this._afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider().setCustomParameters({
      hd: "quantiphi.com"
    }))
  }

  googleLogout(){
    this.isAuthenticatedUser = false;
    return this._afAuth.signOut();
  }
  
  getIsAuthenticated(){
    return this.localStorageGetItem('token') !== null ? true : false;
  }

  authenticateUser(idToken){
      return this._http.post(`${environment.baseUrl}/api/v1/admin/iam/authenticate`,{
        "idToken": idToken
      });
  }

  localStorageSetItem(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  localStorageGetItem(key: string){
    return localStorage.getItem(key);
  }

  localStorageRemoveItem(key: string){
    localStorage.removeItem(key);
  }

  localStorageRemoveAllItems(){
    localStorage.clear();
  }

}
