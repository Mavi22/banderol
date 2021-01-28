import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import firebase from 'firebase/app'
import 'firebase/auth'
import { BehaviorSubject, Observable } from 'rxjs'
import UserCredential = firebase.auth.UserCredential

@Injectable()
export class AuthService {
  userOnline$ = new BehaviorSubject(false)
  constructor(public af: AngularFireAuth) {}

  onSignUp(email: string, password: string): Observable<UserCredential> {
    return new Observable<UserCredential>((subscriber) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((resp) => subscriber.next(resp))
    })
  }

  onSignUpWithFacebook(): any {
    const provider = new firebase.auth.FacebookAuthProvider()
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((resp) => console.log(resp))
  }

  check(): any {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.userOnline$.next(true)
      } else {
        this.userOnline$.next(false)
      }
    })
  }

  logout(): void {
    firebase.auth().signOut().then()
  }
}
