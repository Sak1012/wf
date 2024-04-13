import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#faacac');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('#acfaac'); // Passing null is now valid
  }

  private highlight(color: string | null) {
    // Accepts string or null
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
