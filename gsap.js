  // --------------------------
    // GSAP: header & reveal
    // --------------------------
    gsap.from("header", { y:-40, opacity:0, duration:0.8, ease:"power2.out" });
    gsap.from(".social-top a", { opacity:0, y:-10, stagger:0.06, duration:0.6 });
    // scroll-trigger reveal for .section
    const sections = document.querySelectorAll('.section');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.2 });
    sections.forEach(s => obs.observe(s));

    // animate cards on hover using gsap (subtle)
    document.querySelectorAll('.card').forEach(card=>{
      card.addEventListener('mousemove', (e)=>{
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width/2) / rect.width;
        const y = (e.clientY - rect.top - rect.height/2) / rect.height;
        gsap.to(card, { rotateX: y*6, rotateY: x*10, transformPerspective:600, duration:0.4, ease:'power3.out' });
      });
      card.addEventListener('mouseleave', ()=>{
        gsap.to(card, { rotateX:0, rotateY:0, duration:0.6, ease:'power3.out' });
      });
    });

    // --------------------------
    // Globe init
    // --------------------------
    const globe = Globe()(document.getElementById('globe-container'))
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .backgroundColor('rgba(0,0,0,0)')
      .showAtmosphere(true).atmosphereColor('#003285').atmosphereAltitude(0.12)
      .width(document.getElementById('globe-container').clientWidth)
      .height(document.getElementById('globe-container').clientWidth);

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.9;
    globe.controls().enableZoom = true;

    // keep globe sized on resize
    window.addEventListener('resize', ()=>{
      const w = document.getElementById('globe-container').clientWidth;
      globe.width(w); globe.height(w);
    });

    // --------------------------
    // GSAP entrance for icons and skill logos
    // --------------------------
    gsap.from('.skill-logo', { scale:.6, opacity:0, stagger:0.05, duration:0.7, ease:'back.out(1.7)' });

 const welcomeEl = document.getElementById('welcomeText');
  const welcomeMsg = "Hello, welcome to my page!";
  welcomeEl.innerHTML = welcomeMsg.split('').map(c=>`<span class="wave inline-block">${c}</span>`).join('');
  gsap.to(".wave",{y:-15, repeat:-1, yoyo:true, stagger:0.1, duration:0.5, ease:"sine.inOut"});
    // --------------------------
    // Animate theme icon on toggle
gsap.fromTo(themeIcon,
  { rotation: 0, scale: 0.7 },
  { rotation: 360, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
);
