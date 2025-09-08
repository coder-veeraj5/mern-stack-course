//syncronus 

console.log(1);
  console.log(2);
   console.log(3);


   // asyncronus
  console.log("first");
  setTimeout(()=>{
console.log("second");
  },2000)
  

 
   console.log("third");
   

   //call back function is passs as argument 

  function myfun(sum){
    console.log("hello we are performing sum");
   console.log(sum(4,5)) 
  }
   function sum(a,b) {
    return a+b;
  }
  
  myfun(sum);


//asyn/await

  // const getdata =async()=>{
  //   try {
      
  //     const data=await User.findOne();
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }


  