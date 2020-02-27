import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule}  from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { LearningComponent } from './learning/learning.component';
import { ExerciseComponent } from './learning/exercise/exercise.component';
import { TheoryComponent } from './learning/theory/theory.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { Exercise1Component } from './learning/exercise/exercise1/exercise1.component';
import { Exercise2Component } from './learning/exercise/exercise2/exercise2.component';
import { Exercise3Component } from './learning/exercise/exercise3/exercise3.component';
import { ExerciseTestsComponent } from './learning/exercise/exercisetests/exercisetests.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AnswerService } from './learning/exercise/exercise.service';
import { AnswerDirective } from './learning/exercise/answer.directive';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LearningComponent,
    ExerciseComponent,
    TheoryComponent,
    RegisterComponent,
    LoginComponent,
    AnswerDirective,
    Exercise1Component,
    Exercise2Component,
    Exercise3Component,
    ExerciseTestsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [AnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
