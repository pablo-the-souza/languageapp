import { Question } from "./question.model";

export class Exercise {
  constructor(
    public instruction: string,
    public questions: Question[],  
  )    {}
}
