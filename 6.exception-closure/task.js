function parseCount(item) {
    let parsed = Number.parseInt(item, 10);
    if (isNaN(parsed)) { 
      throw new Error("Невалидное значение");
    }
    return parsed;
  }
  
  function validateCount(item) {
    let parsed = 0;
    try {
     parsed = parseCount(item);
    }catch (error){
      return error;
    }
    return parsed;
  }


  class Triangle {
    constructor(a,b,c) {
      if ((a+b)<c || (a+c)<b || (b+c)<a){
        throw new Error("Треугольник с такими сторонами не существует");
      }else{
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
      }
    }
  
    getPerimeter(){
      return this.sideA + this.sideB + this.sideC;
    }
  
    getArea(){
      let p = this.getPerimeter() / 2;
      return +Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3)
    }
  }
  
  function getTriangle(a,b,c){
    let triangle;
    try{
      triangle = new Triangle(a,b,c);
    }catch {
      triangle = {};
      triangle.getPerimeter = () =>  "Ошибка! Треугольник не существует";
      triangle.getArea = () =>  "Ошибка! Треугольник не существует";
    }finally {
      return triangle;
    }
  }