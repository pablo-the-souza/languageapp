import { Component, OnInit, Input, ɵConsole } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import "firebase/firestore";

@Component({
  selector: "app-exercise9",
  templateUrl: "./exercise9.component.html",
  styleUrls: ["./exercise9.component.scss"]
})
export class Exercise9Component implements OnInit {
  exerciseForm: FormGroup;
  isAnswered: boolean;
  isCorrect: boolean;
  exerciseTest: any;
  instructions: any; 
  result= 0; 

  constructor(private fb: FormBuilder, private db: AngularFirestore) {}

  ngOnInit(): void {
    this.db.collection("availableExercises")
    .valueChanges()
    .subscribe(val=> {
      this.instructions = val.slice(0,1);
    })

    this.db
      .collection("availableExercises")
      .doc("1")
      .collection("questions")
      .valueChanges()
      .subscribe(res => {
        this.exerciseTest = res; 
        this.exerciseForm = this.fb.group({});
        this.exerciseTest.forEach(control =>
          this.exerciseForm.addControl(control.prefix, this.fb.control("", [Validators.required]))
        );
      });
  }
  
  createGroup() {}

  onSubmit(form) {
    
    this.isAnswered = true;
    let answers = [];
    this.exerciseTest.forEach(pergunta => {
      answers.push(pergunta.answer);
    });

    let y = 0;
    let i = 0;
    for (const field in this.exerciseForm.controls) {
      if (this.exerciseForm.controls[field].value.trim().toLowerCase() == answers[i]) {
        this.exerciseTest[y].result = true;
        this.result++
      }
      console.log(this.exerciseTest)
      i++;
      y++; 
    }
  }
  resetForm() {
    this.exerciseForm.markAsPristine();
    this.exerciseForm.reset();
    this.exerciseForm.updateValueAndValidity();
    this.isAnswered = false;
    let z = 0;
    this.exerciseTest.forEach(n => {
      this.exerciseTest[z].result = false;
      z++;
    });
    this.result=0
  }
}