title();

//listen for submit
document.getElementById("token").addEventListener("submit",submittion);

function submittion(e){
    //getting values
    var name = document.getElementById("name").value;
    if(!name){
      alert("please fill the name");
      return false; }

    var student = {
        stdname : name 
   };
   e.preventDefault();

   

   //initiate array
   if(localStorage.getItem("details") === null){
      var details = [];
      details.push(student);//add object  to array 
      localStorage.setItem("details",JSON.stringify(details));
   }else{
      var details =JSON.parse(localStorage.getItem("details"));
      details.push(student);
      localStorage.setItem("details",JSON.stringify(details));
   }

   document.getElementById("token").reset();
   title();
   display();



};
function display(){
   var details =JSON.parse(localStorage.getItem("details"));
   var tablerow =document.getElementById("table");

   


   tablerow.innerHTML=``;
   for(var i = 0 ; i < details.length ; i++ ){
      var name = details[i].stdname;


      var url = new URL("http://127.0.0.1:5500/task7/mark.html");//1
      url.searchParams.append('x', i);//2
      console.log(url);

         tablerow.innerHTML += `
         <tr>
         <th>${i+1}</th>
         <td>${name}</td>
         <td class="text-end"><a href=${url}><button class="btn btn-light" >view mark</button></a></td>
         </tr>
         `;

         
    }
};

function title(){
   if(localStorage.getItem("details") === null){
      document.getElementById("title").innerHTML="NO STUDENTS ADDED";
   }else{
      document.getElementById("title").innerHTML="STUDENTS LIST";
   }
};
