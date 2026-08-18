const weddingDate = new Date("2027-06-05T14:00:00+02:00");
const days=document.getElementById("days");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");

function updateCountdown(){
  const distance=weddingDate-new Date();
  if(distance<=0){days.textContent="0";hours.textContent="0";minutes.textContent="0";seconds.textContent="0";return;}
  const total=Math.floor(distance/1000);
  days.textContent=Math.floor(total/86400);
  hours.textContent=String(Math.floor((total%86400)/3600)).padStart(2,"0");
  minutes.textContent=String(Math.floor((total%3600)/60)).padStart(2,"0");
  seconds.textContent=String(total%60).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);

const menuButton=document.querySelector(".menu-button");
menuButton?.addEventListener("click",()=>{
  const open=menuButton.getAttribute("aria-expanded")==="true";
  menuButton.setAttribute("aria-expanded",String(!open));
});
