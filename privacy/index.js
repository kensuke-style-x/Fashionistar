//translate
function showLanguage(lang){
  
 const sections = document.querySelectorAll('.lang-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
    

  const targetSection = document.getElementById(lang)
  if (targetSection){
    targetSection.style.display = 'block';
  }
}

//button
document.addEventListener('DOMContentLoaded',() => {
  
  document.getElementById('en-btn').addEventListener('click', () => showLanguage('en'));
  document.getElementById('jp-btn').addEventListener('click', () => showLanguage('jp'));
  document.getElementById('ch_simplify-btn').addEventListener('click', () => showLanguage('ch_simplify'));
  document.getElementById('ch_traditional-btn').addEventListener('click', () => showLanguage('ch_traditional'));
  document.getElementById('fr-btn').addEventListener('click', () => showLanguage('fr'));
  document.getElementById('it-btn').addEventListener('click', () => showLanguage('it'));
  document.getElementById('es-btn').addEventListener('click', () => showLanguage('es'));
  document.getElementById('es_latino-btn').addEventListener('click', () => showLanguage('es_latino'));

  // window.addEventListener('DOMContentLoaded', () => {
  //   showLanguage('en');
});

