import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PublicNavbarComponent } from './public-navbar/public-navbar.component';
import { MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './public/login/login/login.component';
import {environment} from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat';
import { RegisterComponent } from './public/register/register/register.component';
import { HomeComponent } from './pages/blogger/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule,FormGroup , ReactiveFormsModule  } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { LandingComponent } from './public/landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PublicNavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LandingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatMenuModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
