import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Answer } from './answer.model';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  exercise1: FormGroup;
  isAnswered = false; 
  answerOne: string
  answerTwo: string
  answerThree: string
  answerFour: string
  answerFive: string
  result=0; 

  constructor(
    ) { }

  ngOnInit() {
    this.exercise1 = new FormGroup({
      'answer1' : new FormControl(null),
      'answer2' : new FormControl(null),
      'answer3' : new FormControl(null),
      'answer4' : new FormControl(null),
      'answer5' : new FormControl(null),   });
  }

  onSubmit(answer: Answer): void {  
    this.isAnswered = true; 
    if (answer.answer1?.trim().toLowerCase() == "sou") {
      this.answerOne="correct"
      this.result++
    } else {
      this.answerOne="incorrect"
    }

    if (answer.answer2?.trim().toLowerCase() == "é") {
      this.answerTwo="correct"
      this.result++
    } else {
      this.answerTwo="incorrect"
    }

    if (answer.answer3?.trim().toLowerCase() == "é") {
      this.answerThree="correct"
      this.result++
    } else {
      this.answerThree="incorrect"
    }

    if (answer.answer4?.trim().toLowerCase() == "está") {
      this.answerFour="correct"
      this.result++
    } else {
      this.answerFour="incorrect"
    }

    if (answer.answer5?.trim().toLowerCase() == "está") {
      this.answerFive="correct"
      this.result++
    } else {
      this.answerFive="incorrect"
    }
    console.log(this.result)
    console.log(answer.answer5)
    
}

  resetForm() {
    this.exercise1.markAsPristine();
    this.exercise1.reset();
    this.isAnswered = false; 
  }
}
