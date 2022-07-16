function game()
{
    let score=0;

    var Q1=document.getElementById("i1");
    var Q2=document.getElementById("i2");
    var Q3=document.getElementById("i3");
    var Q4=document.getElementById("i4");
    var Q5=document.getElementById("i5");

    
    if(Q1.value!=0)
 {   
    if (Q1.value=="b")
    {
        score = score+20;
    }
 } 
 else
 {
score=score+0;
 } 
 if(Q2.value!=0)
 {   
    if (Q2.value=="a")
    {
        score = score+20;
    }
 } 
 else
 {
score=score+0;
 } 
 if(Q3.value!=0)
 {   
    if (Q3.value=="d")
    {
        score = score+20;
    }
 } 
 else
 {
score=score+0;
 }
 if(Q4.value!=0)
 {   
    if (Q4.value=="b")
    {
        score = score+20;
    }
 } 
 else
 {
score=score+0;
 } 
 if(Q5.value!=0)
 {   
    if (Q5.value=="a")
    {
        score = score+20;
    }
 } 
 else
 {
score=score+0;
 } 

alert(score);
 }
 
