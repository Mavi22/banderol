import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import firebase from 'firebase/app'
import 'firebase/auth'
import { BehaviorSubject, Observable } from 'rxjs'
import UserCredential = firebase.auth.UserCredential

@Injectable({ providedIn: 'root' })
export class AuthService {
  userOnline$ = new BehaviorSubject<firebase.User | null>(null)
  constructor(public af: AngularFireAuth) {}

  onSignUp(email: string, password: string): Observable<UserCredential> {
    return new Observable<UserCredential>((subscriber) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((resp) => subscriber.next(resp))
        .catch((err) => subscriber.error(err))
    })
  }

  onSignIn(email: string, password: string): Observable<UserCredential> {
    return new Observable<UserCredential>((subscriber) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((resp) => subscriber.next(resp))
        .catch((err) => subscriber.error(err))
    })
  }

  check(): any {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        this.userOnline$.next(user)
      } else {
        this.userOnline$.next(null)
      }
    })
  }

  logout(): Promise<void> {
    return firebase.auth().signOut()
  }
}
