
import { Injectable } from '@angular/core';
import { Exercise } from './shared/exercise.model';
import { Question } from './shared/question.model';

@Injectable()

export class ExerciseService {
  private exercises: Exercise[] = [
    new Exercise("Based on the verb structures section in Theory, fill in the blanks using the conjugations of the verb 'achar'(to think - meaning having an opinion)", [
      new Question(1, "Tarcisio and Jada", "você muito boa", "Tarcisio and Jada think you're great.", "acham", false),
      new Question(2, "Eu não", "que essa música é boa.", "I don't think it's a good song.", "acho", false),
      new Question(3, "Você não", "?", "Don't you think?", "acha", false),
      new Question(4, "Vocês", "que eu sou burro?", "Do you (all) think I'm stupid?", "acham", false),
      new Question(5, "A gente", "que você merece uma chance", "We think you deserve a chance.", "acha", false),
    ])
  ];
  
  getExercises() {
    return this.exercises.slice()
  }
}