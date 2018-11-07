import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  atext = '';
  title = 'ang-exam1';
  constructor () {}

  ngOnInit() {
  }

  keyUp() {
    alert('a');
  }
}
