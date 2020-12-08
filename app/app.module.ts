import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { LogInComponent } from './log-in/log-in.component';
import { AdminComponent } from './admin/admin.component';
import { SubjectComponent } from './subject/subject.component';
import { TopicComponent } from './topic/topic.component';
import { QuesComponent } from './ques/ques.component';
import { LevelComponent } from './level/level.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdmindeleteComponent } from './admindelete/admindelete.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    LogInComponent,
    AdminComponent,
    SubjectComponent,
    TopicComponent,
    QuesComponent,
    LevelComponent,
    AdminloginComponent,
    AdmindashComponent,
    AdmindeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path: "home",component:HomeComponent},
      {path:"admin",component:AdminComponent},
      {path:"login",component:LogInComponent},
      {path:"course",component:CourseComponent},
      {path:"subject",component:SubjectComponent},
      {path:"topic",component:TopicComponent},
      {path:"level",component:LevelComponent},
      {path:"ques",component:QuesComponent},
      {path:"adminlogin",component:AdminloginComponent},
      {path:"admindash",component:AdmindashComponent},
      {path:"admininsert",component:AdminComponent},
      {path:"admindeldete",component:AdmindeleteComponent}
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
