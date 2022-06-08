
 var x= parseInt(prompt("Enter a First Number"))
 var z=prompt("Enter the Operator")
 var y= parseInt(prompt("Enter A Second Number"))

 if(z=="+")
 {
     
    add=x+y;
    console.log(add);

 }
 else if(z=="-")
 {
     sub=x-y;
     console.log(sub);
 }
 else if(z=="*")
 {
     multi=x*y;
     console.log(multi);
 }
 else if(z=="/")
 {
   divi=x/y;
   console.log(divi)
 }
 else{
     console.log("undefined number")
 }