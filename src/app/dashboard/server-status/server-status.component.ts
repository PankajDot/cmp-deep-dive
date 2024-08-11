import { Component, DestroyRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  //private destroyRef = inject(DestroyRef);
  private interval?: ReturnType<typeof setInterval>;
  constructor(){
    console.log('ServerStatusComponent constructor');
    this.interval = setInterval(() => {
      this.currentStatus = this.currentStatus === 'online' ? 'offline' : 'online';
    }, 5000)
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
    clearTimeout(this.interval);
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

}
