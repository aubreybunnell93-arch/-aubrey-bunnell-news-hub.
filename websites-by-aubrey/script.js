// Download locally: no visitor information is sent to a server.
const form = document.querySelector('#brief');
if(form) form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const text = `WEBSITES BY AUBREY — PROJECT BRIEF\n\nName: ${data.get('name')}\nProject: ${data.get('business')}\nType: ${data.get('type')}\n\nIdea:\n${data.get('details')}\n\nThis brief was saved locally. No inquiry has been sent.`;
  const url = URL.createObjectURL(new Blob([text], {type:'text/plain'}));
  const link = document.createElement('a'); link.href=url; link.download='my-website-brief.txt'; link.click();
  setTimeout(() => URL.revokeObjectURL(url),1000);
  document.querySelector('#form-status').textContent='Your brief is ready in your downloads. Nothing was sent.';
});
// Motion is opt-in, can be stopped, and respects reduced-motion settings.
const motion = document.querySelector('#motion');
if(motion) motion.addEventListener('click', () => {
 const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduced){ motion.textContent='Animation off: reduced motion enabled'; return; }
 const running = document.querySelector('#journey').classList.toggle('running');
 motion.setAttribute('aria-pressed',String(running)); motion.textContent=running?'Stop animation':'Play animation';
});
