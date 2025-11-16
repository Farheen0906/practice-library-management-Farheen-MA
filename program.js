/*
1. Step 1: Create a Base Class
○ Define a class LibraryItem to represent shared properties
(title, id, isAvailable) and methods (e.g., checkOut() and
returnItem()).
*/
class LibraryItem {
   constructor(title, id, isAvailable) {
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
}
checkOut(){
    throw new Error("This method must be implemented by subclass");
}
returnItem(){
   throw new Error("This method must be implemented by subclass");
}

}

/*
2. Step 2: Extend the Base Class
○ Create child classes Book, DVD, and Magazine that inherit from
LibraryItem.
○ Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
■ DVD: Add properties like director and duration.
■ Magazine: Add properties like issueNumber and publisher.
*/

class Book extends LibraryItem{
    
    constructor(author,genre){
        super("Harry Potter","id123","Available");
        this.author = author;
        this.genre = genre;
    }
checkOut(){
    console.log(`\x1b[31m The Book with Title: ${this.title}, Author: ${this.author}, Genre : ${this.genre}, Availability : ${this.isAvailable}\x1b[0m`);
}
returnItem(){
    console.log(`The Return for the book by author \x1b[31m ${this.author} \x1b[0m is completed`);
}
}

class DVD extends LibraryItem{
   
    constructor(director, duration) {
        super("Avatar","456","Available");
        this.director = director;
        this.duration = duration;
    }
checkOut(){
    console.log(`\x1b[31m DVD with Title: ${this.title} , Director: ${this.director} , Duration : ${this.duration},  Availability : ${this.isAvailable} \x1b[0m`);
}
returnItem(){
    console.log(`The Return for the DVD directed by \x1b[31m ${this.director} \x1b[0m is completed`);
}
}


class Magazine extends LibraryItem{
    constructor(issueNumber, publisher) {
        super("Time","789","Available");
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
checkOut(){
    console.log(`\x1b[31m The Magazine with Title: ${this.title}, Publisher: ${this.publisher}, Availability : ${this.isAvailable}\x1b[0m`);
}
returnItem(){
    console.log(`The Return for the Magazine published by \x1b[31m ${this.publisher} \x1b[0m is completed`);
}
}

/*
3. Step 3: Instantiate Objects
○ Create instances of each class and test the shared and unique
methods.
*/


const book = new Book("J.K. Rowling","Fantasy");
const dvd = new DVD("James Cameron","2h 43m");
const magazine = new Magazine("IssueNo899","Time Inc");

/*
4. Step 4: Test the Inheritance
○ Use inherited methods like checkOut() and returnItem() to
manage the availability of items.
○ Test accessing and displaying unique properties of each child
class.
*/

console.log(book);
console.log(dvd);
console.log(magazine);


book.checkOut();
book.returnItem();

dvd.checkOut();
dvd.returnItem();

magazine.checkOut();
magazine.returnItem();
