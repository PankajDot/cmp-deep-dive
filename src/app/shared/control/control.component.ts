import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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
export class ControlComponent {
  //@HostBinding('class') className = 'control';
  label = input.required<string>();
  // @HostListener('click') onClick1() {
  //   console.log('ControlComponent clicked: ');
  // }
  private el = inject(ElementRef).nativeElement;

  onClick() {
    console.log('ControlComponent clicked:');
    console.log(this.el);
  }
}
