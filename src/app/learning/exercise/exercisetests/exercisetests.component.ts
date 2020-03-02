import { Component, OnInit, Input, ɵConsole } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Exercise } from '../shared/exercise.model';
import { Question } from '../shared/question.model';


@Component({
  selector: "app-exercisetests",
  templateUrl: "./exercisetests.component.html",
  styleUrls: ["./exercisetests.component.scss"]
})
export class ExerciseTestsComponent implements OnInit {
  exerciseForm: FormGroup;
  isAnswered: boolean; 
  isCorrect: boolean; 

  exercises: Exercise[] = [
    new Exercise("Answer this question", [
      new Question(1, "Eu", "maluco", "I am crazy", "sou", false),
      new Question(2, "Eu", "doidinho", "I am cuckoo", "estou", false)
    ])
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createGroup();
  }

  getAnswersArray() {}

  createGroup() {
    this.exerciseForm = this.fb.group({});
    this.exercises[0].questions.forEach(control =>
      this.exerciseForm.addControl(control.id.toString(), this.fb.control(""))
    );
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
      if (this.exerciseForm.controls[field].value == answers[i]) {
        this.exercises[0].questions[y].result = true; 
      }
      i++
      y++
    }
    
  }
  resetForm() {
    this.exerciseForm.markAsPristine();
    this.exerciseForm.reset();
    this.isAnswered = false; 
    let z=0
    this.exercises[0].questions.forEach(n=> {
      this.exercises[0].questions[z].result = false; 
      z++
    })
  }
}

// console.log("Below is the list of answers")
    // Object.keys(this.exerciseForm.value).forEach((key,index) => {
    //   console.log(key, this.exerciseForm.value[key])
    // })


