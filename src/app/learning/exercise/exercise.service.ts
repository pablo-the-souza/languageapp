
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
    ]),

    
      new Exercise("Based on the verb structures section in Theory, fill in the blanks using the conjugations of the verb 'pegar'(to get/to take)", [
        new Question(1, "A Jess", "o ônibus todos os dias", "Jess gets the bus every day", "pega", false),
        new Question(2, "Eu", "uma gripe forte todos os anos", "I get a strong flu every day", "pego", false),
        new Question(3, "Meu irmão sempre", "minhas roupas", "My brother always takes my clothes", "pega", false),
        new Question(4, "Eles", "os ingredientes com as mãos sujas", "They get the ingredientes with their dirty hands", "pegam", false),
        new Question(5, "Nós", "o trem juntos", "We take the train together", "pegamos", false),
        new Question(6, "Eu não", "o sushi com pauzinhos", "I don't get the sushi with chopsticks", "pego", false)
      ]),

      new Exercise("Based on the verb structures section in Theory, fill in the blanks using the conjugations of the verb 'comer'(to get/to take)", [
        new Question(1, "Kimberlie não", "carne.", "Kimberlie doesn't eat meat.", "come", false),
        new Question(2, "Você", "muito!", "You eat a lot!", "come", false),
        new Question(3, "Vocês nunca", "juntos?", "Don't you (all) ever eat together?", "comem", false),
        new Question(4, "Adoro quando nós", "comida brasileira. ", "I love when we eat brazilian food.", "comemos", false),
        new Question(5, "Os professores", "e voltam às aulas.", "The teachers eat and go back to classes.", "comem", false),
        new Question(6, "Eu", "ovo mexido todos os dias.", "I eat scrambled eggs every day.", "como", false)
      ])
    ];
    
  
  
  getExercises() {
    return this.exercises.slice()
  }
}