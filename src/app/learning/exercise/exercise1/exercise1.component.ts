import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Answer } from '../answer.model';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.scss']
})
export class Exercise1Component implements OnInit {
  exercise1: FormGroup;
  isAnswered = false; 
  answerOne: string
  answerTwo: string
  answerThree: string
  answerFour: string
  answerFive: string
  result=0; 
  answerOneCorrect= false;
  answerTwoCorrect= false;
  answerThreeCorrect= false;
  answerFourCorrect= false;
  answerFiveCorrect= false;


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
      this.answerOneCorrect=true
    this.result++    
    }

    if (answer.answer2?.trim().toLowerCase() == "é") {
      this.answerTwoCorrect=true
    this.result++    
    }

    if (answer.answer3?.trim().toLowerCase() == "é") {
      this.answerThreeCorrect=true
    this.result++    
    }

    if (answer.answer4?.trim().toLowerCase() == "está") {
      this.answerFourCorrect=true
    this.result++
    }

    if (answer.answer5?.trim().toLowerCase() == "está") {
      this.answerFiveCorrect=true
    this.result++    
    }
  
}

  resetForm() {
    this.exercise1.markAsPristine();
    this.exercise1.reset();
    this.isAnswered = false; 
    this.result=0
    this.answerOneCorrect= false;
    this.answerTwoCorrect= false;
    this.answerThreeCorrect= false;
    this.answerFourCorrect= false;
    this.answerFiveCorrect= false;
  }

  
}
