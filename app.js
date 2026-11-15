'use strict';

const flowSteps = [
  { kicker:'01 / SAVE WITH CONTEXT', title:'Save now.\nRemember why later.', text:'Tap Want to Read to save the book. Add an optional reason such as a friend’s recommendation or BookTok, or skip and keep going.', principle:'Adding context should support the task, not block it.', image:'a3-save-reason.webp', alt:'Save a book with an optional reason and a Skip action' },
  { kicker:'02 / REVISIT YOUR LIST', title:'Keep the original\nreason in sight.', text:'The Saved because label appears beside each book. A missing reason is stated clearly, with an option to add one later.', principle:'A list should preserve the context behind the titles.', image:'a3-saved-list.webp', alt:'Want to Read list with saved reasons and a Help me choose button' },
  { kicker:'03 / NARROW THE OPTIONS', title:'One question\nat a time.', text:'Answer three questions about mood, time and length. Each offers an Any option, while earlier answers stay visible.', principle:'Reduce the effort of choosing without forcing a precise preference.', image:'a3-preferences.webp', alt:'Step-by-step reading preference questions with mood, time and length choices' },
  { kicker:'04 / COMPARE THREE PICKS', title:'A shortlist\nwith an explanation.', text:'Three books from your own list show why they fit. Saved reasons, mood tags and review trade-offs sit beside the choice. Books without saved reasons can still be selected.', principle:'Fewer choices are more useful when the fit is understandable.', image:'a3-three-picks.webp', alt:'Three recommendations with saved reasons, mood tags and Is it for me review summaries' },
  { kicker:'05 / MAKE A DECISION', title:'Choose what\nhappens next.', text:'Review the book and choose Start reading, Not now or Remove. The main action is visually prominent, with the alternatives kept available.', principle:'Give the reader control, including a way to defer or reject a pick.', image:'a3-book-decision.webp', alt:'Book detail screen with Start reading, Not now and Remove actions' },
  { kicker:'06 / COMPLETE THE TASK', title:'A decision\nyou can see.', text:'Start reading moves the book to Currently Reading. The Want to Read count drops from 43 to 42, and Undo gives the reader a way back.', principle:'The interface should visibly confirm the result of the action.', image:'a3-currently-reading.webp', alt:'Currently Reading shelf confirming the selected book has moved, with Want to Read reduced to 42' }
];
let currentStep = 0;
const $ = id => document.getElementById(id);
const tabs = [...document.querySelectorAll('[data-step]')];
function setFlowStep(index, focusTab = false) {
  if (index < 0 || index >= flowSteps.length) return;
  currentStep = index;
  const step = flowSteps[index];
  tabs.forEach((tab,i) => {
    tab.setAttribute('aria-selected',String(i===index));
    tab.tabIndex = i===index ? 0 : -1;
  });
  $('flow-panel').setAttribute('aria-labelledby',`flow-tab-${index}`);
  $('flow-kicker').textContent = step.kicker;
  $('flow-title').replaceChildren(...step.title.split('\n').flatMap((text,i)=> i ? [document.createElement('br'),document.createTextNode(text)] : [document.createTextNode(text)]));
  $('flow-text').textContent = step.text;
  $('flow-principle').textContent = step.principle;
  $('flow-image').src = `assets/screens/${step.image}`;
  $('flow-image').alt = step.alt;
  $('flow-count').textContent = `${String(index+1).padStart(2,'0')} / 06`;
  $('flow-prev').disabled = index===0;
  $('flow-next').disabled = index===flowSteps.length-1;
  if(focusTab) tabs[index].focus();
}
tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>setFlowStep(index));
  tab.addEventListener('keydown',event=>{
    let next;
    if(event.key==='ArrowRight') next=(index+1)%tabs.length;
    if(event.key==='ArrowLeft') next=(index-1+tabs.length)%tabs.length;
    if(event.key==='Home') next=0;
    if(event.key==='End') next=tabs.length-1;
    if(next!==undefined){event.preventDefault();setFlowStep(next,true);}
  });
});
$('flow-prev').addEventListener('click',()=>setFlowStep(currentStep-1));
$('flow-next').addEventListener('click',()=>setFlowStep(currentStep+1));

document.querySelectorAll('[data-comparison]').forEach(button=>button.addEventListener('click',()=>{
  const after=button.dataset.comparison==='after';
  document.querySelectorAll('[data-comparison]').forEach(other=>{
    const active=other===button;
    other.classList.toggle('is-active',active);
    other.setAttribute('aria-pressed',String(active));
  });
  $('comparison-image').src=`assets/screens/${after?'a3-save-reason':'a2-save-before'}.webp`;
  $('comparison-image').alt=after?'A3 saving flow with an optional reason prompt and Skip action':'A2 saving flow asking for a reason before saving the book';
  $('comparison-caption').textContent=after?'A3: optional context after the save action.':'A2: the reason prompt interrupted the save action.';
}));

const screenDialog=$('screen-dialog');
$('expand-screen').addEventListener('click',()=>{
  const step=flowSteps[currentStep];
  $('dialog-image').src=`assets/screens/${step.image}`;
  $('dialog-image').alt=step.alt;
  $('dialog-caption').textContent=step.kicker;
  screenDialog.showModal();
});
$('close-screen').addEventListener('click',()=>screenDialog.close());
screenDialog.addEventListener('click',event=>{
  if(event.target===screenDialog){
    const rect=screenDialog.getBoundingClientRect();
    if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom) screenDialog.close();
  }
});

$('load-prototype').addEventListener('click',()=>{
  const frame=document.createElement('iframe');
  frame.title='Narrow to Now — interactive Figma prototype';
  frame.src='https://www.figma.com/embed?embed_host=share&url='+encodeURIComponent($('prototype-external').getAttribute('href'));
  frame.allowFullscreen=true;
  frame.allow='fullscreen';
  frame.loading='eager';
  $('prototype-embed').replaceChildren(frame);
  frame.focus();
});

const sectionLinks=[...document.querySelectorAll('.chapter-nav a')];
const observedSections=sectionLinks.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);
function updateReadingPosition(){
  const total=document.documentElement.scrollHeight-window.innerHeight;
  $('reading-progress').style.width=`${total>0?Math.min(100,Math.max(0,window.scrollY/total*100)):0}%`;
  if(!observedSections.length)return;
  const scrollPadding=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0;
  let current=observedSections[0];
  for(const section of observedSections){
    // Anchor scrolling adds both offsets; allow for subpixel rounding at rest.
    const scrollMargin=parseFloat(getComputedStyle(section).scrollMarginTop)||0;
    if(section.getBoundingClientRect().top<=scrollPadding+scrollMargin+2) current=section;
  }
  // A short final chapter may never reach the anchor offset before the page ends.
  if(total>0 && window.scrollY>=total-2) current=observedSections.at(-1);
  sectionLinks.forEach(link=>{
    const active=link.getAttribute('href')===`#${current.id}`;
    link.classList.toggle('is-current',active);
    if(active) link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');
  });
}
let scrollScheduled=false;
window.addEventListener('scroll',()=>{
  if(scrollScheduled)return;
  scrollScheduled=true;
  requestAnimationFrame(()=>{updateReadingPosition();scrollScheduled=false;});
},{passive:true});
window.addEventListener('resize',updateReadingPosition);
window.addEventListener('load',updateReadingPosition);
updateReadingPosition();

// Match the portfolio's visible pointer without ever hiding the native cursor.
(() => {
  const dot = document.querySelector('.cursor-dot');
  const outline = document.querySelector('.cursor-outline');
  if (!dot || !outline) return;
  const mouseAvailable = window.matchMedia('(any-hover: hover) and (any-pointer: fine)');
  const interactive = 'a[href], button:not(:disabled), summary, [role="tab"]';
  const cursors = [dot, outline];
  function hideCursorEffect() {
    cursors.forEach(cursor => cursor.classList.remove('is-visible', 'is-interactive'));
  }
  document.addEventListener('pointermove', event => {
    if (!mouseAvailable.matches || event.pointerType !== 'mouse' || document.querySelector('dialog[open]')) {
      hideCursorEffect();
      return;
    }
    const target = event.target instanceof Element ? event.target : null;
    if (target?.closest('iframe')) {
      hideCursorEffect();
      return;
    }
    const overControl = Boolean(target?.closest(interactive));
    cursors.forEach(cursor => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      cursor.classList.add('is-visible');
      cursor.classList.toggle('is-interactive', overControl);
    });
  }, { passive: true });
  document.addEventListener('pointerout', event => {
    if (!event.relatedTarget || (event.relatedTarget instanceof Element && event.relatedTarget.closest('iframe'))) hideCursorEffect();
  });
  document.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'mouse') hideCursorEffect();
  }, { passive: true });
  document.addEventListener('pointercancel', hideCursorEffect);
  document.addEventListener('keydown', hideCursorEffect);
  document.addEventListener('visibilitychange', hideCursorEffect);
  window.addEventListener('blur', hideCursorEffect);
  mouseAvailable.addEventListener('change', hideCursorEffect);
})();
