const weddingDate = new Date('2025-07-24T14:30:00');

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const minutes = Math.floor((diff / (1000*60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

function generateCalendar(year, month) {
  const cal = document.getElementById('calendar');
  cal.innerHTML = '';
  const days = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
  days.forEach(d => cal.appendChild(Object.assign(document.createElement('div'),{textContent:d})));
  const first = new Date(year,month,1).getDay();
  let offset = (first+6)%7;
  for(let i=0;i<offset;i++) cal.appendChild(document.createElement('div'));
  const total = new Date(year,month+1,0).getDate();
  for(let d=1;d<=total;d++){
    const el = document.createElement('div');
    el.textContent = d;
    if(d===24) el.classList.add('special-day');
    const wd = new Date(year,month,d).getDay();
    if(wd===0||wd===6) el.classList.add('weekend');
    cal.appendChild(el);
  }
}
generateCalendar(2025,6);

window.addEventListener('scroll',()=>{
  document.querySelectorAll('.scroll-animation').forEach(s=>{
    if(s.getBoundingClientRect().top<window.innerHeight*0.9) s.classList.add('show');
  });
});
