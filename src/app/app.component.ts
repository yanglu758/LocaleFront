import { Component, AfterViewInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit{
  title = 'Welcome to Locale!\r\n Frontend Development work still in progress. Please stay tune!';

  ngAfterViewInit() {
  }
}
