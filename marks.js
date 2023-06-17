fetchurl();
title();


function fetchurl() {
   const url = window.location.search;
   const urlParams = new URLSearchParams(url);
   const product = urlParams.get('x')
   var i=product;
   var j= "marks";
   var k=j+i;
   return k;
};


document.getElementById("submit").addEventListener("click",markentry);

function markentry(e){

    var subject = document.getElementById("sub").value;
    var firstI = document.getElementById("1mark").value;
    var secondI = document.getElementById("2mark").value;
    var External = document.getElementById("tmark").value;

//alert
    if(!subject || !firstI || !secondI || !External){
        alert("please fill all fields");
        return false; };

//creating object
    var marks = {
        subject : subject,
        firstI : firstI,
        secondI : secondI,
        External : External
    };

    e.preventDefault();
    show();

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

 document.getElementById("model").reset();
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
      var Total=0;
    for(var i = 0 ; i < item.length ; i++ ){
       var sub = item[i].subject;
       var fir = +item[i].firstI;
       var sec = +item[i].secondI;
       var ext = +item[i].External;
      var Totalpercent = (fir+  sec+ ext)/100;
      Total += Totalpercent;
      console.log(Total);

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

     var cgpa = Total /(i);

     if(localStorage.getItem(fetchurl()) !== null){
        table.innerHTML +=`
            <tr>
            <th></th>
            <td>CGPA</td>
            <td></td>
            <td></td>
            <td></td>
            <td>${cgpa}</td>
            </tr>
             `;

}};
 function title(){
    if(localStorage.getItem(fetchurl()) === null){
       document.getElementById("title").innerHTML="NO MARKS ADDED";
    }  
   else{
      document.getElementById("title").innerHTML=" ";
   }};
