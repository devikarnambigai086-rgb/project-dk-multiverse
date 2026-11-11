/* Project DK — Creator Signature Portrait: cinematic reveal, parallax, particles.
   Never touches the photo pixels — only the frame, rings, particles and text around it. */
(()=>{
 const stage=document.getElementById('dkStage');if(!stage)return;
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
 const small=innerWidth<650;
 stage.classList.add('dk-prep');

 /* galaxy particles (fewer on phones) */
 const pc=stage.querySelector('.dk-particles');
 if(pc){const cols=['#c4a5ff','#8be9f5','#ffffff','#a78bfa'],n=reduce?10:(small?12:24);
  for(let i=0;i<n;i++){const p=document.createElement('i');
   p.style.cssText=`--x:${(Math.random()*100).toFixed(1)}%;--y:${(Math.random()*100).toFixed(1)}%;--s:${(1.5+Math.random()*2.6).toFixed(1)}px;--c:${cols[i%cols.length]};--d:${(3+Math.random()*4).toFixed(1)}s;--dl:${(-Math.random()*6).toFixed(1)}s`;
   pc.append(p)}}

 /* neon name: split into words → letters (aria-label keeps it readable for screen readers) */
 const nm=stage.querySelector('.dk-name');
 if(nm){const t=nm.textContent.trim();nm.setAttribute('aria-label',t.toLowerCase().replace(/\b\w/g,c=>c.toUpperCase()));nm.textContent='';let k=0;
  t.split(' ').forEach(w=>{const ws=document.createElement('span');ws.className='dk-w';ws.setAttribute('aria-hidden','true');
   [...w].forEach(c=>{const s=document.createElement('span');s.className='dk-ch';s.style.setProperty('--i',k++);s.textContent=c;ws.append(s)});nm.append(ws)})}

 /* start the reveal when the intro screen is dismissed */
 let started=false;
 const go=()=>{if(started)return;started=true;stage.classList.remove('dk-prep');stage.classList.add('dk-go')};
 const intro=document.getElementById('introScreen');
 if(reduce||!intro||intro.classList.contains('dismissed'))go();
 else new MutationObserver((_,o)=>{if(intro.classList.contains('dismissed')){o.disconnect();setTimeout(go,250)}}).observe(intro,{attributes:true,attributeFilter:['class']});

 /* pause every dk animation while off-screen */
 if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('dk-off',!e.isIntersecting)),{threshold:0});
  io.observe(stage);document.querySelectorAll('.dk-mini').forEach(m=>io.observe(m))}

 /* gentle pointer parallax (desktop only) */
 if(reduce||!fine)return;
 const hero=document.getElementById('home');let tx=0,ty=0,cx=0,cy=0,raf=0;
 const tick=()=>{cx+=(tx-cx)*.09;cy+=(ty-cy)*.09;
  stage.style.setProperty('--dk-rx',(cx*6).toFixed(2));stage.style.setProperty('--dk-ry',(cy*5).toFixed(2));
  stage.style.setProperty('--dk-px',(cx*10).toFixed(2));stage.style.setProperty('--dk-py',(cy*10).toFixed(2));
  raf=(Math.abs(tx-cx)>.004||Math.abs(ty-cy)>.004)?requestAnimationFrame(tick):0};
 const kick=()=>{if(!raf)raf=requestAnimationFrame(tick)};
 hero.addEventListener('pointermove',e=>{const r=stage.getBoundingClientRect();
  tx=Math.max(-1,Math.min(1,(e.clientX-(r.left+r.width/2))/(innerWidth/2)*1.6));
  ty=Math.max(-1,Math.min(1,(e.clientY-(r.top+r.height/2))/(innerHeight/2)*1.6));kick()});
 hero.addEventListener('pointerleave',()=>{tx=0;ty=0;kick()});
})();
