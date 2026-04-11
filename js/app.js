// =====================================================================
// app.js — Logique de la page de leçon
// =====================================================================

const STORAGE_KEY = 'cours_progression';

// --- Progression (localStorage) ---

function getProgression() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch (_) { return {}; }
}

function marquerComplete(id) {
  const prog = getProgression();
  prog[id] = true;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prog));
}

function estComplete(id) {
  return !!getProgression()[id];
}

// --- Variables globales ---
let editor;
let leconCourante;

// --- Initialisation ---
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;

  leconCourante = LECONS.find(l => l.id === id);
  if (!leconCourante) {
    document.body.innerHTML = '<p style="padding:40px;font-family:sans-serif">Leçon introuvable.</p>';
    return;
  }

  // Titre de l'onglet
  document.title = `Leçon ${id} — ${leconCourante.titre}`;

  // Header
  document.querySelector('.badge-module').textContent = leconCourante.moduleNom;
  document.querySelector('.main-header h1').textContent = leconCourante.titre;

  // Instructions
  document.getElementById('instructions').innerHTML = leconCourante.explication;

  // CodeMirror
  const textarea = document.getElementById('editeur');
  textarea.value = leconCourante.codeDepart;

  editor = CodeMirror.fromTextArea(textarea, {
    mode: 'htmlmixed',
    theme: 'dracula',
    lineNumbers: true,
    lineWrapping: true,
    indentUnit: 2,
    tabSize: 2,
    autoCloseTags: true,
    matchBrackets: true,
    extraKeys: { Tab: cm => cm.execCommand('indentMore') }
  });

  // Taille de l'éditeur : remplir le wrapper
  ajusterHauteurEditeur();
  window.addEventListener('resize', ajusterHauteurEditeur);

  // Aperçu en direct
  editor.on('change', () => updatePreview());
  updatePreview();

  // Sidebar
  renderSidebar();

  // Boutons de navigation
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');

  if (id === 1) btnPrev.disabled = true;
  if (id === LECONS.length) btnNext.disabled = true;

  btnPrev.addEventListener('click', () => {
    if (id > 1) window.location.href = `lecon.html?id=${id - 1}`;
  });
  btnNext.addEventListener('click', () => {
    if (id < LECONS.length) window.location.href = `lecon.html?id=${id + 1}`;
  });

  // Bouton Valider
  document.getElementById('btn-valider').addEventListener('click', valider);

  // Bouton Solution
  document.getElementById('btn-solution').addEventListener('click', () => {
    if (confirm('Afficher la solution ? Essaie encore un peu avant ! 😉')) {
      editor.setValue(leconCourante.solution);
      updatePreview();
    }
  });

  // Déjà complété ?
  if (estComplete(id)) {
    afficherFeedback(true, '✅ Tu as déjà réussi cette leçon !');
  }
});

// --- Ajustement hauteur éditeur ---
function ajusterHauteurEditeur() {
  const wrapper = document.querySelector('.editeur-wrapper');
  if (wrapper && editor) {
    // Soustrait le panneau-titre (32px)
    const h = wrapper.parentElement.clientHeight - 32;
    editor.setSize('100%', Math.max(h, 200) + 'px');
  }
}

// --- Aperçu en direct ---
function updatePreview() {
  const code = editor.getValue();
  document.getElementById('apercu').srcdoc = code;
}

// --- Validation ---
function valider() {
  const code = editor.getValue();
  const resultat = leconCourante.valider(code);

  afficherFeedback(resultat.ok, resultat.message);

  if (resultat.ok) {
    marquerComplete(leconCourante.id);
    renderSidebar();

    // Débloquer le bouton Suivant si ce n'était pas déjà fait
    const btnNext = document.getElementById('btn-next');
    if (leconCourante.id < LECONS.length) {
      btnNext.disabled = false;
    }
  }
}

// --- Afficher feedback ---
function afficherFeedback(ok, message) {
  const el = document.getElementById('feedback');
  el.className = 'feedback ' + (ok ? 'succes' : 'erreur');
  el.innerHTML = message;
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// --- Sidebar dynamique ---
function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  const prog = getProgression();
  let html = '';
  let moduleCourant = null;

  LECONS.forEach(l => {
    if (l.moduleNom !== moduleCourant) {
      moduleCourant = l.moduleNom;
      html += `<div class="sidebar-module">${l.moduleNom}</div>`;
    }
    const isActive = l.id === leconCourante.id;
    const isDone   = prog[l.id];
    const classes  = ['sidebar-lecon', isActive ? 'active' : '', isDone ? 'complete' : ''].filter(Boolean).join(' ');
    html += `
      <a href="lecon.html?id=${l.id}" class="${classes}">
        <span class="sidebar-num">${l.id}</span>
        <span class="sidebar-label">${l.titre}</span>
        ${isDone ? '<span class="sidebar-check">✓</span>' : ''}
      </a>`;
  });

  nav.innerHTML = html;
}
