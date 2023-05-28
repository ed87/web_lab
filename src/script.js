function area(){
   var s1= parseFloat(document.getElementById ("s1"),valu);   
   var s2= parseFloat(document.getElementById ("s2"),valu); 
   var s3= parseFloat(document.getElementById ("s3"),valu);
   
   
   var p=(s1+s2+s3)/2;
   var a = Math.sqrt(p*(p-s1)*(p-s2)*(p-3))
   
   document.getElementById("r").innerHTML=a;
}