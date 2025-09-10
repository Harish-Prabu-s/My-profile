
  // Auto-update year
  document.getElementById("year").textContent = new Date().getFullYear();
const globe = Globe()(document.getElementById('globe-container'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
  .backgroundColor('rgba(0,0,0,0)')
  .showAtmosphere(true).atmosphereColor('#003285').atmosphereAltitude(0.12)
  .width(document.getElementById('globe-container').clientWidth)
  .height(document.getElementById('globe-container').clientWidth);

globe.controls().autoRotate = true;
globe.controls().autoRotateSpeed = 0.9;
globe.controls().enableZoom = true;

window.addEventListener('resize', ()=>{
  const w = document.getElementById('globe-container').clientWidth;
  globe.width(w); globe.height(w);
});

const welcomeEl = document.getElementById('welcomeText');
const welcomeMsg = "Hello, welcome to my page!";
welcomeEl.innerHTML = welcomeMsg.split('').map(c=>`<span class="wave inline-block">${c}</span>`).join('');
gsap.to(".wave",{y:-15, repeat:-1, yoyo:true, stagger:0.1, duration:0.5, ease:"sine.inOut"});

document.getElementById("year").textContent = new Date().getFullYear();
