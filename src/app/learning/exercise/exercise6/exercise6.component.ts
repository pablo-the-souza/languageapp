import { Component, OnInit, Input, ɵConsole } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Exercise } from '../shared/exercise.model';
import { Question } from '../shared/question.model';
import { ExerciseService } from '../exercise.service';


@Component({
  selector: "app-exercise6",
  templateUrl: "./exercise6.component.html",
  styleUrls: ["./exercise6.component.scss"]
  
})
export class Exercise6Component implements OnInit {
  exercises: Exercise[];
  exerciseForm: FormGroup;
  isAnswered: boolean; 
  isCorrect: boolean; 
  result=0; 
  

  constructor(private fb: FormBuilder,  private exerciseService: ExerciseService) {}

  ngOnInit(): void {
    this.exercises = this.exerciseService.getExercises();
    this.createGroup();
  }

  createGroup() {
    this.exerciseForm = this.fb.group({});
    this.exercises[0].questions.forEach(control =>
      this.exerciseForm.addControl(control.id.toString(), this.fb.control("", [Validators.required])
    ))
  }

  onSubmit(form) {
    this.isAnswered=true; 
    let answers = [];
    this.exercises[0].questions.forEach(pergunta => {
    answers.push(pergunta.answer)
    })


    let y=0
    let i=0; 
    for (const field in this.exerciseForm.controls) {
      if (this.exerciseForm.controls[field].value.trim().toLowerCase() == answers[i]) {
        this.exercises[0].questions[y].result = true; 
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
    this.exercises[0].questions.forEach(n=> {
      this.exercises[0].questions[z].result = false; 
      z++
    })
    this.result=0
  }
}