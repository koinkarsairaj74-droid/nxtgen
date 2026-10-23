"use strict";
const $=(selector,root=document)=>root.querySelector(selector);
const $$=(selector,root=document)=>Array.from(root.querySelectorAll(selector));
const pages={home:"Home",about:"About Us",academics:"Academics",admissions:"Admissions",notices:"Notices & Events",faculty:"Our Faculty",gallery:"Gallery",achievements:"Achievements",contact:"Contact Us",login:"School Portal"};
const stages=[
{number:"01",name:"Pre-Primary",grades:"Nursery to Sr. KG",description:"Early childhood learning through activities, play, language development and curiosity."},
{number:"02",name:"Primary",grades:"Classes I to V",description:"Strong foundations in reading, writing, mathematics, science, languages and co-curricular learning."},
{number:"03",name:"Secondary",grades:"Classes VI to X",description:"Subject-focused education and preparation for Maharashtra State Board SSC studies."},
{number:"04",name:"Higher Secondary",grades:"Classes XI to XII",description:"A higher-secondary learning journey in accordance with HSC requirements and approved streams."}
];
const facilities=["Smart Classrooms","Computer Laboratory","Science Laboratories","School Library","Sports & Playground","School Bus & Transport","Campus Security & CCTV","Medical & First Aid","Art, Music & Cultural Activities","Auditorium & Multipurpose Hall","Digital Learning & Wi-Fi","Drinking Water & Canteen"];
const faculty=[
{name:"Principal",department:"SCHOOL LEADERSHIP",description:"Leadership profile and official message pending school confirmation."},
{name:"Primary School Educators",department:"PRIMARY SECTION",description:"Teacher profiles and names will be added after school verification."},
{name:"Secondary School Educators",department:"SECONDARY SECTION",description:"Department-wise faculty profiles will be published when approved."},
{name:"Higher Secondary Educators",department:"HIGHER SECONDARY",description:"Official HSC department and teaching staff information to follow."}
];
const notices=[
{category:"Notice",day:"15",month:"DEMO",title:"Academic Year 2026–27 Information",description:"Illustrative school circular. Official start dates and schedules are awaiting school confirmation."},
{category:"Academic",day:"20",month:"DEMO",title:"Academic Calendar and Examination Updates",description:"Example academic announcement. No examination dates have been officially declared on this website."},
{category:"Event",day:"25",month:"DEMO",title:"Annual Day & Cultural Programme",description:"Sample school event card demonstrating how upcoming activities will be displayed."},
{category:"Notice",day:"01",month:"DEMO",title:"Admission Information for 2027–28",description:"Information-only notice; admission dates, documents and eligibility require confirmation."},
{category:"Event",day:"10",month:"DEMO",title:"Science Exhibition and Student Activities",description:"Illustrative example of a school activity, not a confirmed scheduled event."}
];
const gallery=[
{category:"Classroom",title:"Classroom Learning",src:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"},
{category:"Facilities",title:"School Library Concept",src:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80"},
{category:"Classroom",title:"Learning and Discussion",src:"https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=80"},
{category:"Facilities",title:"Books and Study Materials",src:"https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80"},
{category:"Activities",title:"Academic Campus Activities",src:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80"},
{category:"Activities",title:"Computer and Digital Learning",src:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"}
];
function esc(value){return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));}
function academicMarkup(s,full=false){return full?'<article class="academic-detail"><span class="academic-detail-number">'+esc(s.number)+'</span><div><h3>'+esc(s.name)+'</h3><strong>'+esc(s.grades)+'</strong><p>'+esc(s.description)+'</p></div></article>':'<article class="academic-card"><div class="academic-card-top"><span class="academic-index">'+esc(s.number)+'</span><strong>'+esc(s.name)+'</strong></div><div class="academic-card-content"><h3>'+esc(s.grades)+'</h3><span>MAHARASHTRA STATE BOARD</span><p>'+esc(s.description)+'</p><a href="#academics">Read More →</a></div></article>';}
function noticeMarkup(n){return '<article class="notice-item"><div class="notice-date"><b>'+esc(n.day)+'</b>'+esc(n.month)+'</div><div class="notice-content"><small>'+esc(n.category.toUpperCase())+' · DEMONSTRATION</small><h3>'+esc(n.title)+'</h3><p>'+esc(n.description)+'</p></div><span class="notice-arrow" aria-hidden="true">›</span></article>';}
function facultyMarkup(person){return '<article class="faculty-card"><div class="faculty-avatar"><svg aria-hidden="true" viewBox="0 0 100 100"><circle cx="50" cy="34" r="19"/><path d="M13 96V83c0-23 13-33 37-33s37 10 37 33v13"/></svg><span>PROFILE PENDING</span></div><div class="faculty-text"><h3>'+esc(person.name)+'</h3><strong>'+esc(person.department)+'</strong><p>'+esc(person.description)+'</p></div></article>';}
function galleryMarkup(g){return '<article class="gallery-item"><img src="'+esc(g.src)+'" alt="'+esc(g.title)+' — illustrative stock image, not actual NXT GEN school photography" loading="lazy"><div><h3>'+esc(g.title)+'</h3><p>Illustrative photograph · '+esc(g.category)+'</p></div></article>';}
function populate(){
$("#homeAcademics").innerHTML=stages.map(s=>academicMarkup(s)).join("");
$("#academicsList").innerHTML=stages.map(s=>academicMarkup(s,true)).join("");
$("#homeNoticeList").innerHTML=notices.slice(0,3).map(noticeMarkup).join("");
$("#facultyGrid").innerHTML=faculty.map(facultyMarkup).join("");
$("#facilityList").innerHTML=facilities.map(f=>'<div>'+esc(f)+'</div>').join("");
filterNotices("All");filterGallery("All");
}
function filterNotices(type){$("#allNotices").innerHTML=notices.filter(n=>type==="All"||n.category===type).map(noticeMarkup).join("");$$("#noticeFilters button").forEach(b=>{const active=b.dataset.filter===type;b.classList.toggle("selected",active);b.setAttribute("aria-pressed",String(active));});}
function filterGallery(type){$("#galleryGrid").innerHTML=gallery.filter(g=>type==="All"||g.category===type).map(galleryMarkup).join("");$$("#galleryFilters button").forEach(b=>{const active=b.dataset.filter===type;b.classList.toggle("selected",active);b.setAttribute("aria-pressed",String(active));});}
let calYear=2026,calMonth=5;
function renderCalendar(id){
const name=new Date(calYear,calMonth,1).toLocaleDateString("en-IN",{month:"long",year:"numeric"}),offset=new Date(calYear,calMonth,1).getDay(),days=new Date(calYear,calMonth+1,0).getDate();
const headers=["Su","Mo","Tu","We","Th","Fr","Sa"].map(d=>'<span class="weekday">'+d+'</span>').join("");
const blanks=Array(offset).fill("<span></span>").join("");
const cells=Array.from({length:days},(_,i)=>'<span '+([6,18,26].includes(i+1)?'class="example-day" title="Illustrative calendar marker"':'')+'>'+(i+1)+'</span>').join("");
$(id).innerHTML='<div class="calendar-widget"><div class="calendar-bar"><button type="button" data-calendar="previous" aria-label="Previous month">‹</button><strong>'+esc(name)+'</strong><button type="button" data-calendar="next" aria-label="Next month">›</button></div><div class="calendar-days">'+headers+blanks+cells+'</div><div class="calendar-legend">Shaded dates show sample activities only.</div></div>';
}
function drawCalendars(){renderCalendar("#homeCalendar");renderCalendar("#mainCalendar");}
function goToCurrentPage(){let p=(location.hash||"#home").substring(1).toLowerCase();if(!Object.hasOwn(pages,p))p="home";$$(".view").forEach(v=>v.classList.toggle("is-active",v.dataset.view===p));$$("[data-nav]").forEach(a=>{a.classList.toggle("current",a.dataset.nav===p);if(a.dataset.nav===p)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");});$("#primaryNavigation").classList.remove("open");$("#mobileMenuButton").setAttribute("aria-expanded","false");document.title=(p==="home"?"NXT GEN English Medium School":pages[p]+" | NXT GEN English Medium School");window.scrollTo(0,0);}
const searchable=[...Object.entries(pages).map(([page,title])=>({title,description:"School website section",href:"#"+page})),...notices.map(n=>({title:n.title,description:n.description,href:"#notices"})),...stages.map(s=>({title:s.name,description:s.grades+" "+s.description,href:"#academics"})),...facilities.map(f=>({title:f,description:"Facilities listing pending verification",href:"#about"}))];
function search(query){const out=$("#searchResults");if(!query.trim()){out.innerHTML="<p>Search academics, admission information, notices or facilities.</p>";return;}const words=query.trim().toLowerCase().split(/\s+/);const matches=searchable.filter(s=>words.every(w=>(s.title+" "+s.description).toLowerCase().includes(w))).slice(0,15);out.innerHTML=matches.length?matches.map(m=>'<a href="'+m.href+'">'+esc(m.title)+'<small>'+esc(m.description)+'</small></a>').join(""):"<p>No matching demo information found.</p>";}
function openSearch(){const el=$("#searchOverlay");el.hidden=false;$("#searchInput").focus();}
function closeSearch(){const el=$("#searchOverlay");el.hidden=true;}
let toastTimer;function toast(text){const t=$("#toast");t.textContent=text;t.classList.add("visible");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("visible"),3800);}
document.addEventListener("DOMContentLoaded",()=>{
populate();drawCalendars();goToCurrentPage();window.addEventListener("hashchange",goToCurrentPage);
$("#mobileMenuButton").addEventListener("click",()=>{const nav=$("#primaryNavigation");const open=nav.classList.toggle("open");$("#mobileMenuButton").setAttribute("aria-expanded",String(open));});
$("#noticeFilters").addEventListener("click",e=>{const b=e.target.closest("button[data-filter]");if(b)filterNotices(b.dataset.filter);});
$("#galleryFilters").addEventListener("click",e=>{const b=e.target.closest("button[data-filter]");if(b)filterGallery(b.dataset.filter);});
document.addEventListener("click",e=>{const b=e.target.closest("button[data-calendar]");if(!b)return;const n=new Date(calYear,calMonth+(b.dataset.calendar==="next"?1:-1),1);calYear=n.getFullYear();calMonth=n.getMonth();drawCalendars();});
$("#calendarYear").addEventListener("change",e=>{calYear=Number(e.target.value);calMonth=5;drawCalendars();toast("Sample calendar selected. Official event dates are pending.");});
$("#searchButton").addEventListener("click",openSearch);$("#searchClose").addEventListener("click",closeSearch);$("#searchInput").addEventListener("input",e=>search(e.target.value));
$("#searchOverlay").addEventListener("click",e=>{if(e.target===$("#searchOverlay"))closeSearch();});
$("#searchResults").addEventListener("click",e=>{if(e.target.closest("a"))closeSearch();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeSearch();});
$("#languageButton").addEventListener("click",()=>toast("Marathi content requires approved translations. English content is currently displayed."));
$("#roleTabs").addEventListener("click",e=>{const b=e.target.closest("button[data-role]");if(!b)return;$$("#roleTabs button").forEach(x=>x.classList.toggle("selected",x===b));$("#roleHeading").textContent=b.dataset.role+" Login";});
$("#portalForm").addEventListener("submit",e=>{e.preventDefault();$("#portalMessage").textContent="Demonstration only. Login credentials were not sent or stored.";toast("School management system integration is pending.");});
});