//Declare a function called "extractTitleAndAuthor" that takes an array of objects called "books".

const books = [{
    title: 'How to win friends and influence people',
    authors: ['Dale Carnegie'],
    year:'2002'

  }, {
    title: 'Management: tasks, responsibilities, practices',
    authors: ['Peter F. Drucker'],
    year:'2003'
   
  }, {
    title: 'Strength finder 2.0',
    authors: ['Tom Rath'],
    year:'2004'
    
  }, {
    title: 'In search of excellence: Lessons from America\'s best-run companies',
    authors: ['Thomas Peters', ' Robert H. Waterman'],
    
  }, {
    title: 'Built to last: Successful habits of visionary companies',
    authors: ['James C. Collins', 'Jerry I. Porras'],
    
  }, {
    title: 'Reengineering the corporation: A manifesto for business revolution',
    authors: ['Michael Hammer', 'James A. Champy'],
    
  }, {
    title: 'Competitive advantage: Creating and sustaining superior performance',
    authors: ['Michael E. Porter'],
    
  }, {
    title: 'Crossing the chasm: Marketing and selling technology products to mainstream customers',
    authors: ['Geoffrey A. Moore', 'Regis McKenna'],
    
  }, {
    title: '7 habits of highly effective people: Powerful lessons in personal change',
    authors: 'Stephen R. Covey',
    
  }]
  //Use array destructuring to extract the book title and author name from each object in the "books" array.
  for (const {title, authors} of books) {
    //console.log(title + ' ===> ' + authors);
  }
 //Use arrow functions and the map method of the "books" array to create a new array of objects that only contain the book title and author name.
function getFullName(item) {
  return [item.title,item.authors].join(" ");
}
//console.log( books.map(getFullName))

//Use the spread operator to pass the new array of objects as individual arguments to a console.log statement.
//function extractTitleAndAuthor(books) {
//    const titlesAndAuthors = books.map(book => ({title: book.title, authors: book.authors}));
//    
//    console.log(...titlesAndAuthors);
//  }
//const extractTitleAndAuthor={...books}
  //console.log(extractTitleAndAuthor)

  


  //Use the rest parameter to capture any additional arguments passed to the function.

  //function extractTitleAndAuthor(books, ...args) {
  //  const titlesAndAuthors = books.map(book => ({title: book.title, authors: book.authors}));
    
   const [firstName, lastName, ...otherInfo] = [
  books
];

console.log(otherInfo); 
  //}


      

