import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './auth/auth.module'
import { HeaderComponent } from './header/components/header.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FooterComponent } from './footer/components/footer.component'
import { SpinnerComponent } from './shared/components/spinner/spinner.component'
import { AngularFireModule } from '@angular/fire'
import firebase from 'firebase/app'
import { environment } from '../environments/environment'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { SpinnerService } from './shared/components/service/spinner.service'

firebase.initializeApp(environment.firebase)

const components = [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  SpinnerComponent,
]

const modules = [
  BrowserModule,
  AppRoutingModule,
  AuthModule,
  NgbModule,
  AngularFireModule.initializeApp(environment.firebase),
  StoreModule.forRoot({}),
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: environment.production,
  }),
]

const service = [SpinnerService]

@NgModule({
  declarations: [...components],
  imports: [...modules],
  providers: [...service],
  bootstrap: [AppComponent],
})
export class AppModule {}
