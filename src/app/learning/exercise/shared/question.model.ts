

export class Question {
  constructor (
    public id: number,
    public prefix: string,
    public sufix: string,
    public translation: string,
    public answer: string,
    public result: boolean, 
    ) {}
}


