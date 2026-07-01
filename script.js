async function sendMessage(){

const input=document.getElementById("input");
const chat=document.getElementById("chat-box");

const message=input.value;

if(!message) return;

chat.innerHTML+=`<div class="user"><b>You:</b> ${message}</div>`;

input.value="";

const res=await fetch("/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:message
})
});

const data=await res.json();

chat.innerHTML+=`<div class="ai"><b>AuraAI:</b> ${data.reply}</div>`;

chat.scrollTop=chat.scrollHeight;

}
