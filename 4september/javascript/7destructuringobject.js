 
//destructuring of object

    const obj={
        name: "veeraj",
        surname:"patil",
        obj2:{
       
            age:16,
        }
    }
    const {name:naam,surname}=obj; 
    console.log(naam,surname);

    const {age}=obj.obj2; 
    console.log(age);
    
    //destructuring of array

    const arr=[2,4,6,8,10];

    const [a,b,c]=arr;
    console.log(a,b,c);
    
    