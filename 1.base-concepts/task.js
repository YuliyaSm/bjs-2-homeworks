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
  let wrongParameter;
   if (isNaN(parseFloat(percent)) && ! isFinite(percent)){
    return "Параметр \"Процентная ставка\" содержит неправильное значение \"" + percent + "\"";
   }
   if (isNaN(parseFloat(contribution)) && ! isFinite(contribution)){
    return "Параметр \"Начальный взнос\" содержит неправильное значение \"" + contribution + "\"";
  }
  if (isNaN(parseFloat(amount)) && ! isFinite(amount)){
    return "Параметр \"Общая стоимость\" содержит неправильное значение \"q" + amount + "\"";
  }
  let months;
  let today = new Date(Date.now());
  months = (date.getFullYear() - today.getFullYear()) * 12;
  months -= today.getMonth() + 1;
  months += date.getMonth();
  if (date.getDate() >= today.getDate()){
    months ++
  }
  if (months < 0){
    return "Параметр \"Дата\" не может быть ранее сегодняшнего дня ";
  }

  let body = amount - contribution;
  let monthlyRate = percent/100/12;
  let monthlyPayment = body*(monthlyRate+(monthlyRate/(((1+monthlyRate)**months)-1)));
  totalAmount = (monthlyPayment*months).toFixed(2);

  console.log(+totalAmount);
  return +totalAmount;
}

