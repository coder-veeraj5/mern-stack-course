//  console.log("hello");
 
// closure = we can access variable of outer function in inner but not variable of inner function outside

 function first() {
    
const name="veeraj";


  function second() {
    var surname="patil";
    const age=20;
 
 if(true){
//  const newno=55; //block scoped -  accessible only if block
    var newage=22; // function scope - accissible in second (); 

 }
// console.log(newno);

 console.log(newage);
 
    console.log(name +" "+surname+ " " +age );
    
  }
// console.log(age);
// console.log(surname);


second();

 }

 first();