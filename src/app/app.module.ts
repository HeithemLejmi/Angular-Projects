import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Components
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';

// Services
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';

// Routers
import {Routes, RouterModule} from '@angular/router';

// declare and create the routes inside this const array
const appRoutes: Routes = [
{path: 'appareils', component: AppareilViewComponent},
{path: 'auth', component: AuthComponent},
{path: '', component: AppareilViewComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // integrate the routes into the application by importing the RouterModule and executing its method forRoot()
    RouterModule.forRoot(appRoutes) // forRoot method looks into the const array "appRoutes" to charge/see every one of the routes recoded there 
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
