
fetchurl();
title();
console.log(window.location);

function fetchurl() {
   const url = window.location.search;
   const urlParams = new URLSearchParams(url);
   const product = urlParams.get('x')
   var i=product;
   var j= "marks";
   var k=j+i;
   return k;
};

document.getElementById("markentry").addEventListener("submit",markentry);

function markentry(e){
    var subject = document.getElementById("sub").value;
    var firstI = document.getElementById("1mark").value;
    var secondI = document.getElementById("2mark").value;
    var External = document.getElementById("tmark").value;

    if(!subject || !firstI || !secondI || !External){
        alert("please fill all fields");
        return false; }

    var marks = {
        subject : subject,
        firstI : firstI,
        secondI : secondI,
        External : External
    };
   
    e.preventDefault();

     //initiate array
   if(localStorage.getItem(fetchurl()) === null){
    var scores = [];
    scores.push(marks);//add object  to array 
    localStorage.setItem(fetchurl(),JSON.stringify(scores));
 }else{
    var scores =JSON.parse(localStorage.getItem(fetchurl()));
    scores.push(marks);
    localStorage.setItem(fetchurl(),JSON.stringify(scores));
 }
 title();
 show();
};

function show(){
    var item =JSON.parse(localStorage.getItem(fetchurl()));
    var table =document.getElementById("table");

    const total = document.createElement('tr');

    if(localStorage.getItem(fetchurl()) !== null){
    table.innerHTML=`
    <thead>
         <tr>
            <th>No</th>
            <th>Subject</th>
            <th>First Internal(20)</th>
            <th>Second Internal(20)</th>
            <th>External(60) </th>
            <th>Total</th>
        </tr>
    </thead>`;


    for(var i = 0 ; i < item.length ; i++ ){
       var sub = item[i].subject;
       var fir = +item[i].firstI;
       var sec = +item[i].secondI;
       var ext = +item[i].External;
    
          table.innerHTML += `
          <tr>
          <th>${i+1}</th>
          <td>${sub}</td>
          <td>${fir}</td>
          <td>${sec}</td>
          <td>${ext}</td>
          <td>${fir + sec + ext}</td>
          </tr>
          `;
     }};

     
     if(localStorage.getItem(fetchurl()) !== null){
        table.innerHTML +=`
            <tr>
            <th></th>
            <td>CGPA</td>
            <td></td>
            <td></td>
            <td></td>
            <td>${(fir + sec + ext)/100}</td>
            </tr>
    `;}

 };

 function title(){
    if(localStorage.getItem(fetchurl()) === null){
       document.getElementById("title").innerHTML="NO MARKS ADDED";
    }
   else{
      document.getElementById("title").innerHTML=" ";
   }};