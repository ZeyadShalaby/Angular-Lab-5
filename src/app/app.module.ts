import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { HeaderComponent } from './components/header/header.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    HeaderComponent,
    ListUsersComponent,
    ShowUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
