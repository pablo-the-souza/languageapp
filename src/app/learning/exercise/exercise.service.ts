import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class AnswerService {
  answerReceived = new Subject<boolean>();
}