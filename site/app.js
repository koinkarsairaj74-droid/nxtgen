"use strict";
const $=(q,root=document)=>root.querySelector(q);
const $$=(q,root=document)=>[...root.querySelectorAll(q)];
const content={
  faculty:[
    {name:"School Principal",department:"SCHOOL LEADERSHIP",desc:"Guiding the school community with compassion and purpose.",photo:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=700&q=82&fit=crop"},
    {name:"Primary Educator",department:"PRIMARY DEPARTMENT",desc:"Helping children grow through reading, writing, numeracy and joyful classroom learning.",photo:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&q=82&fit=crop"},
    {name:"Science Educator",department:"SCIENCE DEPARTMENT",desc:"Encouraging practical science, curiosity and strong subject foundations.",photo:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&q=82&fit=crop"},
    {name:"Language Educator",department:"LANGUAGES DEPARTMENT",desc:"Supporting English, Marathi and communication skills.",photo:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&q=82&fit=crop"}
  ],
  facilities:["Smart Classrooms","Computer Laboratory","Physics, Chemistry & Biology Labs","School Library","Sports & Playground","School Bus & Transport","CCTV & Campus Security","Medical & First Aid","Art, Music & Cultural Activities","Auditorium & Multipurpose Hall","Digital Learning & Wi-Fi","Canteen & Drinking Water"],
  stages:[
    {name:"Little explorers",stage:"PRE-PRIMARY",grade:"Nursery – Sr. KG",desc:"Early experiences full of creativity, stories, play and friendship.",color:"#fff0cf",symbol:"✿"},
    {name:"Curious creators",stage:"PRIMARY",grade:"Classes 1–5",desc:"Building strong foundations through wonder, learning and exploration.",color:"#dff3df",symbol:"✳"},
    {name:"Bold thinkers",stage:"SECONDARY",grade:"Classes 6–10",desc:"Growing critical thinkers and learning toward the SSC stage.",color:"#e9e2ff",symbol:"★"},
    {name:"Future makers",stage:"HIGHER SECONDARY",grade:"Classes 11–12",desc:"Preparing for the HSC stage and possibilities beyond school.",color:"#dcefff",symbol:"✦"}
  ],
  notices:[
    {type:"Academic",date:"2026–27",title:"Academic session overview",desc:"Demo circular: official start dates and schedules will be published by school management.",icon:"✦"},
    {type:"Event",date:"Sample event",title:"Annual day and cultural programme",desc:"Illustrative event to demonstrate the school activities calendar.",icon:"✳"},
    {type:"Notice",date:"2027–28",title:"Admission information",desc:"Guidance for prospective families; official admissions dates are pending.",icon:"↗"},
    {type:"Notice",date:"Demo update",title:"Notice board announcement",desc:"School administrators will be able to publish approved notices when the future CMS is connected.",icon:"✉"},
    {type:"Academic",date:"Sample circular",title:"Academic calendar information",desc:"A sample academic notice, not a school-issued circular.",icon:"✦"},
    {type:"Event",date:"Sample activity",title:"Science exhibition and student activities",desc:"An example event card demonstrating the website's future event publishing.",icon:"✳"}
  ],
  gallery:[
    {title:"School classroom learning",type:"Learning",photo:"indian-school-illustration.svg"},
    {title:"Students and classroom activities",type:"Learning",photo:"https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=900&q=85&fit=crop"},
    {title:"Discover new worlds",type:"Spaces",photo:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=900&q=85&fit=crop"},
    {title:"Books & bright ideas",type:"Spaces",photo:"https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=900&q=85&fit=crop"},
    {title:"Campus and school community",type:"Activities",photo:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=85&fit=crop"},
    {title:"Computer laboratory and digital learning",type:"Activities",photo:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=85&fit=crop"}
  ]
};
const pages=new Set(["home","about","academics","faculty","notices","gallery","admissions","achievements","contact","login"]);
const routeNames={home:"Home",about:"Our Story",academics:"Academics",faculty:"Faculty",notices:"Notices & Events",gallery:"Gallery",admissions:"Admissions",achievements:"Achievements",contact:"Contact",login:"Portal Demo"};
let active="home";let calendarMonth=new Date().getMonth(),calendarYear=new Date().getFullYear();
function escapeHTML(s){return String(s).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));}
function facultyMarkup(person){return '<article class="faculty-card"><img src="'+escapeHTML(person.photo)+'" alt="Illustrative stock portrait, not a school faculty member" loading="lazy"><div class="faculty-info"><small>'+escapeHTML(person.department)+'</small><h3>'+escapeHTML(person.name)+'</h3><p>'+escapeHTML(person.desc)+'</p><span class="placeholder">DEMO PROFILE</span></div></article>';}
function noticeMarkup(item){return '<article class="notice-item"><span class="notice-icon">'+escapeHTML(item.icon)+'</span><div class="notice-copy"><small>'+escapeHTML(item.type.toUpperCase())+' · DEMO</small><h3>'+escapeHTML(item.title)+'</h3><p>'+escapeHTML(item.desc)+'</p></div><span class="notice-date">'+escapeHTML(item.date)+'</span></article>';}
function renderContent(){
 $("#homeFaculty").innerHTML=content.faculty.slice(0,3).map(facultyMarkup).join("");
 $("#facultyGrid").innerHTML=content.faculty.map(facultyMarkup).join("");
 $("#homeNotices").innerHTML=content.notices.slice(0,3).map(noticeMarkup).join("");
 $("#facilityGrid").innerHTML=content.facilities.map((f,i)=>'<div><b>'+["✳","✦","✿","★"][i%4]+'</b>'+escapeHTML(f)+'</div>').join("");
 $("#academicsGrid").innerHTML=content.stages.map((s,i)=>'<article class="academic-card" style="background:'+s.color+'"><small>LEVEL 0'+(i+1)+' / '+s.stage+'</small><span>'+s.symbol+'</span><h3>'+s.name+'</h3><strong>'+s.grade+'</strong><p>'+s.desc+'</p></article>').join("");
 renderNotices("All");renderGallery("All");
}
function renderNotices(filter){
 const rows=filter==="All"?content.notices:content.notices.filter(n=>n.type===filter);
 $("#allNotices").innerHTML=rows.map(noticeMarkup).join("");
 $$("#noticeFilters button").forEach(b=>{b.classList.toggle("selected",b.dataset.filter===filter);b.setAttribute("aria-pressed",String(b.dataset.filter===filter));});
}
function renderGallery(filter){
 const rows=filter==="All"?content.gallery:content.gallery.filter(g=>g.type===filter);
 $("#galleryGrid").innerHTML=rows.map(g=>'<article class="gallery-card"><div class="gallery-image"><img loading="lazy" src="'+escapeHTML(g.photo)+'" alt="'+escapeHTML(g.title)+' — illustrative stock image"></div><div><small>'+escapeHTML(g.type.toUpperCase())+' / DEMO PHOTOGRAPHY</small><h3>'+escapeHTML(g.title)+'</h3><p>Illustrative image · not from the actual campus</p></div></article>').join("");
 $$("#galleryFilters button").forEach(b=>{b.classList.toggle("selected",b.dataset.filter===filter);b.setAttribute("aria-pressed",String(b.dataset.filter===filter));});
}
function drawCalendar(container){
 const monthName=new Intl.DateTimeFormat("en",{month:"long",year:"numeric"}).format(new Date(calendarYear,calendarMonth,1));
 const firstDay=new Date(calendarYear,calendarMonth,1).getDay();
 const days=new Date(calendarYear,calendarMonth+1,0).getDate();
 const sampleDates=[5,16,24];
 let cells=["Su","Mo","Tu","We","Th","Fr","Sa"].map(x=>'<span class="weekday">'+x+'</span>').join("");
 cells+=Array.from({length:firstDay},()=>'<span></span>').join("");
 cells+=Array.from({length:days},(_,i)=>{const d=i+1;return '<span class="'+(sampleDates.includes(d)?"has-event":"")+'" title="'+(sampleDates.includes(d)?"Example activity only":"")+'">'+d+'</span>';}).join("");
 container.innerHTML='<div class="calendar-widget"><div class="calendar-controls"><button type="button" data-cal="prev" aria-label="Previous month">←</button><strong>'+monthName+'</strong><button type="button" data-cal="next" aria-label="Next month">→</button></div><div class="calendar-days">'+cells+'</div><div class="calendar-events"><strong>✳ EXAMPLE ACTIVITIES</strong><p>5 · Learning and creativity</p><p>16 · Community and culture</p><p>24 · Student showcase</p></div></div>';
}
function calendars(){drawCalendar($("#homeCalendar"));drawCalendar($("#mainCalendar"));}
function showPage(name){
 if(!pages.has(name))name="home";active=name;
 $$(".page").forEach(p=>p.classList.toggle("active",p.dataset.page===name));
 $$(".nav>a").forEach(a=>{a.classList.toggle("current",a.dataset.nav===name);if(a.dataset.nav===name)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");});
 $("#nav").classList.remove("open");$("#hamburger").setAttribute("aria-expanded","false");
 document.title=(name==="home"?"NXT GEN English Medium School":routeNames[name]+" | NXT GEN English Medium School");
 window.scrollTo({top:0,behavior:"instant"});
}
function route(){showPage((location.hash||"#home").slice(1).toLowerCase());}
const searchItems=[
 ...Object.entries(routeNames).map(([id,title])=>({title,description:"Website section",url:"#"+id})),
 ...content.notices.map(n=>({title:n.title,description:n.desc,url:"#notices"})),
 ...content.facilities.map(f=>({title:f,description:"School facilities — demo information",url:"#about"})),
 ...content.stages.map(s=>({title:s.name,description:s.stage+" "+s.grade,url:"#academics"}))
];
function updateSearch(q){
 const box=$("#searchResults");if(!q.trim()){box.innerHTML="<p>Start typing to explore the website.</p>";return;}
 const words=q.toLowerCase().trim().split(/\s+/);const filtered=searchItems.filter(x=>words.every(w=>(x.title+" "+x.description).toLowerCase().includes(w))).slice(0,16);
 box.innerHTML=filtered.length?filtered.map(x=>'<a href="'+x.url+'">'+escapeHTML(x.title)+'<small>'+escapeHTML(x.description)+'</small></a>').join(""):"<p>No matching demo content found. Try 'admissions', 'faculty', 'notice' or 'library'.</p>";
}
function closeSearch(){const overlay=$("#searchOverlay");overlay.hidden=true;document.body.classList.remove("noscroll");$("#searchOpen").focus();}
function openSearch(){const overlay=$("#searchOverlay");overlay.hidden=false;document.body.classList.add("noscroll");$("#searchInput").focus();}
let toastTimeout;
function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove("show"),3800);}
document.addEventListener("DOMContentLoaded",()=>{
 renderContent();calendars();route();window.addEventListener("hashchange",route);
 $("#hamburger").addEventListener("click",()=>{const n=$("#nav");const on=n.classList.toggle("open");$("#hamburger").setAttribute("aria-expanded",String(on));});
 $("#moreBtn").addEventListener("click",()=>$("#moreBtn").parentElement.classList.toggle("expanded"));
 $("#searchOpen").addEventListener("click",openSearch);$("#searchClose").addEventListener("click",closeSearch);
 $("#searchOverlay").addEventListener("click",e=>{if(e.target===$("#searchOverlay"))closeSearch();});
 $("#searchResults").addEventListener("click",e=>{if(e.target.closest("a"))closeSearch();});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("#searchOverlay").hidden)closeSearch();});
 $("#searchInput").addEventListener("input",e=>updateSearch(e.target.value));
 $("#noticeFilters").addEventListener("click",e=>{const b=e.target.closest("button[data-filter]");if(b)renderNotices(b.dataset.filter);});
 $("#galleryFilters").addEventListener("click",e=>{const b=e.target.closest("button[data-filter]");if(b)renderGallery(b.dataset.filter);});
 document.addEventListener("click",e=>{const b=e.target.closest("button[data-cal]");if(!b)return;const delta=b.dataset.cal==="next"?1:-1;const next=new Date(calendarYear,calendarMonth+delta,1);calendarMonth=next.getMonth();calendarYear=next.getFullYear();calendars();});
 $("#academicYear").addEventListener("change",e=>{const first=Number(e.target.value.slice(0,4));calendarYear=first;calendarMonth=5;calendars();toast("Showing demo calendar for "+e.target.value+". Official dates pending.");});
 $("#language").addEventListener("click",()=>toast("मराठी content switcher is being prepared. Full translations require verification before launch."));
 $("#roleTabs").addEventListener("click",e=>{const b=e.target.closest("button[data-role]");if(!b)return;$$("#roleTabs button").forEach(x=>x.classList.toggle("selected",x===b));$("#roleTitle").textContent=b.dataset.role+" login";});
 $("#loginForm").addEventListener("submit",e=>{e.preventDefault();$("#loginMessage").textContent="Demo only. No login request was sent; real school management authentication is not connected.";toast("Demo only — portal integration is not live.");});
});
