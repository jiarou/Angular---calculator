import { Injectable, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class ResultService {

  total = 0;
  num2;
  mathFnc = '';
  count = 0;
  active = '';


  zero(showing) {
    showing = '0';
    this.total = 0 ;
    this.active = '';
   return showing;
  }

 equal(showing) {
  this.num2 = Number(showing);
  switch (this.mathFnc) {
    case('+'): this.total = this.numAdd(this.total, this.num2);
      break ;
    case('-'): this.total = Number(this.numSubtract(this.total, this.num2 ));
      break;
    case('x'): this.total = this.numMultiply(this.total, this.num2 );
      break;
    case('÷'): this.total = Number(this.numDivide(this.total, this.num2 ));
      break;
      case('%'): this.total = Number(this.numRemainder(this.total, this.num2 ));
      break;
    }
    showing = String(this.total);
    this.num2 = 0;
    this.mathFnc = '';
    this.active = '';
    console.log(showing);
    return showing ;
 }


operator(math , showing) {
  this.count += 1;
  if (this.count === 1 ) {
    if ( this.total === 0 ) {
      this.total = Number(showing);
      this.mathFnc = math;
      this.active = '';
      showing = '0';
  } else {
    this.active = '';
    this.num2 = Number(showing);
    switch (this.mathFnc) {
      case('+'): this.total = this.numAdd(this.total, this.num2);
        break ;
      case('-'): this.total = Number(this.numSubtract (this.total, this.num2 ));
        break;
      case('x'): this.total = this.numMultiply (this.total, this.num2 );
        break;
      case('%'): this.total = Number(this.numRemainder(this.total, this.num2 ));
        break;
      }
      showing = String(this.total);
      this.num2 = 0;
      this.mathFnc = math;
    }

  } else if (this.count > 0 && this.mathFnc !== math ) {
    this.mathFnc = math;
    this.active = '';
   }
   return showing;
}

InputNum(num, showing) {
  if ( showing === '0') {
    showing = num;
  } else if ( this.mathFnc !== '' && showing.indexOf('.') !== -1 && this.total === 0) {
    showing = showing + num;
  } else if ( this.mathFnc !== '' && showing.indexOf('.') !== -1 && this.count === 0) {
    showing += num;
  } else if (this.mathFnc === '' ) {
    showing += num;
    this.total = Number(showing);
  } else if (this.total !== 0 && this.count >= 1) {
     showing = '';
     showing += num;
  } else {
    showing += num;

  }
  this.count = 0;
  return showing;

}


activefnc(math) {
  this.active = math ;
}

dot(showing) {
  if ( showing.indexOf('.') === -1) {
    showing = showing + '.';
  }
  return showing;
}


negative(showing) {
  if ( showing !== '0') {
     showing = String(0 - Number(showing));
  }
  return showing;
}


  numAdd( num1, num2) {
    let r1 , r2, m;
    try {
        r1 = num1.toString().split('.')[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = num2.toString().split('.')[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (num1 * m + num2 * m) / m;
}




numSubtract(arg1, arg2) {
  let r1, r2, m, n;
  try {
      r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
      r1 = 0;
  }
  try {
      r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
      r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = (r1 >= r2) ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

numMultiply( arg1, arg2) {
  let m = 0, s1, s2;
      s1 = arg1.toString(),
      s2 = arg2.toString();
  try {
      m += s1.split('.')[1].length;
  } catch (e) {}
  try {
      m += s2.split('.')[1].length;
  } catch (e) {}
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}

numDivide(arg1, arg2) {
  let t1 = 0,
      t2 = 0,
      r1, r2;
  try {
      t1 = arg1.toString().split('.')[1].length;
  } catch (e) {}
  try {
      t2 = arg2.toString().split('.')[1].length;
  } catch (e) {}

      r1 = Number(arg1.toString().replace('.', ''));
      r2 = Number(arg2.toString().replace('.', ''));
      return (r1 / r2) * Math.pow(10, t2 - t1);

}
numRemainder(arg1, arg2) {
  return arg1 % arg2 ;
}


}
