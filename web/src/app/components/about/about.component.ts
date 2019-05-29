import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  isSended: boolean;

  constructor() { }

  ngOnInit() {
  }

  send() {
    this.isSended = true;
    setTimeout(() => {
      this.isSended = false;
    }, 3000);
  }

}
