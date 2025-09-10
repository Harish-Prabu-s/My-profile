   // --------------------------
    // Typing effect
    // --------------------------
    const words = ['Full Stack Developer','Software Engineer','Python Developer','3D & Motion Enthusiast'];
    let wIndex = 0, cIndex = 0, deleting = false;
    const typingEl = document.getElementById('typing');
    function tick(){
      const w = words[wIndex];
      if(!deleting){
        typingEl.textContent = w.substring(0, cIndex+1);
        cIndex++;
        if(cIndex === w.length){ deleting = true; setTimeout(tick, 1100); return; }
      } else {
        typingEl.textContent = w.substring(0, cIndex-1);
        cIndex--;
        if(cIndex === 0){ deleting = false; wIndex = (wIndex+1) % words.length; setTimeout(tick, 300); return; }
      }
      setTimeout(tick, deleting?40:80);
    }
    tick();