import { Component, OnInit, Input, ɵConsole } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import "firebase/firestore";
import { Observable } from "rxjs";
import { Exercise } from "../shared/exercise.model";

@Component({
  selector: "app-exercisetests",
  templateUrl: "./exercisetests.component.html",
  styleUrls: ["./exercisetests.component.scss"]
})
export class ExerciseTestsComponent implements OnInit {
  exercises: Observable<any>
  exerciseForm: FormGroup;
  isAnswered: boolean;
  isCorrect: boolean;
  exerciseTest: any;
  instructions: any; 

  constructor(private fb: FormBuilder, private db: AngularFirestore) {}

  ngOnInit(): void {
    this.db.collection("availableExercises")
    .valueChanges()
    .subscribe(val=> {
      this.instructions = val.slice(1);
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
          this.exerciseForm.addControl(control.prefix, this.fb.control(""))
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
      if (this.exerciseForm.controls[field].value == answers[i]) {
        this.exerciseTest[0].result = true;
      }
      i++;
      y++;
    }
  }
  resetForm() {
    this.exerciseForm.markAsPristine();
    this.exerciseForm.reset();
    this.isAnswered = false;
    let z = 0;
    this.exerciseTest[0].forEach(n => {
      this.exerciseTest[0].result = false;
      z++;
    });
  }
}

// console.log("Below is the list of answers")
// Object.keys(this.exerciseForm.value).forEach((key,index) => {
//   console.log(key, this.exerciseForm.value[key])
// })
