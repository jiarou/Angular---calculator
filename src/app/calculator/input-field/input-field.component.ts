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
  total = 0;
  num2;
  mathFnc = '';


  constructor(public resultsvc: ResultService ) { }
  InputNum(num) {
    if ( this.showing === '0') {
      this.showing = num;
    } else if ( this.mathFnc !== '') {
      this.showing = num;
    } else if (this.mathFnc === '') {
      this.showing += num;
      this.total = Number(this.showing);
    } else {
      this.showing += num;

    }
    this.changeShowing.emit(this.showing);
    // 告訴父元件我改變了什麼值
  }

  operator(math) {
    if ( this.total === 0 ) {
        this.total = Number(this.showing);
        this.mathFnc = math;
        this.showing = '0';
    } else {
      this.num2 = Number(this.showing);
      switch (this.mathFnc) {
        case('+'): this.total = this.resultsvc.numAdd(this.total, this.num2);
          break ;
        case('-'): this.total = Number(this.resultsvc.numSubtract (this.total, this.num2 ));
          break;
        case('x'): this.total = this.resultsvc.numMultiply (this.total, this.num2 );
          break;
        case('%'): this.total = Number(this.resultsvc.numRemainder(this.total, this.num2 ));
          break;
        }
        this.showing = String(this.total);
        this.num2 = 0;
        this.mathFnc = math;
      }
      this.changeShowing.emit(this.showing);
    }

  equal() {
    console.log('3');
    this.num2 = Number(this.showing);
    switch (this.mathFnc) {
      case('+'): this.total = this.resultsvc.numAdd(this.total, this.num2);
        break ;
      case('-'): this.total = Number(this.resultsvc.numSubtract(this.total, this.num2 ));
        break;
      case('x'): this.total = this.resultsvc.numMultiply(this.total, this.num2 );
        break;
      case('÷'): this.total = Number(this.resultsvc.numDivide(this.total, this.num2 ));
        break;
        case('%'): this.total = Number(this.resultsvc.numRemainder(this.total, this.num2 ));
        break;
      }
      this.showing = String(this.total);
      this.num2 = 0;
      this.mathFnc = '';
      this.changeShowing.emit(this.showing);
    }

  zero() {
    this.showing = '0';
    this.total = 0 ;
    this.changeShowing.emit(this.showing);
  }
  ngOnInit() {
  }



}
