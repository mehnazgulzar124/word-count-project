


let button=document.getElementById("btn"); 
let outputDiv=document.getElementById("outputDiv");
let reset=document.getElementById("reset");
button.addEventListener("click", function () {
  let outputDiv=document.getElementById("outputDiv");

      let word = document.getElementById("str").value;
      let count = word.length;
      outputDiv.innerHTML = `<h1>${count}</h1>`;
    
    });
    reset.addEventListener('click',()=>{
      document.getElementById("str").value="";
      outputDiv.innerHTML="Counter";
      
    })