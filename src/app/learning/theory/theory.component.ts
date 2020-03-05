import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  pronoun: string;
  rule: string;
  example: string
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {pronoun: 'Eu', rule:'- ar + o', example: 'eu danço'},
  {pronoun: 'Você', rule:'- r', example: 'você dança'},
  {pronoun: 'Ele/Ela', rule:'- r', example: 'ele dança'},
  {pronoun: 'Nós', rule:'-r + mos', example: 'nós dançamos'},
  {pronoun: 'A gente', rule:'- r', example: 'a gente dança'},
  {pronoun: 'Vocês', rule:'- r + m', example: 'vocês dançam'},
  {pronoun: 'Ele/Ela', rule:'- r + m', example: 'elas dançam'},
  
];

const ELEMENT_DATA1: PeriodicElement[] = [
  {pronoun: 'Eu', rule:'- er + o', example: 'eu bebo'},
  {pronoun: 'Você', rule:'- r', example: 'você bebe'},
  {pronoun: 'Ele/Ela', rule:'- r', example: 'ele bebe'},
  {pronoun: 'Nós', rule:'-r + mos', example: 'nós bebemos'},
  {pronoun: 'A gente', rule:'- r', example: 'a gente bebe'},
  {pronoun: 'Vocês', rule:'- r + m', example: 'vocês bebem'},
  {pronoun: 'Ele/Ela', rule:'- r + m', example: 'elas bebem'},
  
];


@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.scss']
})
export class TheoryComponent implements OnInit {
  displayedColumns: string[] = ['pronoun', 'rule', 'example'];
  displayedColumns1: string[] = ['pronoun', 'rule', 'example'];
  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA1;

  constructor() { }

  ngOnInit(): void {
  }

}
