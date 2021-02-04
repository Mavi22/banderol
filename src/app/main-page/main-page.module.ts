import { NgModule } from '@angular/core'
import { MainPageComponent } from './component/main-page.component'
import { MainPageRoutingModule } from './main-page-routing.module'
import { ChatsComponent } from './component/chats/chats.component'
import { MessagesComponent } from './component/messages/messages.component'
import { SearchComponent } from './component/search/search.component'

const components = [
  MainPageComponent,
  ChatsComponent,
  MessagesComponent,
  SearchComponent,
]

@NgModule({
  declarations: [...components],
  imports: [MainPageRoutingModule],
})
export class MainPageModule {}
