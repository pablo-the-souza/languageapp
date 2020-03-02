import { Component } from '@angular/core';
import { ExerciseService } from './exercise.service';



@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  providers: [ExerciseService]
})
export class ExerciseComponent  {
  
  constructor(
    ) { }

  
}
