import { Injectable, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

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
