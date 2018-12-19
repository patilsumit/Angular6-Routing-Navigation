import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { GithubfollowersComponent } from './githubfollowers/githubfollowers.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from '@angular/http';
import { GithubserviceService } from './githubservice.service';
import { MyFirebaseComponent } from './my-firebase/my-firebase.component';
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GithubprofileComponent,
    GithubfollowersComponent,
    NotfoundComponent,
    PostsComponent,
    MyFirebaseComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase,'angularfs'),
    
    AngularFirestoreModule,
    FormsModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent
      },
      {
        path:'coursedemo',
        component: MyFirebaseComponent
      },
      { 
        path: 'followers/:login',
        component: GithubprofileComponent
      },
      { 
        path: 'followers',
        component: GithubfollowersComponent
      },
      { 
        path: 'posts',
        component: PostsComponent
      },
      { 
        path: '**',
        component: NotfoundComponent
      },


    ])
  ],
  providers: [
    GithubserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
