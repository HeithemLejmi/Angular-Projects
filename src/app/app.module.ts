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
import { AppareilService } from './service/appareil.service';

// Routers
import {Routes, RouterModule} from '@angular/router';

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
