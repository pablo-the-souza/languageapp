import { FormControl, FormGroup } from '@angular/forms';
import { Answer } from '../answer.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.scss']
})
export class Exercise2Component implements OnInit {
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
    if (answer.answer1?.trim().toLowerCase() == "vou") {
      this.answerOneCorrect=true
      this.result++ 
    }
    

    if (answer.answer2?.trim().toLowerCase() == "vai") {
      this.answerTwoCorrect=true
    this.result++ 
    }
    

    if (answer.answer3?.trim().toLowerCase() == "vamos") {
      this.answerThreeCorrect=true
    this.result++ 
    }
    

    if (answer.answer4?.trim().toLowerCase() == "vou") {
      this.answerFourCorrect=true
    this.result++ 
    }
    

    if (answer.answer5?.trim().toLowerCase() == "vão") {
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
