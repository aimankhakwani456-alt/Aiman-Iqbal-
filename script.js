/* Add your real professional email here when ready. */
const PROFESSIONAL_EMAIL = "";
document.addEventListener("DOMContentLoaded",()=>{
 const menu=document.querySelector(".menu"),links=document.querySelector(".links");
 const close=()=>{menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Open navigation menu");links.classList.remove("open")};
 menu.addEventListener("click",()=>{const open=menu.getAttribute("aria-expanded")==="true";menu.setAttribute("aria-expanded",String(!open));menu.setAttribute("aria-label",open?"Open navigation menu":"Close navigation menu");links.classList.toggle("open",!open)});
 document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",close));
 document.addEventListener("keydown",e=>{if(e.key==="Escape"){close();menu.focus()}});
 const email=document.getElementById("email-link"),hint=document.getElementById("email-hint");
 if(PROFESSIONAL_EMAIL.trim()){email.href="mailto:"+PROFESSIONAL_EMAIL.trim();hint.textContent="Prefer email? Reach out directly."}
 else email.addEventListener("click",e=>{e.preventDefault();hint.textContent="Email is not configured yet. Add your address in PROFESSIONAL_EMAIL at the top of script.js."});
 document.getElementById("year").textContent=new Date().getFullYear();
 const roles=["Full-Stack Web Developer","Mathematics Student","AI & Automation Enthusiast"],typed=document.getElementById("typed"),reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
 if(reduced)typed.textContent=roles[0];else{let r=0,n=roles[0].length,del=true;const tick=()=>{n+=del?-1:1;typed.textContent=roles[r].slice(0,n);let wait=del?42:75;if(n<=0){del=false;r=(r+1)%roles.length;wait=350}else if(n>=roles[r].length){del=true;wait=1500}setTimeout(tick,wait)};setTimeout(tick,1800)}
 const items=document.querySelectorAll(".reveal");
 if("IntersectionObserver"in window&&!reduced){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.12});items.forEach(item=>observer.observe(item))}
 else items.forEach(item=>item.classList.add("visible"));
});