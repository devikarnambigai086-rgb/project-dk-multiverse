/* Project DK — core site: starfield, navigation, universes, certificate viewer */
(()=>{
 const canvas=document.getElementById('starfield'),ctx=canvas.getContext('2d');let stars=[];
 function resize(){const dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=innerWidth*dpr;canvas.height=innerHeight*dpr;canvas.style.width=innerWidth+'px';canvas.style.height=innerHeight+'px';ctx.setTransform(dpr,0,0,dpr,0,0);stars=Array.from({length:Math.min(130,Math.floor(innerWidth*innerHeight/9500))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.25+.25,a:Math.random()*.55+.15,s:Math.random()*.18+.04}));}
 function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const p of stars){p.a+=Math.sin(Date.now()*.0007+p.x)*.001;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(220,202,255,${Math.max(.08,Math.min(.8,p.a))})`;ctx.fill();p.y-=p.s;if(p.y<0){p.y=innerHeight;p.x=Math.random()*innerWidth;}}requestAnimationFrame(draw)}resize();draw();addEventListener('resize',resize);
 const menu=document.getElementById('menuBtn'),links=document.getElementById('navlinks');menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'CLOSE ×':'MENU ☰'});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='MENU ☰'}));
 const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveal.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));
 const top=document.getElementById('backtop');addEventListener('scroll',()=>top.classList.toggle('show',scrollY>500));top.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));document.getElementById('year').textContent=new Date().getFullYear();
 const intro=document.getElementById('introScreen');
 const enterIntro=document.getElementById('introEnter');
 const skipIntro=document.getElementById('introSkip');
 const closeIntro=()=>{intro.classList.add('dismissed');document.body.classList.remove('intro-open');};
 enterIntro.addEventListener('click',closeIntro);
 skipIntro.addEventListener('click',closeIntro);
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!intro.classList.contains('dismissed'))closeIntro();});
 const sections=[...document.querySelectorAll('main section[id]')],navLinks=[...links.querySelectorAll('a')];const spy=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-35% 0px -55% 0px'});sections.forEach(s=>spy.observe(s));
})();

(()=>{
const U={about:'Identity',skills:'Skills',projects:'Creation',journey:'Journey',certifications:'Achievements',contact:'Connection'};
const FX={about:['•','✦','·'],skills:['{ }','</>','01','Py','SQL','Σ'],projects:['⬡','+','◇','▢'],journey:['★','✦','·'],certifications:['★','✦','◆'],contact:['@','✉','✦']};
const WC={about:'#f59e0b',skills:'#06b6d4',projects:'#ec4899',journey:'#8b5cf6',certifications:'#f472b6',contact:'#38bdf8'};
Object.assign(U,DK.universes);Object.assign(FX,DK.fx);Object.assign(WC,DK.wc);
const body=document.body,$=id=>document.getElementById(id);
const fx=document.createElement('div');fx.className='uv-fx';fx.setAttribute('aria-hidden','true');body.prepend(fx);
const warp=document.createElement('div');warp.className='uv-warp';warp.setAttribute('aria-hidden','true');body.append(warp);
const back=document.createElement('button');back.type='button';back.className='uv-back';back.textContent='← Back to galaxy';body.append(back);
Object.keys(U).forEach(id=>$(id).classList.add('uv'));
let cur=null,timer;
function fill(id){fx.innerHTML='';const n=innerWidth<650?14:26,s=FX[id];for(let i=0;i<n;i++){const p=document.createElement('span');p.className='fx-p';p.textContent=s[i%s.length];p.style.cssText=`--x:${Math.random()*96}%;--s:${12+Math.random()*16}px;--d:${9+Math.random()*10}s;--dl:${-Math.random()*14}s`;fx.append(p)}}
function swap(id){document.querySelectorAll('.uv-cur').forEach(s=>s.classList.remove('uv-cur'));if(id){$(id).classList.add('uv-cur');body.classList.add('uv-on');body.dataset.uv=id;body.dataset.pt=$(id).dataset.theme||'';fill(id);scrollTo({top:0,behavior:'instant'})}else{body.classList.remove('uv-on');delete body.dataset.uv;delete body.dataset.pt;$('multiverse').scrollIntoView({behavior:'instant'})}cur=id}
function go(id){warp.style.setProperty('--wc',WC[id]||'#8b5cf6');warp.classList.remove('go');void warp.offsetWidth;warp.classList.add('go');clearTimeout(timer);timer=setTimeout(()=>swap(id),380)}
function open(id,push=true){if(!U[id]||id===cur)return;if(push)history.pushState({uv:id},'','#'+id);go(id)}
function close(push=true){if(!cur)return;if(push)history.pushState({},'',location.pathname+location.search);go(null)}
document.addEventListener('click',e=>{
 const p=e.target.closest('[data-universe]');if(p){e.preventDefault();open(p.dataset.universe);return}
 const pj=e.target.closest('[data-open-project]');if(pj){e.preventDefault();open(pj.dataset.openProject);return}
 if(e.target.closest('[data-back-projects]')){e.preventDefault();open('projects');return}
 if(e.target.closest('.uv-back')){close();return}
 const a=e.target.closest('a[href^="#"]');if(!a)return;const id=a.getAttribute('href').slice(1);
 if(U[id]){e.preventDefault();open(id)}else if((id==='home'||id==='multiverse')&&cur){e.preventDefault();close()}});
addEventListener('popstate',e=>{const id=e.state&&e.state.uv;id?(cur&&cur!==id?go(id):open(id,false)):close(false)});
DK.open=open;DK.close=close;DK.current=()=>cur;
/* certificate viewer: cinematic open / close */
const modal=$('certificateModal'),stage=$('certStage'),img=$('certificateModalImage'),title=$('certificateModalTitle'),issuer=$('certificateModalIssuer'),empty=$('certificateModalEmpty'),eT=$('certEmptyTitle'),eX=$('certEmptyText'),count=$('certCount'),sparks=$('certSparks');
const topBar=modal.querySelector('.cert-modal-top'),foot=modal.querySelector('.cert-modal-foot');
const certCards=[...document.querySelectorAll('.cert-card')],achCards=[...document.querySelectorAll('.ach-open')];let cards=certCards,idx=0,opener=null,closeT=0;
const isOpen=()=>modal.classList.contains('open')&&!modal.classList.contains('closing');
const replay=(...els)=>{els.forEach(e=>e.classList.remove('play'));void modal.offsetWidth;els.forEach(e=>e.classList.add('play'))};
function sparkle(){sparks.innerHTML='';const n=innerWidth<650?8:14;for(let i=0;i<n;i++){const e=document.createElement('i'),side=i%4,al=(Math.random()*100).toFixed(1),off=(5+Math.random()*18).toFixed(0);
 e.style.cssText=['top:-'+off+'px;left:'+al+'%','bottom:-'+off+'px;left:'+al+'%','left:-'+off+'px;top:'+al+'%','right:-'+off+'px;top:'+al+'%'][side]+`;--z:${3+Math.random()*3}px;--t:${1.8+Math.random()*1.4}s;--d:${(.7+Math.random()*2).toFixed(2)}s`;sparks.append(e)}}
function show(i){idx=(i+cards.length)%cards.length;const c=cards[idx],src=c.dataset.src;
 title.textContent=c.dataset.title;issuer.textContent=c.dataset.issuer||'';count.textContent=(idx+1)+' / '+cards.length;
 stage.classList.remove('show','play');img.onload=img.onerror=null;
 const miss=(t,x)=>{eT.textContent=t;eX.textContent=x;empty.classList.remove('hide')};
 replay(topBar,foot);
 if(!src){img.removeAttribute('src');miss('Slot reserved','This slot is waiting for a certificate. Add the image to assets/certificates/ and set the card’s data-src.');return}
 miss('Loading certificate…','');
 img.onload=()=>{empty.classList.add('hide');stage.classList.add('show');replay(stage)};
 img.onerror=()=>miss('Image not found','Add the original file to '+src+' to show it here.');
 img.alt=c.dataset.title+' certificate';img.src=src}
function openCert(i,from){clearTimeout(closeT);opener=from||opener;cards=(from&&from.classList.contains('ach-open'))?achCards:certCards;modal.classList.remove('closing');modal.classList.add('open');modal.setAttribute('aria-hidden','false');body.classList.add('modal-open');sparkle();show(i);$('certificateModalClose').focus({preventScroll:true})}
function closeCert(){if(!isOpen())return;modal.classList.add('closing');closeT=setTimeout(()=>{modal.classList.remove('open','closing');modal.setAttribute('aria-hidden','true');body.classList.remove('modal-open');img.removeAttribute('src');stage.classList.remove('show','play');sparks.innerHTML='';if(opener)opener.focus({preventScroll:true})},460)}
certCards.forEach((c,i)=>c.addEventListener('click',()=>openCert(i,c)));achCards.forEach((c,i)=>c.addEventListener('click',()=>openCert(i,c)));
$('certificateModalClose').addEventListener('click',closeCert);
modal.addEventListener('click',e=>{if(e.target===modal||e.target.classList.contains('cert-modal-panel')||e.target===$('certificateModalClose').parentNode.parentNode)closeCert()});
$('certPrev').addEventListener('click',()=>show(idx-1));$('certNext').addEventListener('click',()=>show(idx+1));
document.addEventListener('keydown',e=>{if(!isOpen())return;if(e.key==='Escape')closeCert();else if(e.key==='ArrowLeft')show(idx-1);else if(e.key==='ArrowRight')show(idx+1)});
let sx=0;modal.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});modal.addEventListener('touchend',e=>{if(!isOpen())return;const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>70)show(idx+(d<0?1:-1))},{passive:true});
})();
