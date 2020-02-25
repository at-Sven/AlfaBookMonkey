import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[bmHighlight]'
})

// Attribute Directives
export class HighlightDirective {

  constructor(private el: ElementRef) {
  }

  // Mauszeiger Aktionen
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow', 'black');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null, null);
  }

  private highlight(color: string, bg: string) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.backgroundColor = bg;
    this.el.nativeElement.class = 'test';
  }

  // Wenn man das Element anklickt
  @HostListener('click') myClickHandler() {
    this.el.nativeElement.style.color = 'white';
    this.el.nativeElement.style.backgroundColor = 'green';
  }
}
