const calculateMarks=()=>{
    let totalMarks=400;
    let marks1=+document.getElementById("marks1").value;
    let marks2=+document.getElementById("marks2").value;
    let marks3=+document.getElementById("marks3").value;
    let marks4=+document.getElementById("marks4").value;

    if(marks1<0||marks2<0||marks3<0||marks4<0){

        const alert= document.querySelector(".alert")
      alert.classList.remove("hidden");
      const h4=document.createElement("h4");
      h4.innerText="Please enter marks greater than 0";
            document.querySelector(".alert").appendChild(h4);
            document.getElementById("show-result").style.display="none";
            
            setTimeout(()=>{
                document.querySelector(".alert").classList.add("hidden");  
                alert.removeChild(h4);
  },2000)
}
   else if(marks1==0||marks2==0||marks3==0||marks4==0){
      const alert= document.querySelector(".alert")
      alert.classList.remove("hidden");
const h4=document.createElement("h4");
h4.innerText="Please enter marks";
      document.querySelector(".alert").appendChild(h4);
      document.getElementById("show-result").style.display="none";

  setTimeout(()=>{
    document.querySelector(".alert").classList.add("hidden");  
    alert.removeChild(h4);
  },2000)

    }

    else if(marks1>100||marks2>100||marks3>100||marks4>100){
        const alert= document.querySelector(".alert")
      alert.classList.remove("hidden");
      const h4=document.createElement("h4");
      h4.innerText="Marks cannot be greater than 100";
            document.querySelector(".alert").appendChild(h4);
            document.getElementById("show-result").style.display="none";

  setTimeout(()=>{
    document.querySelector(".alert").classList.add("hidden"); 
    alert.removeChild(h4);
  },2000)
    }
else{
    let marks=marks1+marks2+marks3+marks4;
   let percentage=marks/totalMarks*100;
   let grade="";
   let status="";
   if(percentage>70){
       grade="A"
   }
   else if(percentage>50){
       grade="B"
   }
   else if(percentage>=40){
       grade="C"
   }
   else{
       grade="D"
   }
   if(grade=="A"||grade=="B"||grade=="C"){
       status="Pass"
   }
   else{
       status="Fail"
   }
   marks=Math.round(marks,2);
   let html=`
   <h4>Out of ${totalMarks} is ${marks} and percentage is 
   ${percentage}%. Your grade is ${grade}. You are ${status}.</h4>`
   document.getElementById("show-result").style.display="block";
document.getElementById("show-result").innerHTML=html;
} 
}

document.getElementById("result").addEventListener("click",calculateMarks);