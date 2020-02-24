import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningComponent } from './learning/learning.component';
import { ExerciseComponent } from './learning/exercise/exercise.component';


const routes: Routes = [
  { path: '', component: LearningComponent },
  { path: 'learning', component: LearningComponent,
    children: [
      { path: 'exercise', component: ExerciseComponent, }
   ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
