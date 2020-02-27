import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Answer, AnswerTwo } from './answer.model';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  exercise1: FormGroup;
  isAnsweredOne = false; 
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

  exercise2: FormGroup;
  isAnsweredTwo = false; 
  answerSix: string
  answerSeven: string
  answerEight: string
  answerNine: string
  answerTen: string
  result2=0; 
  answerSixCorrect= false;
  answerSevenCorrect= false;
  answerEightCorrect= false;
  answerNineCorrect= false;
  answerTenCorrect= false;


  constructor(
    ) { }

  ngOnInit() {
    this.exercise1 = new FormGroup({
      'answer1' : new FormControl(null),
      'answer2' : new FormControl(null),
      'answer3' : new FormControl(null),
      'answer4' : new FormControl(null),
      'answer5' : new FormControl(null),   });

      this.exercise2 = new FormGroup({
        'answer1' : new FormControl(null),
        'answer2' : new FormControl(null),
        'answer3' : new FormControl(null),
        'answer4' : new FormControl(null),
        'answer5' : new FormControl(null),   });
  }

  onSubmit(answer: Answer): void {  
    this.isAnsweredOne = true; 
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

    
}

onSubmitTwo(answerTwo: AnswerTwo): void {  
  this.isAnsweredTwo = true; 
  if (answerTwo.answer1?.trim().toLowerCase() == "vou") {
    this.answerSixCorrect=true; 
    this.result2++
  }

  if (answerTwo.answer2?.trim().toLowerCase() == "vai") {
    this.answerSevenCorrect=true;
    this.result2++
  }

  if (answerTwo.answer3?.trim().toLowerCase() == "vamos") {
    this.answerEightCorrect=true; 
    this.result2++
  }

  if (answerTwo.answer4?.trim().toLowerCase() == "vou") {
    this.answerNineCorrect=true; 
    this.result2++
  }

  if (answerTwo.answer5?.trim().toLowerCase() == "vão") {
    this.answerTenCorrect=true;
    this.result2++
  }
  
}

  resetForm() {
    this.exercise1.markAsPristine();
    this.exercise1.reset();
    this.isAnsweredOne = false; 
  }

  resetFormTwo() {
    this.exercise2.markAsPristine();
    this.exercise2.reset();
    this.isAnsweredTwo = false; 
  }
}
