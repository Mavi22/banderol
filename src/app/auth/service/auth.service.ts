import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Observable } from 'rxjs'
import UserCredential = firebase.auth.UserCredential
import User = firebase.User
import { FirebaseUserInterface } from '../../shared/type/firebaseUser.interface'

@Injectable({ providedIn: 'root' })
export class AuthService {
  userToken = localStorage.getItem('user-token')
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

  updateFirebaseUser(value: FirebaseUserInterface): void {
    firebase.auth().currentUser?.updateProfile(value)
  }

  onSignIn(email: string, password: string): Observable<UserCredential> {
    return new Observable<UserCredential>((subscriber) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((resp) => {
          console.log(resp.user?.displayName)
          subscriber.next(resp)
        })
        .catch((err) => subscriber.error(err))
    })
  }

  getUser(): Observable<User | null> {
    return new Observable((subscriber) => {
      firebase.auth().onAuthStateChanged((user) => {
        subscriber.next(user)
      })
    })
  }

  logout(): Promise<void> {
    return firebase.auth().signOut()
  }
}
