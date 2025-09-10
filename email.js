    // EmailJS contact form wiring (uses provided IDs)
    // --------------------------
    emailjs.init('p5VvQHIOgHyTqqhne'); // public key
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      // show loading popup
      Swal.fire({
        title: 'Sending...',
        showConfirmButton:false,
        allowOutsideClick:false,
        didOpen: ()=>{ Swal.showLoading(); }
      });
      emailjs.sendForm('service_58fexps','template_bv77y1c', this)
        .then(()=> {
          Swal.close();
          Swal.fire({
            icon: 'success',
            title: 'Message sent',
            text: 'Thanks — I will reply soon.',
            timer: 1800,
            showConfirmButton: false,
            background: document.documentElement.classList.contains('light') ? '#fff' : '#071026',
            color: document.documentElement.classList.contains('light') ? '#111' : '#FFD700',
            position: 'center'
          });
          contactForm.reset();
        }, (err) => {
          Swal.close();
          Swal.fire({
            icon: 'error',
            title: 'Send failed',
            text: 'Something went wrong. Please try again or email directly.',
            background: document.documentElement.classList.contains('light') ? '#fff' : '#071026',
            color: document.documentElement.classList.contains('light') ? '#111' : '#FFD700'
          });
          console.error('EmailJS error', err);
        });
    });