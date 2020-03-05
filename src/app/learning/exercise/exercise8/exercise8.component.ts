import { Component, OnInit, Input, ɵConsole } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Exercise } from '../shared/exercise.model';
import { ExerciseService } from '../exercise.service';


@Component({
  selector: "app-exercise8",
  templateUrl: "./exercise8.component.html",
  styleUrls: ["./exercise8.component.scss"]
  
})
export class Exercise8Component implements OnInit {
  singleExercise: Exercise[]; 
  exercises: Exercise[];
  exerciseForm: FormGroup;
  isAnswered: boolean; 
  isCorrect: boolean; 
  result=0; 
  
  

  constructor(private fb: FormBuilder,  private exerciseService: ExerciseService) {}

  ngOnInit(): void {
    this.exercises = this.exerciseService.getExercises()
    this.createGroup();
    
  }

  createGroup() {
    this.singleExercise = this.exercises.slice(2)
    this.exerciseForm = this.fb.group({});
    this.singleExercise[0].questions.forEach(control =>
      this.exerciseForm.addControl(control.id.toString(), this.fb.control("", [Validators.required])
    ))
  }

  onSubmit(form) {
    this.isAnswered=true; 
    let answers = [];
    this.singleExercise[0].questions.forEach(pergunta => {
    answers.push(pergunta.answer)
    })


    let y=0
    let i=0; 
    for (const field in this.exerciseForm.controls) {
      if (this.exerciseForm.controls[field].value.trim().toLowerCase() == answers[i]) {
        this.singleExercise[0].questions[y].result = true; 
        this.result++
      }
      i++
      y++
    }
    
  }
  resetForm() {
    this.exerciseForm.markAsPristine();
    this.exerciseForm.reset();
    this.exerciseForm.updateValueAndValidity();
   

    this.isAnswered = false; 
    let z=0
    this.singleExercise[0].questions.forEach(n=> {
      this.singleExercise[0].questions[z].result = false; 
      z++
    })
    this.result=0
  }
}