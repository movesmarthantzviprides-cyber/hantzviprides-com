const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('mainNav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.getElementById('bookingForm')?.addEventListener('submit',function(e){
 e.preventDefault();
 const fd=new FormData(this);
 const exp=fd.get('experience'),date=fd.get('date'),name=fd.get('name'),phone=fd.get('phone'),email=fd.get('email'),guests=fd.get('guests'),notes=fd.get('notes');
 if(!exp||!date||!name||!phone||!email){alert('Fill required fields *');return;}
 const msg=`HANTZVIPRIDES BOOKING%0AExp: ${exp}%0AGuests: ${guests}%0ADate: ${date}%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0ANotes: ${notes||'None'}%0ASource: hantzviprides.com`;
 document.getElementById('successExperience').textContent=exp;
 document.getElementById('successDate').textContent=date;
 document.getElementById('bookingSuccess').hidden=false;
 document.getElementById('cruiseExtra').hidden=!exp.includes('Cruise');
 this.hidden=true;
 window.open(`https://wa.me/2349065099622?text=${msg}`,'_blank');
});
