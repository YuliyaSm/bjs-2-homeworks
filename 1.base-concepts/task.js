"use strict";

function solveEquation(a, b, c) {
  let arr;
  arr = []
  let desc = b**2-4*a*c; 
  let x1;
  let x2; 
  if (desc > 0) {
    x1=(-b+Math.sqrt(desc))/(2*a);
    x2=(-b-Math.sqrt(desc))/(2*a);
    arr.push(x1,x2);
    return arr;
  } 
  if (desc === 0) {
    x1=-b/(2*a);
    arr.push(x1);
    return arr;
  } 
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
