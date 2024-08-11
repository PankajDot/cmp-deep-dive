import { AfterContentInit, afterNextRender, afterRender, Component, ContentChild, contentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    //'(click)': 'onClick($event)'
  }
})
export class ControlComponent implements AfterContentInit {
  
  constructor() {
    afterRender(() => {
      console.log('ControlComponent afterRender');
    });
    afterNextRender(() => {
      console.log('ControlComponent afterNextRender');
    });
  }
  //@HostBinding('class') className = 'control';
  label = input.required<string>();
  // @HostListener('click') onClick1() {
  //   console.log('ControlComponent clicked: ');
  // }
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  //private control: contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>; 
  private el = inject(ElementRef).nativeElement;

  onClick() {
    console.log('ControlComponent clicked:');
    console.log(this.el);
    console.log(this.control);
  }

  ngAfterContentInit(): void {
    console.log('ControlComponent ngAfterContentInit');
    console.log(this.control);
    if (this.control) {
      console.log(this.control.nativeElement);
    }
  }
}
