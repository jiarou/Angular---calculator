import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  showing = '0';
  constructor() { }
  // 改變顯示的數字
  ChangeShowing(newShowing) {
    this.showing = newShowing;
  }

  ngOnInit() {
  }

}
