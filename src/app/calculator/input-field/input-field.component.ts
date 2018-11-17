import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResultService } from '../result.service';


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  @Input() showing;
  @Output()
  changeShowing = new EventEmitter<any>();
  // 發射showing改變的通知




  constructor(public resultsvc: ResultService ) { }
  InputNum(num) {
    this.showing = this.resultsvc.InputNum(num, this.showing);
    this.changeShowing.emit(this.showing);
    // 告訴父元件我改變了什麼值
  }

  dot() {
      this.showing = this.resultsvc.dot(this.showing);
      this.changeShowing.emit(this.showing);
  }

  negative() {
       this.showing = this.resultsvc.negative(this.showing);
       this.changeShowing.emit(this.showing);
  }

  operator(math) {
     this.showing = this.resultsvc.operator(math, this.showing);
     this.changeShowing.emit(this.showing);
    }
  equal() {
      this.showing = this.resultsvc.equal(this.showing);
      this.changeShowing.emit(this.showing);
    }

  zero() {
    this.showing = this.resultsvc.zero(this.showing);
    this.changeShowing.emit(this.showing);
  }
  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
  }


}
