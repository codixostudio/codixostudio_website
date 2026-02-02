// Small interactions: menu toggle, year, contact handler, header scroll state, reveal

document.getElementById('year').textContent = new Date().getFullYear();

var menuToggle = document.getElementById('menuToggle');
var mainNav = document.getElementById('mainNav');
var header = document.querySelector('.site-header');

if(menuToggle){
  menuToggle.addEventListener('click', function(){
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    if (mainNav.style.display === 'flex') {
      mainNav.style.display = '';
    } else {
      mainNav.style.display = 'flex';
      mainNav.style.flexDirection = 'column';
    }
  });
  // Close mobile nav after clicking a link
  mainNav && mainNav.addEventListener('click', function(e){
    if(e.target.tagName === 'A' && window.innerWidth <= 768){
      mainNav.style.display = '';
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function updateHeader(){
  if(window.scrollY > 40){
    header && header.classList.add('scrolled');
    header && header.classList.remove('transparent');
  } else {
    header && header.classList.remove('scrolled');
    header && header.classList.add('transparent');
  }
}
window.addEventListener('scroll', updateHeader);
// ensure correct state on load
updateHeader();

function handleContact(e){
  e.preventDefault();
  var form = e.target;
  var submitBtn = document.getElementById('contactSubmit');
  var status = document.getElementById('formStatus');
  function setStatus(msg, ok){
    status.hidden = false;
    status.textContent = msg;
    status.classList.remove('success','error');
    status.classList.add(ok ? 'success':'error');
  }
  var name = (form.name.value || '').trim();
  var email = (form.email.value || '').trim();
  var message = (form.message.value || '').trim();
  if(!name || !email || !message){ setStatus('Please fill out all fields.', false); return false; }
  // disable UI while submitting
  if(submitBtn){ submitBtn.disabled = true; submitBtn.querySelector('.btn-text') && (submitBtn.querySelector('.btn-text').textContent = 'Sending...'); submitBtn.querySelector('.btn-spinner') && (submitBtn.querySelector('.btn-spinner').hidden = false); }
  var fs = form.dataset.formspree;
  if(fs && fs !== 'YOUR_FORM_ID'){
    var url = 'https://formspree.io/f/' + fs;
    var fd = new FormData(form);
    fetch(url, { method: 'POST', body: fd, headers: { Accept: 'application/json' } })
      .then(function(res){ if(res.ok) return res.json(); return res.json().then(function(err){ throw err; }); })
      .then(function(){ setStatus('Thanks — we received your message.', true); form.reset(); })
      .catch(function(err){ console.error('Formspree error', err); setStatus('Submission failed. Please try again or email codixostudio@gmail.com', false); })
      .finally(function(){ if(submitBtn){ submitBtn.disabled = false; submitBtn.querySelector('.btn-text') && (submitBtn.querySelector('.btn-text').textContent = 'Send message'); submitBtn.querySelector('.btn-spinner') && (submitBtn.querySelector('.btn-spinner').hidden = true); } });
    return false;
  }
  // fallback to mailto if no Formspree configured
  var subject = encodeURIComponent('Website contact from ' + (name || email));
  var body = 'Name: ' + encodeURIComponent(name) + '\nEmail: ' + encodeURIComponent(email) + '\n\n' + encodeURIComponent(message);
  window.location.href = 'mailto:codixostudio@gmail.com?subject=' + subject + '&body=' + body;
  setStatus('Message prepared. Your mail client will open.', true);
  if(submitBtn){ submitBtn.disabled = false; submitBtn.querySelector('.btn-text') && (submitBtn.querySelector('.btn-text').textContent = 'Send message'); submitBtn.querySelector('.btn-spinner') && (submitBtn.querySelector('.btn-spinner').hidden = true); }
  return false;
} 

// IntersectionObserver reveal
var observer = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(entry.isIntersecting){ entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
  });
},{threshold:0.12});
document.querySelectorAll('.card, .project, .section-head, .feature-card').forEach(function(el){ observer.observe(el); });
