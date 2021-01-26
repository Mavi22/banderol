import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './auth/auth.module'
import { HeaderComponent } from './header/components/header.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FooterComponent } from './footer/components/footer.component'

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
