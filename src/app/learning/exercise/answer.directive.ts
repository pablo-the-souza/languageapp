import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAnswer]'
})

export class AnswerDirective implements OnInit {
  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef) {}

  ngOnInit () {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
}