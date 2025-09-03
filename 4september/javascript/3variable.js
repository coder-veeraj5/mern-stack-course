 
const myfunction=()=>{
try {
    var x="veeraj";
var x="viraj"; //redeclare
x="yash"  //reassign
console.log(x);

if(true){
    let b=10;
   // let  b=5;  can not redeclare
    b=50
     console.log(b);
     
}

const c=89;

//const c=90; can not redeclare
//c=80; can not reassign

    console.log(c);

} catch (error) {
    console.log(error);
    
}

}
myfunction();