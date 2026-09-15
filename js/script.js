
  // Constelação de partículas no hero
  (function initParticles(){
    const canvas = document.getElementById('particles');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    const hero = canvas.closest('.hero');
    let w, h, particles = [];
    const mouse = { x:null, y:null, radius:120 };

    function resize(){
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.round(rect.width));
      h = Math.max(1, Math.round(rect.height));
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.floor((w*h)/9000));
      particles = Array.from({length:count}, () => ({
        x: Math.random()*w,
        y: Math.random()*h,
        vx: (Math.random()-0.5)*0.35,
        vy: (Math.random()-0.5)*0.35,
        r: Math.random()*1.8 + 1
      }));
    }

    function step(){
      ctx.clearRect(0,0,w,h);
      for(const p of particles){
        p.x += p.vx; p.y += p.vy;
        if(p.x<0||p.x>w) p.vx*=-1;
        if(p.y<0||p.y>h) p.vy*=-1;

        if(mouse.x!==null){
          const dx = p.x-mouse.x, dy = p.y-mouse.y;
          const dist = Math.sqrt(dx*dx+dy*dy);
          if(dist < mouse.radius){
            const force = (mouse.radius-dist)/mouse.radius;
            p.x += (dx/dist)*force*1.6;
            p.y += (dy/dist)*force*1.6;
          }
        }
      }
      for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
          const a=particles[i], b=particles[j];
          const dx=a.x-b.x, dy=a.y-b.y;
          const dist=Math.sqrt(dx*dx+dy*dy);
          if(dist<130){
            ctx.strokeStyle = `rgba(139,47,224,${0.22*(1-dist/130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
            ctx.stroke();
          }
        }
      }
      for(const p of particles){
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = 'rgba(178,75,255,0.95)';
        ctx.shadowColor = 'rgba(178,75,255,0.9)';
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      requestAnimationFrame(step);
    }

    resize();
    window.addEventListener('resize', resize);
    hero.addEventListener('mousemove', (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    });
    hero.addEventListener('mouseleave', () => { mouse.x=null; mouse.y=null; });
    step();
  })();

  const nav = document.querySelector('nav');

  // Botão magnético
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.btn-primary').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width/2) * 0.25;
        const y = (e.clientY - r.top - r.height/2) * 0.35;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }
  const blobs = document.querySelectorAll('.bg-blob');
  const heroBot = document.querySelector('.hero-bot');
  let scrollTicking = false;

  function updateScrollEffects(){
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 8);
    blobs.forEach((b, i) => {
      b.style.transform = `translateY(${y * (0.05 + i * 0.03)}px)`;
    });

    // Parallax bem leve no robô (somente desktop, para não pesar no celular)
    if(heroBot && window.innerWidth > 860 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      const offset = Math.min(y * 0.035, 18);
      heroBot.style.translate = `0 ${offset}px`;
    }
    scrollTicking = false;
  }

  window.addEventListener('scroll', () => {
    if(!scrollTicking){
      requestAnimationFrame(updateScrollEffects);
      scrollTicking = true;
    }
  }, { passive:true });
  updateScrollEffects();

  // Transições conforme os elementos entram na tela
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal');

  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // anima uma vez e permanece aberto
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px 18% 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }
