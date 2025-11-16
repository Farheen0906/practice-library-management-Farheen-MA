/*
1. Step 1: Create a Base Class
○ Define a class LibraryItem to represent shared properties
(title, id, isAvailable) and methods (e.g., checkOut() and
returnItem()).
*/

//Parent class LibraryItem
class LibraryItem {
   constructor(title, id, isAvailable) {
        this.title = title;
        this.id = id;
        this.isAvailable = true;
    }
checkOut(){
    if(this.isAvailable){
        this.isAvailable = false;
        console.log(`${this.title} has been checked out`);
    }else{
        console.log(`${this.title} is not available`);
    }
}
returnItem(){
 if(!this.isAvailable){
    this.isAvailable = true;
    console.log(`${this.title}  has been returned`);
 }else{
    console.log(`${this.title} has not been returned`);
 }
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

//Child class Book
class Book extends LibraryItem{
    constructor(title,id,author,genre){
        super(title,id);
        this.author = author;
        this.genre = genre;
    }
displayDetails(){
    console.log(`\x1b[31m The Book with Title: ${this.title}, Author: ${this.author}, Genre : ${this.genre}, Availability : ${this.isAvailable}\x1b[0m`);
}
}

//Child class DVD
class DVD extends LibraryItem{
   constructor(title,id,director, duration) {
        super(title,id);
        this.director = director;
        this.duration = duration;
    }
displayDetails(){
    console.log(`\x1b[31m DVD with Title: ${this.title} , Director: ${this.director} , Duration : ${this.duration},  Availability : ${this.isAvailable} \x1b[0m`);
}
}

//Child class Magazine
class Magazine extends LibraryItem{
    constructor(title,id,issueNumber, publisher) {
        super(title,id);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
displayDetails(){
    console.log(`\x1b[31m The Magazine with Title: ${this.title}, Publisher: ${this.publisher}, Availability : ${this.isAvailable}\x1b[0m`);
}
}

/*
3. Step 3: Instantiate Objects
○ Create instances of each class and test the shared and unique
methods.
*/


const book = new Book("Harry Potter","123","J.K. Rowling","Fantasy");
const dvd = new DVD("Avatar","456","James Cameron","2h 43m");
const magazine = new Magazine("Time","789","IssueNo899","Time Inc");

/*
4. Step 4: Test the Inheritance
○ Use inherited methods like checkOut() and returnItem() to
manage the availability of items.
○ Test accessing and displaying unique properties of each child
class.
*/
//displaying child objects
console.log(book);
console.log(dvd);
console.log(magazine);

//displaying unique properties of each child class
book.displayDetails();
dvd.displayDetails();
magazine.displayDetails();


//stimulating checkout process by accessing shared methods
book.checkOut();
//When you try to checkout an unavailable book
book.checkOut();
//stimulating checkout process by accessing shared methods
dvd.checkOut();
magazine.checkOut();
//stimulating return proces by accessing shared methods
book.returnItem();
dvd.returnItem();
magazine.returnItem();
