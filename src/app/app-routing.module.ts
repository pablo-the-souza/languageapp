import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningComponent } from './learning/learning.component';
import { ExerciseComponent } from './learning/exercise/exercise.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { Exercise1Component } from './learning/exercise/exercise1/exercise1.component';
import { Exercise2Component } from './learning/exercise/exercise2/exercise2.component';
import { Exercise3Component } from './learning/exercise/exercise3/exercise3.component';
import { ExerciseTestsComponent } from './learning/exercise/exercisetests/exercisetests.component';


const routes: Routes = [
  { path: '', component: LearningComponent },
  { path: 'learning', component: LearningComponent,
    children: [
      { path: 'exercise', component: ExerciseComponent,
      children: [
        { path: 'exercise1', component: Exercise1Component, },
        { path: 'exercise2', component: Exercise2Component, },
        { path: 'exercise3', component: Exercise3Component, }
      ]},
      { path: 'exercisetests', component: ExerciseTestsComponent }
    ]},
   { path: 'register', component: RegisterComponent },
   { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
