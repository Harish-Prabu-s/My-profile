   // --------------------------
    // Accessibility: Keyboard toggle
    // --------------------------
    themeToggle.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' ') themeToggle.click();
    });