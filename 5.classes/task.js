class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type){
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
   set state(newState){
     this._state = newState;
     if(this._state < 0){
       this._state = 0;
     }else if(this._state > 100){
       this._state = 100;
    }
   }
    get state(){
      return this._state;
    }
    fix(){
      this.state *=1.5;
    } 
    
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type){
      super(name, releaseDate,pagesCount,state);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type){
      super(name, releaseDate, pagesCount, state);
      this.type = "book";
      this.author = author; 
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type){
      super(author, name, releaseDate, pagesCount, state);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type){
      super(author, name, releaseDate, pagesCount, state);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type){
      super(author, name, releaseDate, pagesCount, state);
      this.type = "detective"; 
    }
  }
  


class Library{
    constructor(name, books){
      this.name = name;
      this.books = [];
    }
  
    addBook(book){
      if (book.state > 30){
        this.books.push(book);
      } 
    }
  
    findBookBy(type, value){
      let result;
      switch (type){
          
        case "type":
         result = this.books.find(book => book.type === value);
        break;
          
        case "author":
          result = this.books.find(book => book.author === value);
        break;
  
        case "name":
          result = this.books.find(book => book.name === value);
        break;
  
        case "releaseDate":
          result = this.books.find(book => book.releaseDate === value);
        break;
  
        case "pagesCount":
          result = this.books.find(book => book.pagesCount === value);
        break;
  
        case "state":
          result = this.books.find(book => book.state === value);
        break;
        
      }
      if (result === undefined){
        result = null;
      }
      return result
    }
  
    giveBookByName(bookName) {
      let bookIndex = this.books.findIndex(book => book.name === bookName);
      if (bookIndex < 0){
        return null
      }
      let result = this.books[bookIndex];
      this.books.splice(bookIndex, 1);
      return result
      
    }
  }

  class Student {
    constructor(name, gender, age, subjects) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.subjects = new Map();
    }
    addMark(mark, subject) {
      if (mark < 1 || mark > 5) {
        console.log("Ошибка, оценка должна быть числом от 1 до 5");
        return
      }
      if (this.subjects.has(subject)) {
        let marks = this.subjects.get(subject)
        marks.push(mark)
        this.subjects.set(subject, marks)
      } else {
        this.subjects.set(subject, [mark])
      }
    }
    getAverageBySubject(subject) {
      if (!this.subjects.has(subject)) {
        console.log("Несуществующий предмет", subject);
        return
      }
      let marks = this.subjects.get(subject);
      let sum = 0;
      for (let mark of marks) {
        sum += mark;
      }
      return sum / marks.length
    }
    getAverage() {
      let sum = 0;
      let quantity = 0;
      for (let marks of this.subjects.values()) {
        for (let mark of marks) {
          sum += mark;
          quantity++;
        }
      }
      return sum / quantity
    }
    exclude(reason) {
      this.subjects.clear();
      this.excluded = reason;
    }
  
  }