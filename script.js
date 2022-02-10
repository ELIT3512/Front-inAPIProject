
const contactsDiv = document.getElementById('contacts');
let input = document.getElementsByTagName("input")[0];
let subButton = document.getElementById("subB");
let his = document.getElementById("history"); 
let outA = document.getElementById("anwser");

subButton.addEventListener("click", function(){
let inP = input.value;
let para = document.createElement("p");
para.innerText = inP;
his.appendChild(para);
input.innerText ="";




// let out = document.createElement("p");
// out.innerText = API;
// outA.appendChild(out);




});



fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/test`)
      .then(res => {
        console.log(res)
        return res.json()
        
      })
    //   .then(data => {
    //      const contact = data.data;

    //      console.log(data)   
         
         // contact.forEach(person => {
         //    let tempPersonHTML = `<div class="col">${person.first_name}</div>`;
         //    contactsDiv.innerHTML += tempPersonHTML;
         // });

         
    //   })
     