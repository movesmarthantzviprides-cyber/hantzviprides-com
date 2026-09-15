document.addEventListener('DOMContentLoaded',()=>{
const btn=document.getElementById('menuBtn');const nav=document.getElementById('nav');
if(btn){btn.addEventListener('click',()=>nav.classList.toggle('open'));}
const form=document.getElementById('bookingForm');
if(form){form.addEventListener('submit',(e)=>{
e.preventDefault();
const fd=new FormData(form);
const msg=`HANTZVIPRIDES BOOKING%0AName:${fd.get('name')}%0APhone:${fd.get('phone')}%0AService:${fd.get('service')}%0ADate:${fd.get('date')}%0AMessage:${fd.get('message')}`;
window.open(`https://wa.me/2349065099622?text=${msg}`,'_blank');
});}
});
