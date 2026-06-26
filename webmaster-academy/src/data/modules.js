export const LEVELS = {
  debutant: { label: 'Débutant', color: '#00e5a0', pts: 100 },
  intermediaire: { label: 'Intermédiaire', color: '#7c5cfc', pts: 150 },
  avance: { label: 'Avancé', color: '#fc5c7d', pts: 200 },
  expert: { label: 'Expert', color: '#f5c842', pts: 250 },
};

export const MODULES = [
  {
    id: 1,
    level: 'debutant',
    emoji: '🌐',
    titre: 'Comment fonctionne le Web',
    description: 'Clients, serveurs, HTTP, DNS — comprendre l\'infrastructure invisible.',
    content: [
      { type: 'section', title: 'Internet vs le Web : deux choses différentes' },
      { type: 'text', content: 'Internet est le réseau physique mondial de câbles, routeurs et satellites qui relie des milliards d\'appareils. Le Web (World Wide Web) est un service qui s\'appuie sur Internet — c\'est un système de documents hypertextes accessibles via des navigateurs.' },
      { type: 'list', items: [
        'Internet existe depuis les années 1970 (ARPANET)',
        'Le Web a été inventé par Tim Berners-Lee en 1989 au CERN',
        'Il existe d\'autres services sur Internet : email, FTP, SSH, BitTorrent…',
        'Le Web utilise le protocole HTTP/HTTPS pour transférer des données'
      ]},
      { type: 'section', title: 'Le modèle Client / Serveur' },
      { type: 'text', content: 'Chaque échange sur le Web suit un modèle simple : un client (votre navigateur) envoie une requête, un serveur répond. Le serveur est un ordinateur qui tourne en permanence et attend des connexions.' },
      { type: 'code', language: 'text', code: `Client (navigateur)          Serveur (ex: nginx)
       |                               |
       |  ── GET /index.html ──>       |
       |                               |
       |  <── 200 OK + HTML ──         |
       |                               |
       |  ── GET /style.css ──>        |
       |  <── 200 OK + CSS ──          |` },
      { type: 'section', title: 'HTTP : le langage du Web' },
      { type: 'text', content: 'HTTP (HyperText Transfer Protocol) est le protocole de communication entre clients et serveurs. HTTPS est sa version sécurisée (chiffrée via TLS). Chaque échange HTTP comporte une requête et une réponse.' },
      { type: 'list', items: [
        'GET — récupérer une ressource (page, image, JSON…)',
        'POST — envoyer des données (formulaire, API…)',
        'PUT/PATCH — mettre à jour une ressource',
        'DELETE — supprimer une ressource'
      ]},
      { type: 'code', language: 'http', code: `// Requête HTTP
GET /page.html HTTP/1.1
Host: www.example.com
Accept: text/html

// Réponse HTTP
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1234

<!DOCTYPE html>
<html>...` },
      { type: 'section', title: 'Les codes de statut HTTP' },
      { type: 'list', items: [
        '200 OK — tout s\'est bien passé',
        '301/302 — redirection vers une autre URL',
        '404 Not Found — la page n\'existe pas',
        '500 Internal Server Error — erreur côté serveur',
        '403 Forbidden — accès refusé'
      ]},
      { type: 'section', title: 'DNS : l\'annuaire d\'Internet' },
      { type: 'text', content: 'Le DNS (Domain Name System) traduit les noms de domaine (google.com) en adresses IP (142.250.74.46). Sans DNS, vous devriez retenir des adresses IP pour chaque site.' },
      { type: 'code', language: 'text', code: `Vous tapez : www.google.com
      ↓
Résolveur DNS local (FAI)
      ↓
Serveur racine (.)
      ↓
Serveur TLD (.com)
      ↓
Serveur autoritaire (google.com)
      ↓
IP : 142.250.74.46  →  Connexion TCP/IP` },
      { type: 'tip', content: 'Utilisez les DevTools de Chrome (F12 → Onglet Réseau) pour voir toutes les requêtes HTTP d\'une page en temps réel. C\'est l\'outil le plus puissant pour comprendre comment fonctionne un site.' },
      { type: 'warn', content: 'HTTP (sans S) transmet les données en clair. N\'entrez jamais de mot de passe ou numéro de carte bancaire sur un site sans le cadenas HTTPS dans la barre d\'adresse.' },
      { type: 'project', title: 'Projet : Inspection réseau', description: 'Ouvrez n\'importe quel site (par ex. wikipedia.org), allez dans les DevTools → Onglet Réseau, rechargez la page. Identifiez : la première requête HTML, les fichiers CSS et JS chargés, les images, et notez les codes de statut. Combien de requêtes sont faites au total ?' },
    ],
    reference: [
      { type: 'section', title: 'Codes HTTP essentiels' },
      { type: 'code', language: 'text', code: `1xx — Informationnel
  100 Continue

2xx — Succès
  200 OK
  201 Created
  204 No Content

3xx — Redirection
  301 Moved Permanently
  302 Found (temporaire)
  304 Not Modified

4xx — Erreur client
  400 Bad Request
  401 Unauthorized
  403 Forbidden
  404 Not Found
  429 Too Many Requests

5xx — Erreur serveur
  500 Internal Server Error
  502 Bad Gateway
  503 Service Unavailable` },
      { type: 'section', title: 'Méthodes HTTP' },
      { type: 'code', language: 'text', code: `GET    /users          → liste
GET    /users/42       → un user
POST   /users          → créer
PUT    /users/42       → remplacer
PATCH  /users/42       → modifier
DELETE /users/42       → supprimer` },
    ],
    quiz: [
      { question: 'Quelle est la différence entre Internet et le Web ?', options: ['Ce sont deux mots pour la même chose', 'Internet est le réseau physique, le Web est un service qui l\'utilise', 'Le Web est plus ancien qu\'Internet'], answer: 1, explanation: 'Internet est l\'infrastructure réseau mondiale (câbles, routeurs). Le Web est un service applicatif (pages HTML) qui utilise Internet comme transport, inventé en 1989 par Tim Berners-Lee.' },
      { question: 'Que signifie un code HTTP 404 ?', options: ['Le serveur a planté', 'La ressource demandée n\'existe pas', 'L\'accès est refusé'], answer: 1, explanation: '404 Not Found signifie que le serveur a bien reçu la requête mais ne trouve pas la ressource demandée. C\'est une erreur côté client (mauvaise URL).' },
      { question: 'À quoi sert le DNS ?', options: ['À chiffrer les connexions HTTPS', 'À traduire les noms de domaine en adresses IP', 'À stocker les pages web en cache'], answer: 1, explanation: 'Le DNS est l\'annuaire d\'Internet. Il convertit les noms lisibles (google.com) en adresses IP numériques (142.250.74.46) que les ordinateurs utilisent pour se connecter.' },
      { question: 'Quelle méthode HTTP utilise-t-on pour envoyer un formulaire ?', options: ['GET', 'POST', 'PUT'], answer: 1, explanation: 'POST est utilisé pour envoyer des données au serveur (formulaires, création de ressources). GET sert à récupérer des données — les paramètres sont visibles dans l\'URL, ce qui n\'est pas adapté aux mots de passe.' },
      { question: 'Pourquoi HTTPS est-il plus sécurisé que HTTP ?', options: ['Il est plus rapide', 'Il chiffre les données échangées via TLS', 'Il utilise un port différent seulement'], answer: 1, explanation: 'HTTPS chiffre toutes les données échangées grâce au protocole TLS (Transport Layer Security). Sans ce chiffrement, n\'importe qui sur le réseau pourrait lire vos données en clair (attaque "man in the middle").' },
    ],
  },
  {
    id: 2,
    level: 'debutant',
    emoji: '📄',
    titre: 'HTML5',
    description: 'La structure sémantique du Web — balises, attributs, formulaires.',
    content: [
      { type: 'section', title: 'HTML : le squelette de chaque page web' },
      { type: 'text', content: 'HTML (HyperText Markup Language) est le langage qui structure le contenu d\'une page web. Il utilise des balises pour décrire le sens et la hiérarchie du contenu — pas son apparence (c\'est le rôle du CSS).' },
      { type: 'code', language: 'html', code: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ma première page</title>
</head>
<body>
  <h1>Bonjour le monde !</h1>
  <p>Mon premier paragraphe HTML.</p>
</body>
</html>` },
      { type: 'section', title: 'La sémantique HTML5' },
      { type: 'text', content: 'HTML5 a introduit des balises sémantiques qui décrivent le rôle du contenu. Cela améliore l\'accessibilité, le référencement (SEO) et la lisibilité du code.' },
      { type: 'code', language: 'html', code: `<header>
  <nav>
    <ul>
      <li><a href="/">Accueil</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Titre de l'article</h1>
    <p>Contenu principal...</p>
  </article>
  <aside>
    <p>Contenu secondaire / sidebar</p>
  </aside>
</main>

<footer>
  <p>© 2024 Mon Site</p>
</footer>` },
      { type: 'list', items: [
        '<header> — en-tête de la page ou d\'une section',
        '<nav> — navigation principale',
        '<main> — contenu principal (unique par page)',
        '<article> — contenu autonome (article de blog, post)',
        '<section> — section thématique',
        '<aside> — contenu complémentaire (sidebar)',
        '<footer> — pied de page'
      ]},
      { type: 'section', title: 'Les attributs importants' },
      { type: 'code', language: 'html', code: `<!-- Liens -->
<a href="https://google.com" target="_blank" rel="noopener">Google</a>

<!-- Images -->
<img src="photo.jpg" alt="Description de l'image" width="800" height="600">

<!-- Classes et IDs -->
<div class="carte produit" id="carte-principale">
  Contenu
</div>

<!-- Data attributes (données personnalisées) -->
<button data-user-id="42" data-action="delete">Supprimer</button>` },
      { type: 'section', title: 'Formulaires HTML5' },
      { type: 'code', language: 'html', code: `<form action="/inscription" method="POST">
  <label for="nom">Nom :</label>
  <input type="text" id="nom" name="nom" required minlength="2">

  <label for="email">Email :</label>
  <input type="email" id="email" name="email" required>

  <label for="age">Âge :</label>
  <input type="number" id="age" name="age" min="18" max="99">

  <label for="ville">Ville :</label>
  <select id="ville" name="ville">
    <option value="paris">Paris</option>
    <option value="lyon">Lyon</option>
  </select>

  <label>
    <input type="checkbox" name="cgu" required>
    J'accepte les CGU
  </label>

  <button type="submit">S'inscrire</button>
</form>` },
      { type: 'section', title: 'Les types d\'input HTML5' },
      { type: 'list', items: [
        'text — texte libre',
        'email — valide automatiquement le format email',
        'password — masque les caractères',
        'number — champ numérique avec min/max',
        'date — sélecteur de date natif',
        'range — curseur (slider)',
        'color — sélecteur de couleur',
        'file — upload de fichier',
        'checkbox — case à cocher',
        'radio — bouton radio (choix unique)',
        'tel — numéro de téléphone',
        'url — URL avec validation'
      ]},
      { type: 'tip', content: 'Utilisez toujours l\'attribut "alt" sur vos images — c\'est essentiel pour l\'accessibilité (lecteurs d\'écran) et le SEO. Un alt vide (alt="") indique que l\'image est purement décorative.' },
      { type: 'warn', content: 'Ne jamais imbriquer un élément block dans un élément inline ! Par exemple <a> ne peut pas contenir un <div>. Respectez la hiérarchie des éléments pour éviter un rendu imprévisible selon les navigateurs.' },
      { type: 'project', title: 'Projet : Page de profil', description: 'Créez une page HTML complète avec : un <header> avec votre nom, un <main> avec une section "À propos" (texte + image), une section "Compétences" (liste), et un <footer>. Ajoutez un formulaire de contact avec nom, email et message. Validez votre HTML sur validator.w3.org.' },
    ],
    reference: [
      { type: 'section', title: 'Balises essentielles' },
      { type: 'code', language: 'html', code: `<!-- Titres -->
<h1> à <h6>

<!-- Texte -->
<p>     Paragraphe
<strong> Texte important (gras)
<em>     Emphase (italique)
<span>   Inline générique
<br>     Saut de ligne
<hr>     Séparateur horizontal

<!-- Listes -->
<ul> <li>   Liste non ordonnée
<ol> <li>   Liste ordonnée
<dl> <dt> <dd>  Liste de définitions

<!-- Médias -->
<img src="" alt="">
<video src="" controls>
<audio src="" controls>

<!-- Tableaux -->
<table>
  <thead><tr><th>Col</th></tr></thead>
  <tbody><tr><td>Val</td></tr></tbody>
</table>` },
    ],
    quiz: [
      { question: 'Quelle balise définit le contenu principal d\'une page (unique par page) ?', options: ['<content>', '<main>', '<body>'], answer: 1, explanation: '<main> représente le contenu principal, unique par page. <body> contient tout le contenu visible, et <content> n\'existe pas en HTML. L\'unicité de <main> aide les lecteurs d\'écran à sauter directement au contenu.' },
      { question: 'Comment rendre un champ email obligatoire en HTML5 ?', options: ['<input type="email" mandatory>', '<input type="email" required>', '<input type="email" obligatoire>'], answer: 1, explanation: 'L\'attribut "required" rend un champ obligatoire. Le navigateur bloquera la soumission du formulaire si le champ est vide, sans avoir besoin de JavaScript.' },
      { question: 'À quoi sert l\'attribut "alt" sur une image ?', options: ['Il définit la taille de l\'image', 'Il fournit une description textuelle pour l\'accessibilité et le SEO', 'Il définit le chemin de l\'image'], answer: 1, explanation: 'L\'attribut alt fournit un texte alternatif quand l\'image ne peut pas être affichée. Il est lu par les lecteurs d\'écran pour les personnes malvoyantes, et utilisé par les moteurs de recherche pour indexer les images.' },
      { question: 'Quelle est la différence entre <strong> et <b> ?', options: ['Aucune, c\'est la même chose', '<strong> a une signification sémantique (importance), <b> est juste visuel', '<b> est plus moderne que <strong>'], answer: 1, explanation: '<strong> indique que le texte a une importance particulière (sémantique). <b> met juste en gras visuellement sans sens particulier. Pour le SEO et l\'accessibilité, préférez <strong> quand le texte est vraiment important.' },
      { question: 'Quel DOCTYPE est correct pour HTML5 ?', options: ['<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">', '<!DOCTYPE html>', '<?xml version="1.0"?>'], answer: 1, explanation: 'HTML5 utilise la déclaration DOCTYPE simplifiée <!DOCTYPE html>. Les versions précédentes avaient des DTD longues et complexes. Cette déclaration indique au navigateur d\'utiliser le mode de rendu standard.' },
    ],
  },
  {
    id: 3,
    level: 'debutant',
    emoji: '🎨',
    titre: 'CSS3',
    description: 'Styles, layouts Flexbox/Grid, animations — donnez vie à vos pages.',
    content: [
      { type: 'section', title: 'CSS : peindre le Web' },
      { type: 'text', content: 'CSS (Cascading Style Sheets) contrôle l\'apparence visuelle des éléments HTML. "Cascading" signifie que les règles s\'appliquent en cascade — les styles plus spécifiques écrasent les moins spécifiques.' },
      { type: 'code', language: 'css', code: `/* Sélecteurs de base */
h1 { color: navy; font-size: 2rem; }
.ma-classe { background: #f0f0f0; }
#mon-id { border: 2px solid red; }

/* Variables CSS (custom properties) */
:root {
  --couleur-primaire: #7c5cfc;
  --couleur-texte: #e8e8f0;
  --espacement: 1rem;
}

.bouton {
  background: var(--couleur-primaire);
  color: var(--couleur-texte);
  padding: var(--espacement);
}` },
      { type: 'section', title: 'Le modèle de boîte (Box Model)' },
      { type: 'text', content: 'Tout élément HTML est une boîte rectangulaire composée de 4 couches : content, padding, border, margin. Comprendre le box model est fondamental pour maîtriser le CSS.' },
      { type: 'code', language: 'css', code: `/* box-sizing: border-box est essentiel */
*, *::before, *::after {
  box-sizing: border-box;
}

.carte {
  width: 300px;      /* largeur totale incluant padding+border */
  padding: 20px;     /* espace intérieur */
  border: 2px solid #ccc;  /* bordure */
  margin: 16px;      /* espace extérieur */

  /* Autres propriétés fréquentes */
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}` },
      { type: 'section', title: 'Flexbox : layouts en 1D' },
      { type: 'code', language: 'css', code: `.container {
  display: flex;
  flex-direction: row;       /* row | column */
  justify-content: center;   /* axe principal */
  align-items: center;       /* axe secondaire */
  gap: 16px;                 /* espacement entre enfants */
  flex-wrap: wrap;           /* retour à la ligne */
}

/* Enfant flex */
.item {
  flex: 1;          /* grandit pour remplir l'espace */
  flex: 0 0 200px;  /* taille fixe 200px */
  align-self: flex-start;  /* override alignement individuel */
}` },
      { type: 'section', title: 'CSS Grid : layouts en 2D' },
      { type: 'code', language: 'css', code: `.grille {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 colonnes égales */
  grid-template-columns: 250px 1fr 1fr;  /* sidebar + 2 colonnes */
  grid-template-rows: auto 1fr auto;     /* header, main, footer */
  gap: 20px;
}

/* Placer un élément sur plusieurs cellules */
.hero {
  grid-column: 1 / -1;  /* toute la largeur */
  grid-row: 1 / 3;
}

/* Layout classique avec Grid Areas */
.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
header { grid-area: header; }
aside  { grid-area: sidebar; }` },
      { type: 'section', title: 'Responsive Design & Media Queries' },
      { type: 'list', items: [
        'Mobile first : commencez par le design mobile, puis élargissez avec des media queries',
        'Breakpoints courants : 480px (mobile), 768px (tablette), 1024px (desktop)',
        'Utilisez des unités relatives : rem, em, %, vw, vh',
        'min-width vs max-width : mobile-first utilise min-width'
      ]},
      { type: 'tip', content: 'Utilisez "gap" plutôt que "margin" pour espacer les éléments dans un Flexbox ou Grid — c\'est plus propre et n\'ajoute pas d\'espace sur les bords externes du conteneur.' },
      { type: 'warn', content: 'Évitez d\'abuser de "!important" — c\'est un signe que votre sélecteur n\'est pas assez spécifique. Réglez le problème à la source en utilisant des classes plus précises plutôt qu\'en forçant la cascade.' },
      { type: 'project', title: 'Projet : Landing Page', description: 'Créez une landing page responsive avec : un header avec logo + nav (Flexbox), une section hero pleine largeur, une grille de 3 cartes (Grid), et un footer. Utilisez des variables CSS pour les couleurs. La page doit être responsive : grille en 1 colonne sur mobile.' },
    ],
    reference: [
      { type: 'section', title: 'Propriétés Flexbox' },
      { type: 'code', language: 'css', code: `/* Container */
display: flex
flex-direction: row | column | row-reverse | column-reverse
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly
align-items: stretch | flex-start | flex-end | center | baseline
flex-wrap: nowrap | wrap | wrap-reverse
gap: <length>

/* Enfants */
flex: <grow> <shrink> <basis>
flex: 1       /* = flex: 1 1 0% */
flex: auto    /* = flex: 1 1 auto */
order: <number>
align-self: auto | flex-start | flex-end | center | stretch` },
      { type: 'section', title: 'Propriétés Grid' },
      { type: 'code', language: 'css', code: `/* Container */
display: grid
grid-template-columns: repeat(3, 1fr) | 200px 1fr
grid-template-rows: auto 1fr auto
grid-template-areas: "a b" "c d"
gap: <row> <column>
place-items: center  /* shorthand align + justify */

/* Enfants */
grid-column: 1 / 3
grid-row: 2 / 4
grid-area: nom-area` },
    ],
    quiz: [
      { question: 'Que fait "box-sizing: border-box" ?', options: ['Ajoute une bordure à tous les éléments', 'Inclut padding et border dans la largeur/hauteur déclarée', 'Supprime les marges extérieures'], answer: 1, explanation: 'Avec border-box, si vous définissez width: 300px, le padding et la border sont inclus dans ces 300px. Sans ça (content-box par défaut), le padding s\'ajoute à la largeur, ce qui rend les calculs de layout très difficiles.' },
      { question: 'Quelle propriété Flexbox aligne les éléments sur l\'axe principal (horizontal par défaut) ?', options: ['align-items', 'justify-content', 'flex-direction'], answer: 1, explanation: 'justify-content aligne sur l\'axe principal (row = horizontal). align-items aligne sur l\'axe secondaire (row = vertical). L\'axe principal change si flex-direction est "column".' },
      { question: 'Comment créer une grille CSS de 3 colonnes égales ?', options: ['grid-template-columns: 33% 33% 33%', 'grid-template-columns: repeat(3, 1fr)', 'columns: 3'], answer: 1, explanation: 'repeat(3, 1fr) crée 3 colonnes qui se partagent l\'espace disponible équitablement. "1fr" signifie "1 fraction de l\'espace disponible". C\'est plus flexible que des pourcentages car ça tient compte du gap.' },
      { question: 'Quelle unité CSS est relative à la taille de la police de l\'élément racine ?', options: ['em', 'rem', 'px'], answer: 1, explanation: 'rem (root em) est relatif à la taille de police de <html> (généralement 16px). em est relatif à la taille de police de l\'élément parent, ce qui peut créer des effets en cascade difficiles à gérer. rem est donc plus prévisible.' },
      { question: 'Quel est l\'ordre de priorité CSS (du moins au plus prioritaire) ?', options: ['Inline > Classes > IDs > !important', 'Navigateur < Héritée < Classe < ID < Inline < !important', 'Toutes les règles ont la même priorité'], answer: 1, explanation: 'La spécificité CSS suit un ordre : styles du navigateur → propriétés héritées → classes/attributs (0,1,0) → IDs (1,0,0) → styles inline (1,0,0,0) → !important. Un ID est 100× plus spécifique qu\'une classe.' },
    ],
  },
  {
    id: 4,
    level: 'intermediaire',
    emoji: '⚡',
    titre: 'JavaScript',
    description: 'Variables, fonctions, DOM, fetch, async/await — le langage du Web.',
    content: [
      { type: 'section', title: 'Les fondamentaux JavaScript' },
      { type: 'text', content: 'JavaScript est le seul langage de programmation natif des navigateurs. Il rend les pages interactives, communique avec des APIs et manipule le DOM en temps réel.' },
      { type: 'code', language: 'javascript', code: `// Variables : préférez const, puis let, jamais var
const NOM = 'Alice';           // immuable
let compteur = 0;              // mutable
let liste = [1, 2, 3];

// Types primitifs
typeof 42           // "number"
typeof "hello"      // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (bug historique)
typeof {}           // "object"
typeof []           // "object"

// Égalité stricte — toujours utiliser ===
0 == "0"    // true (coercition de type)
0 === "0"   // false (types différents)` },
      { type: 'section', title: 'Fonctions et closures' },
      { type: 'code', language: 'javascript', code: `// Déclaration (hoistée)
function additionner(a, b) {
  return a + b;
}

// Expression (non hoistée)
const multiplier = function(a, b) {
  return a * b;
};

// Arrow function (this lexical)
const diviser = (a, b) => a / b;
const saluer = nom => \`Bonjour \${nom} !\`;

// Paramètres par défaut et rest
function creerUser(nom, age = 18, ...roles) {
  return { nom, age, roles };
}

// Closure : une fonction qui "mémorise" son contexte
function compteur(debut = 0) {
  let valeur = debut;
  return {
    incrementer: () => ++valeur,
    valeur: () => valeur,
  };
}
const c = compteur(10);
c.incrementer(); // 11` },
      { type: 'section', title: 'Manipulation du DOM' },
      { type: 'code', language: 'javascript', code: `// Sélectionner des éléments
const btn = document.querySelector('#mon-bouton');
const items = document.querySelectorAll('.item');

// Modifier le contenu
btn.textContent = 'Nouveau texte';
btn.innerHTML = '<strong>HTML</strong> ici';

// Modifier les styles et classes
btn.style.color = 'red';
btn.classList.add('actif');
btn.classList.remove('inactif');
btn.classList.toggle('visible');

// Créer et insérer des éléments
const div = document.createElement('div');
div.className = 'carte';
div.textContent = 'Nouveau contenu';
document.body.appendChild(div);

// Événements
btn.addEventListener('click', (event) => {
  event.preventDefault();  // empêche le comportement par défaut
  console.log('Cliqué !', event.target);
});` },
      { type: 'section', title: 'Async / Await et Fetch API' },
      { type: 'code', language: 'javascript', code: `// Fetch avec async/await
async function chargerUsers() {
  try {
    const response = await fetch('https://api.example.com/users');

    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}\`);
    }

    const users = await response.json();
    return users;
  } catch (erreur) {
    console.error('Erreur:', erreur);
    return [];
  }
}

// Utilisation
const users = await chargerUsers();
users.forEach(user => {
  const li = document.createElement('li');
  li.textContent = user.name;
  document.querySelector('#liste').appendChild(li);
});` },
      { type: 'section', title: 'Méthodes de tableau essentielles' },
      { type: 'list', items: [
        'map() — transforme chaque élément, retourne un nouveau tableau',
        'filter() — garde seulement les éléments qui passent le test',
        'reduce() — réduit le tableau à une seule valeur',
        'find() — retourne le premier élément qui correspond',
        'some() / every() — teste si certains/tous les éléments correspondent',
        'forEach() — itère sans retourner de valeur',
        'flat() / flatMap() — aplatit les tableaux imbriqués'
      ]},
      { type: 'tip', content: 'Utilisez la déstructuration et le spread operator pour écrire du code plus lisible : const { nom, age } = user; const copie = [...tableau, nouvelElement]; const merged = { ...obj1, ...obj2 };' },
      { type: 'warn', content: 'N\'utilisez jamais eval() — c\'est une faille de sécurité majeure. Évitez aussi d\'utiliser innerHTML avec des données venant de l\'utilisateur sans les assainir — c\'est la principale cause de failles XSS.' },
      { type: 'project', title: 'Projet : Todo List interactive', description: 'Créez une application Todo List avec : ajout de tâches (champ + bouton), marquage comme fait (clic), suppression, filtrage (toutes/actives/terminées), et persistance dans localStorage. Pas de frameworks — JavaScript pur uniquement.' },
    ],
    reference: [
      { type: 'section', title: 'Méthodes tableau et objet' },
      { type: 'code', language: 'javascript', code: `// Tableau
arr.map(x => x * 2)
arr.filter(x => x > 0)
arr.reduce((acc, x) => acc + x, 0)
arr.find(x => x.id === 5)
arr.findIndex(x => x.id === 5)
arr.some(x => x > 10)
arr.every(x => x > 0)
arr.includes(42)
arr.flat(Infinity)
arr.sort((a, b) => a - b)
[...new Set(arr)]  // dédoublonnage

// Objet
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
Object.assign({}, obj1, obj2)
const clone = { ...obj }
const { a, b, ...reste } = obj` },
    ],
    quiz: [
      { question: 'Quelle est la différence entre == et === en JavaScript ?', options: ['=== est plus lent car il fait plus de vérifications', '== fait une coercition de type, === vérifie type ET valeur', '=== ne fonctionne qu\'avec les nombres'], answer: 1, explanation: '=== (égalité stricte) compare la valeur ET le type sans conversion. == (égalité faible) convertit les types avant de comparer : "0" == 0 est true, "0" === 0 est false. Utilisez toujours === pour éviter les bugs subtils.' },
      { question: 'Que retourne [1,2,3].map(x => x * 2) ?', options: ['6 (la somme)', '[2,4,6] (nouveau tableau)', 'undefined'], answer: 1, explanation: 'map() transforme chaque élément et retourne un NOUVEAU tableau de même longueur. Il ne modifie pas le tableau original. Le résultat est [2, 4, 6].' },
      { question: 'Pourquoi utilise-t-on async/await ?', options: ['Pour rendre le code plus rapide', 'Pour écrire du code asynchrone de façon lisible, comme du code synchrone', 'Pour éviter les erreurs JavaScript'], answer: 1, explanation: 'async/await est du sucre syntaxique sur les Promises. Il permet d\'attendre le résultat d\'opérations asynchrones (fetch, setTimeout) sans imbrication de .then(), rendant le code séquentiel et lisible.' },
      { question: 'Qu\'est-ce qu\'une closure ?', options: ['Une fonction qui ne retourne rien', 'Une fonction qui "se souvient" des variables de sa portée englobante', 'Une fonction auto-exécutée'], answer: 1, explanation: 'Une closure est une fonction qui capture et mémorise les variables de son contexte d\'exécution, même après que la fonction parente a terminé. C\'est fondamental en JS : les callbacks, les modules, les hooks React reposent sur les closures.' },
      { question: 'Comment sélectionner TOUS les éléments avec la classe "carte" ?', options: ['document.getElement(".carte")', 'document.querySelectorAll(".carte")', 'document.querySelector(".carte")'], answer: 1, explanation: 'querySelectorAll() retourne une NodeList de tous les éléments correspondants. querySelector() retourne seulement le premier élément trouvé. getElementById/ClassName n\'acceptent pas les sélecteurs CSS complets.' },
    ],
  },
  {
    id: 5,
    level: 'intermediaire',
    emoji: '🖌️',
    titre: 'Design UX/UI',
    description: 'Principes de design, typographie, couleurs, accessibilité.',
    content: [
      { type: 'section', title: 'UX vs UI : deux disciplines complémentaires' },
      { type: 'text', content: 'L\'UX (User Experience) concerne la façon dont les utilisateurs vivent leur interaction avec un produit. L\'UI (User Interface) est l\'aspect visuel de cette interaction. Un bon design combine les deux : beau ET fonctionnel.' },
      { type: 'list', items: [
        'UX Design : recherche utilisateurs, wireframes, parcours, tests d\'utilisabilité',
        'UI Design : couleurs, typographie, composants visuels, système de design',
        'Un design magnifique mais confus = mauvaise UX',
        'Une interface fonctionnelle mais laide = mauvaise UI',
        'Objectif : interfaces utilisables, accessibles ET agréables'
      ]},
      { type: 'section', title: 'Les principes de Gestalt appliqués au design' },
      { type: 'list', items: [
        'Proximité : les éléments proches semblent liés — groupez les infos connexes',
        'Similarité : les éléments similaires semblent appartenir au même groupe',
        'Continuité : l\'œil suit les lignes et courbes naturellement',
        'Clôture : le cerveau complète les formes incomplètes',
        'Figure/fond : distinction entre ce qui est "devant" et "derrière"'
      ]},
      { type: 'section', title: 'Typographie web' },
      { type: 'code', language: 'css', code: `/* Hiérarchie typographique claire */
:root {
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.25rem;    /* 20px */
  --font-size-xl: 1.5rem;     /* 24px */
  --font-size-2xl: 2rem;      /* 32px */
  --font-size-3xl: 3rem;      /* 48px */

  --line-height-tight: 1.2;
  --line-height-normal: 1.5;  /* idéal pour le corps de texte */
  --line-height-relaxed: 1.8;
}

/* Lisibilité optimale */
p {
  max-width: 65ch;   /* environ 65 caractères par ligne */
  line-height: 1.6;
  font-size: 1.1rem;
}` },
      { type: 'section', title: 'Théorie des couleurs' },
      { type: 'code', language: 'css', code: `/* Palette cohérente avec variables CSS */
:root {
  /* Couleur primaire + nuances */
  --primary-50:  #f0f0ff;
  --primary-500: #7c5cfc;  /* principale */
  --primary-700: #5b3fd4;

  /* Sémantique */
  --color-success: #00e5a0;
  --color-warning: #f5c842;
  --color-error:   #fc5c7d;
  --color-info:    #5cb8ff;

  /* Ratio de contraste WCAG AA : min 4.5:1 pour le texte */
  --text-on-dark:  #f0f0f0;
  --text-on-light: #1a1a2e;
}` },
      { type: 'section', title: 'Les 8 règles d\'or du design UI' },
      { type: 'list', items: [
        'Hiérarchie visuelle : guidez l\'œil du plus important au moins important',
        'Espace blanc : respirez — ne remplissez pas tous les espaces',
        'Cohérence : utilisez un système de design (espacements, couleurs, composants réutilisables)',
        'Feedback immédiat : chaque action doit avoir une réponse visuelle',
        'Affordance : les éléments cliquables doivent "sembler" cliquables',
        'Accessibilité : contrastes suffisants, cibles de clic assez grandes (44px min)',
        'Mobile-first : pensez d\'abord petit écran, puis agrandissez',
        'Réduction de la charge cognitive : moins d\'options = moins de charge mentale'
      ]},
      { type: 'tip', content: 'La règle des 60-30-10 pour les couleurs : 60% couleur dominante (fond), 30% couleur secondaire (composants), 10% couleur d\'accent (CTA, highlights). Cette répartition crée un équilibre visuel naturel.' },
      { type: 'warn', content: 'Un ratio de contraste inférieur à 4.5:1 entre le texte et son fond est une violation WCAG AA. Utilisez https://webaim.org/resources/contrastchecker/ pour vérifier — c\'est souvent une obligation légale.' },
      { type: 'project', title: 'Projet : Système de design', description: 'Créez un fichier CSS avec un système de design complet : variables pour couleurs (primaire, succès, erreur), typographie (tailles, weights), espacement (4px, 8px, 16px, 24px, 32px), et composants (bouton primaire, bouton secondaire, carte, badge). Documentez-le dans une page HTML.' },
    ],
    reference: [
      { type: 'section', title: 'Ressources design' },
      { type: 'code', language: 'text', code: `Outils
  Figma — design et prototypage (gratuit)
  Coolors.co — générateur de palettes
  Google Fonts — typographies gratuites
  Heroicons / Lucide — icônes SVG

Vérification accessibilité
  WebAIM Contrast Checker
  axe DevTools (extension Chrome)
  WAVE (wave.webaim.org)

Inspiration
  Dribbble, Behance — portfolios design
  awwwards.com — sites primés
  refero.design — patterns UI réels` },
    ],
    quiz: [
      { question: 'Que signifie WCAG ?', options: ['Web Color And Graphics', 'Web Content Accessibility Guidelines', 'Web Component Architecture Guide'], answer: 1, explanation: 'WCAG (Web Content Accessibility Guidelines) est le standard international d\'accessibilité du W3C. WCAG 2.1 AA est le niveau requis dans la plupart des législations. Il définit notamment les ratios de contraste et la navigation au clavier.' },
      { question: 'Quel est le ratio de contraste minimum WCAG AA pour du texte normal ?', options: ['3:1', '4.5:1', '7:1'], answer: 1, explanation: '4.5:1 est le minimum pour WCAG AA (texte normal). Pour le grand texte (18pt+ ou 14pt bold), 3:1 suffit. Le niveau AAA exige 7:1. Ces ratios garantissent que les personnes malvoyantes peuvent lire le contenu.' },
      { question: 'La règle des 60-30-10 concerne ?', options: ['La taille des polices', 'La répartition des couleurs dans un design', 'L\'espacement des éléments'], answer: 1, explanation: 'La règle 60-30-10 guide la répartition des couleurs : 60% pour la couleur dominante (fond), 30% pour la couleur secondaire (éléments UI), 10% pour l\'accent (boutons CTA, highlights). Elle crée un équilibre visuel harmonieux.' },
      { question: 'Qu\'est-ce que l\'affordance en UX ?', options: ['La vitesse de chargement d\'une page', 'La capacité d\'un élément à suggérer comment il s\'utilise', 'L\'accessibilité pour les daltoniens'], answer: 1, explanation: 'L\'affordance (concept de Don Norman) est la propriété d\'un objet qui suggère naturellement son usage. Un bouton en relief "invite" à cliquer, un champ de texte "invite" à écrire. Un bon design UI exploite l\'affordance pour que l\'interface soit intuitive.' },
      { question: 'Pourquoi limiter la largeur des colonnes de texte à ~65 caractères ?', options: ['Pour économiser de la mémoire', 'Pour une lisibilité optimale — le retour à la ligne ne fatigue pas l\'œil', 'C\'est une règle SEO'], answer: 1, explanation: 'Des lignes trop longues fatiguent l\'œil et rendent difficile de retrouver le début de la ligne suivante. 65ch (environ 65 caractères) est la mesure optimale pour la lecture soutenue. C\'est pourquoi les journaux et livres utilisent des colonnes étroites.' },
    ],
  },
  {
    id: 6,
    level: 'intermediaire',
    emoji: '🌿',
    titre: 'Git & GitHub',
    description: 'Versioning, branches, pull requests, workflows en équipe.',
    content: [
      { type: 'section', title: 'Pourquoi Git est indispensable' },
      { type: 'text', content: 'Git est un système de contrôle de version distribué. Il garde l\'historique de chaque modification de votre code, permet de travailler à plusieurs sans conflit, et vous laisse revenir à n\'importe quel état précédent.' },
      { type: 'code', language: 'bash', code: `# Configuration initiale (une seule fois)
git config --global user.name "Votre Nom"
git config --global user.email "vous@exemple.com"
git config --global core.editor "code --wait"  # VSCode

# Créer un nouveau repo
git init mon-projet
cd mon-projet

# Ou cloner un repo existant
git clone https://github.com/user/repo.git` },
      { type: 'section', title: 'Le workflow quotidien' },
      { type: 'code', language: 'bash', code: `# 1. Vérifier l'état du dépôt
git status

# 2. Voir les modifications en détail
git diff                    # non stagés
git diff --staged           # stagés (index)

# 3. Stager les modifications
git add fichier.js          # un fichier
git add src/                # un dossier
git add -p                  # interactif (patch)

# 4. Committer
git commit -m "feat: ajouter authentification JWT"

# 5. Pousser
git push origin main

# 6. Récupérer les changements
git pull origin main` },
      { type: 'section', title: 'Branches et merge' },
      { type: 'code', language: 'bash', code: `# Créer et basculer sur une branche
git checkout -b feature/mon-feature  # ancienne façon
git switch -c feature/mon-feature    # nouvelle façon (Git 2.23+)

# Lister les branches
git branch          # locales
git branch -a       # toutes (local + remote)

# Fusionner
git switch main
git merge feature/mon-feature

# Rebase (linéarise l'historique)
git switch feature/mon-feature
git rebase main

# Supprimer une branche
git branch -d feature/mon-feature
git push origin --delete feature/mon-feature` },
      { type: 'section', title: 'Conventions de commits (Conventional Commits)' },
      { type: 'list', items: [
        'feat: nouvelle fonctionnalité',
        'fix: correction de bug',
        'docs: documentation uniquement',
        'style: formatage, pas de changement logique',
        'refactor: restructuration sans changement de comportement',
        'test: ajout ou modification de tests',
        'chore: maintenance, dépendances, CI/CD'
      ]},
      { type: 'section', title: 'Annuler des erreurs' },
      { type: 'code', language: 'bash', code: `# Annuler le dernier commit (garde les changements)
git reset --soft HEAD~1

# Annuler le staging d'un fichier
git restore --staged fichier.js

# Ignorer des fichiers avec .gitignore
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore
echo "dist/" >> .gitignore

# Stash : mettre de côté des changements
git stash           # sauvegarder
git stash pop       # restaurer
git stash list      # voir tous les stashs` },
      { type: 'tip', content: 'Commitez souvent et avec des messages descriptifs. Un bon commit répond à : "Si appliqué, ce commit va... [votre message]". Des petits commits fréquents sont bien plus faciles à comprendre et reverter que de gros commits monolithiques.' },
      { type: 'warn', content: 'Ne jamais forcer un push (git push --force) sur une branche partagée — vous risquez d\'écraser le travail de vos collègues. Si vous devez corriger l\'historique, utilisez git push --force-with-lease qui échoue si quelqu\'un a poussé entre-temps.' },
      { type: 'project', title: 'Projet : Workflow GitHub Flow', description: 'Créez un repo GitHub, puis simulez un workflow : créez la branche main avec un README, créez une branche feature/ajout-page, ajoutez une page HTML, créez une Pull Request sur GitHub, et mergez. Utilisez les Conventional Commits pour tous vos messages.' },
    ],
    reference: [
      { type: 'section', title: 'Commandes Git essentielles' },
      { type: 'code', language: 'bash', code: `# État
git status
git log --oneline --graph
git diff [staged]

# Travailler
git add <fichiers>
git commit -m "message"
git push origin <branche>
git pull origin <branche>

# Branches
git switch -c <branche>
git merge <branche>
git rebase <branche>

# Annuler
git restore <fichier>        # discard changes
git reset --soft HEAD~1      # undo commit
git revert <hash>            # commit d'annulation

# Inspecter
git log --author="Nom"
git blame <fichier>
git show <hash>` },
    ],
    quiz: [
      { question: 'Quelle est la différence entre git merge et git rebase ?', options: ['merge est plus rapide que rebase', 'merge conserve l\'historique des branches, rebase linéarise l\'historique', 'rebase fusionne les branches, merge non'], answer: 1, explanation: 'merge crée un "merge commit" qui conserve l\'historique exact des deux branches divergentes. rebase "rejoue" vos commits sur la branche cible, créant un historique linéaire et plus propre. Rebase est préféré en solo, merge pour les PRs d\'équipe.' },
      { question: 'Que fait "git stash" ?', options: ['Supprime tous les fichiers non trackés', 'Met de côté temporairement les changements non commités', 'Crée un nouveau commit vide'], answer: 1, explanation: 'git stash sauvegarde vos changements non commités dans une pile temporaire et nettoie votre répertoire de travail. Utile pour changer de branche rapidement. git stash pop restaure les changements.' },
      { question: 'Qu\'est-ce qu\'une Pull Request (PR) ?', options: ['Une commande Git pour télécharger du code', 'Une demande de fusion de branche avec revue de code par l\'équipe', 'Un outil pour pusher sans mot de passe'], answer: 1, explanation: 'Une Pull Request (GitHub) ou Merge Request (GitLab) est une demande de fusionner une branche dans une autre, accompagnée d\'une interface de revue de code. C\'est le cœur du workflow collaboratif moderne — elle permet commentaires, discussions et approbations.' },
      { question: 'Que contient un fichier .gitignore ?', options: ['La liste des fichiers supprimés', 'Les patterns de fichiers à ne pas tracker (node_modules, .env…)', 'Les branches distantes'], answer: 1, explanation: '.gitignore liste les fichiers et dossiers que Git doit ignorer. Typiquement : node_modules/ (dépendances), .env (secrets), dist/ (fichiers générés), *.log (logs). Ces fichiers ne doivent pas être versionnés pour des raisons de performance, sécurité ou parce qu\'ils sont régénérables.' },
      { question: 'Que fait "git reset --soft HEAD~1" ?', options: ['Supprime définitivement le dernier commit et ses changements', 'Annule le dernier commit mais conserve les changements stagés', 'Revient au premier commit du dépôt'], answer: 1, explanation: '--soft annule le commit mais garde les changements dans le staging area (index). --mixed (défaut) garde les changements dans le working directory. --hard efface tout définitivement. HEAD~1 signifie "le commit avant HEAD".' },
    ],
  },
  {
    id: 7,
    level: 'avance',
    emoji: '⚛️',
    titre: 'React',
    description: 'Composants, hooks, state management, patterns avancés.',
    content: [
      { type: 'section', title: 'React : une bibliothèque, pas un framework' },
      { type: 'text', content: 'React est une bibliothèque JavaScript pour construire des interfaces utilisateur basées sur des composants. Il gère le DOM virtuel (Virtual DOM) pour mettre à jour efficacement l\'interface quand l\'état change.' },
      { type: 'code', language: 'jsx', code: `// Composant fonctionnel (moderne)
import { useState, useEffect } from 'react';

function Compteur({ depart = 0, pas = 1 }) {
  const [valeur, setValeur] = useState(depart);

  // Synchronisation avec un effet externe
  useEffect(() => {
    document.title = \`Compteur: \${valeur}\`;

    // Cleanup appelé avant chaque re-run ou unmount
    return () => {
      document.title = 'Mon App';
    };
  }, [valeur]); // dépendances

  return (
    <div>
      <button onClick={() => setValeur(v => v - pas)}>-</button>
      <span>{valeur}</span>
      <button onClick={() => setValeur(v => v + pas)}>+</button>
    </div>
  );
}` },
      { type: 'section', title: 'Les hooks fondamentaux' },
      { type: 'code', language: 'jsx', code: `import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

// useState — état local
const [items, setItems] = useState([]);
// TOUJOURS utiliser la forme fonctionnelle pour les updates basées sur l'état précédent
setItems(prev => [...prev, nouvelItem]);

// useRef — référence mutable sans re-render
const inputRef = useRef(null);
inputRef.current.focus();

// useMemo — mémoïser un calcul coûteux
const itemsFiltres = useMemo(
  () => items.filter(i => i.actif),
  [items]  // recalcule seulement si items change
);

// useCallback — mémoïser une fonction
const handleClick = useCallback((id) => {
  setItems(prev => prev.filter(i => i.id !== id));
}, []);  // jamais recréée` },
      { type: 'section', title: 'Custom Hooks : logique réutilisable' },
      { type: 'code', language: 'jsx', code: `// Hook personnalisé pour fetch de données
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function charger() {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.statusText);
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    charger();
    return () => { cancelled = true; };
  }, [url]);

  return { data, loading, error };
}

// Utilisation
function ListeUsers() {
  const { data, loading, error } = useApi('/api/users');

  if (loading) return <Spinner />;
  if (error) return <Erreur message={error} />;
  return <ul>{data.map(u => <li key={u.id}>{u.nom}</li>)}</ul>;
}` },
      { type: 'section', title: 'Context API et useReducer' },
      { type: 'code', language: 'jsx', code: `import { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      throw new Error(\`Action inconnue: \${action.type}\`);
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { theme: 'dark', user: null });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook custom pour consommer le contexte
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme doit être dans ThemeProvider');
  return context;
}` },
      { type: 'tip', content: 'Divisez vos composants selon le principe "Single Responsibility" : un composant fait une chose et la fait bien. Si un composant dépasse ~100 lignes, c\'est souvent le signe qu\'il doit être découpé.' },
      { type: 'warn', content: 'Ne mutez jamais l\'état directement ! setUser(user.name = "Alice") est un bug. Toujours créer un nouvel objet : setUser({ ...user, name: "Alice" }). React compare les références pour décider si un re-render est nécessaire.' },
      { type: 'project', title: 'Projet : App de gestion', description: 'Créez une application de gestion de tâches avec React : liste de tâches avec ajout/suppression/toggle, filtrage par statut, persistance localStorage via un custom hook useLocalStorage, et un contexte global pour le thème clair/sombre.' },
    ],
    reference: [
      { type: 'section', title: 'Hooks de référence' },
      { type: 'code', language: 'jsx', code: `useState(initialValue)     → [state, setter]
useEffect(fn, deps)        → cleanup
useRef(initialValue)       → { current }
useMemo(() => val, deps)   → valeur mémoïsée
useCallback(fn, deps)      → fonction mémoïsée
useContext(Context)        → valeur du contexte
useReducer(reducer, init)  → [state, dispatch]
useId()                    → id unique stable
useTransition()            → [isPending, startTransition]

// Règles des Hooks
// 1. Appelez seulement au niveau supérieur (pas dans if/loop)
// 2. Appelez seulement dans des composants React ou custom hooks
// 3. Nommez les custom hooks avec "use" (useMonHook)` },
    ],
    quiz: [
      { question: 'Pourquoi utiliser la forme fonctionnelle de setState ?', options: ['C\'est la nouvelle syntaxe obligatoire', 'Pour garantir l\'accès à la valeur précédente de l\'état, même dans les closures', 'Pour rendre le composant plus rapide'], answer: 1, explanation: 'Les mises à jour React sont asynchrones et peuvent être regroupées. setCount(count + 1) peut utiliser une valeur de count "périmée" dans une closure. setCount(prev => prev + 1) garantit toujours la valeur la plus récente.' },
      { question: 'Que signifie le tableau de dépendances de useEffect([dep]) ?', options: ['Les props du composant parent', 'Les valeurs surveillées — l\'effet se re-exécute quand l\'une d\'elles change', 'Les imports nécessaires à l\'effet'], answer: 1, explanation: 'useEffect se déclenche après chaque render. [] signifie "seulement au montage". [a, b] signifie "quand a ou b change". Omettre le tableau entier signifie "après chaque render". L\'ESLint de React aide à maintenir ces dépendances à jour.' },
      { question: 'Quelle est la différence entre useMemo et useCallback ?', options: ['Ils sont identiques', 'useMemo mémoïse une valeur calculée, useCallback mémoïse une fonction', 'useCallback est plus performant'], answer: 1, explanation: 'useMemo retourne un résultat mémoïsé : const val = useMemo(() => compute(a, b), [a, b]). useCallback retourne la même référence de fonction : const fn = useCallback(() => doSomething(a), [a]). Utile pour éviter des re-renders inutiles des composants enfants.' },
      { question: 'Quand utiliser useReducer plutôt que useState ?', options: ['Toujours, useReducer est plus moderne', 'Quand la logique d\'état est complexe (plusieurs sous-valeurs, transitions liées)', 'Seulement avec le Context API'], answer: 1, explanation: 'useState convient pour des états simples et indépendants. useReducer est préféré quand : l\'état suivant dépend du précédent, plusieurs sous-valeurs sont liées, la logique de transition est complexe. Il facilite aussi les tests de la logique d\'état.' },
      { question: 'Qu\'est-ce que le Virtual DOM de React ?', options: ['Un DOM stocké dans une base de données', 'Une représentation JavaScript légère du DOM réel, utilisée pour calculer les changements minimaux', 'Un DOM plus rapide créé par React'], answer: 1, explanation: 'Le Virtual DOM est une copie JavaScript du vrai DOM. React compare le nouveau Virtual DOM avec l\'ancien (diffing/reconciliation) pour calculer le minimum de changements à appliquer au vrai DOM — une opération coûteuse. C\'est la clé de la performance de React.' },
    ],
  },
  {
    id: 8,
    level: 'avance',
    emoji: '🖥️',
    titre: 'Node.js & Express',
    description: 'Backend JavaScript, APIs REST, middleware, authentification.',
    content: [
      { type: 'section', title: 'Node.js : JavaScript côté serveur' },
      { type: 'text', content: 'Node.js est un environnement d\'exécution JavaScript basé sur le moteur V8 de Chrome. Il permet d\'écrire des serveurs web en JavaScript, avec un modèle I/O non-bloquant et asynchrone particulièrement adapté aux APIs.' },
      { type: 'code', language: 'javascript', code: `// Serveur HTTP natif (bas niveau)
import http from 'node:http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello Node.js !' }));
});

server.listen(3000, () => {
  console.log('Serveur sur http://localhost:3000');
});` },
      { type: 'section', title: 'Express.js : le framework minimaliste' },
      { type: 'code', language: 'javascript', code: `import express from 'express';
import cors from 'cors';

const app = express();

// Middleware globaux
app.use(cors());
app.use(express.json());           // parse JSON body
app.use(express.urlencoded({ extended: true })); // parse form data

// Routes
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) return res.status(404).json({ error: 'User non trouvé' });
  res.json(user);
});

app.post('/users', async (req, res) => {
  const { nom, email } = req.body;
  const user = await User.create({ nom, email });
  res.status(201).json(user);
});

app.listen(3000);` },
      { type: 'section', title: 'Middleware : le cœur d\'Express' },
      { type: 'code', language: 'javascript', code: `// Un middleware = (req, res, next) => void

// Logging personnalisé
function logger(req, res, next) {
  console.log(\`\${req.method} \${req.url} - \${Date.now()}\`);
  next(); // Passer au middleware suivant
}

// Authentification JWT
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token manquant' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ error: 'Token invalide' });
  }
}

// Utilisation
app.use(logger);
app.get('/profil', authMiddleware, (req, res) => {
  res.json(req.user);
});` },
      { type: 'section', title: 'Gestion des erreurs' },
      { type: 'code', language: 'javascript', code: `// Wrapper pour les fonctions async (évite try/catch partout)
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

app.get('/data', asyncHandler(async (req, res) => {
  const data = await fetchSomething(); // peut throw
  res.json(data);
}));

// Middleware d'erreur global (4 paramètres)
app.use((err, req, res, next) => {
  console.error(err.stack);

  const status = err.statusCode || 500;
  res.status(status).json({
    error: err.message || 'Erreur interne',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});` },
      { type: 'section', title: 'Structure d\'un projet Express' },
      { type: 'list', items: [
        'src/routes/ — définition des endpoints par domaine',
        'src/controllers/ — logique de traitement des requêtes',
        'src/services/ — logique métier réutilisable',
        'src/models/ — modèles de données (Mongoose, Prisma…)',
        'src/middleware/ — middlewares custom',
        'src/config/ — configuration (DB, env…)'
      ]},
      { type: 'tip', content: 'Utilisez dotenv pour les variables d\'environnement et ne commitez jamais votre fichier .env. Créez un fichier .env.example avec des valeurs fictives pour documenter les variables nécessaires.' },
      { type: 'warn', content: 'Validez et assainissez toujours les données entrantes (body, params, query) avant de les utiliser. Bibliothèques recommandées : zod, joi, ou express-validator. Ne faites jamais confiance aux données client.' },
      { type: 'project', title: 'Projet : API REST complète', description: 'Créez une API REST pour une bibliothèque de films avec Express : GET/POST/PUT/DELETE /movies, pagination avec ?page=1&limit=10, filtrage par genre, authentification JWT sur les routes d\'écriture, et validation des données avec zod.' },
    ],
    reference: [
      { type: 'section', title: 'Méthodes de réponse Express' },
      { type: 'code', language: 'javascript', code: `res.json(data)           // 200 + JSON
res.status(201).json(d)  // 201 + JSON
res.send('texte')        // text/html
res.sendFile(path)       // fichier
res.redirect('/url')     // 302 redirect
res.redirect(301, '/url')// 301 redirect

req.params    // :id dans la route
req.query     // ?key=val dans l'URL
req.body      // body JSON (avec express.json())
req.headers   // en-têtes HTTP
req.user      // custom (ajouté par middleware)` },
    ],
    quiz: [
      { question: 'Que fait "next()" dans un middleware Express ?', options: ['Termine la requête et envoie une réponse', 'Passe le contrôle au middleware ou route suivant', 'Crée une nouvelle requête'], answer: 1, explanation: 'next() passe le contrôle au prochain middleware dans la chaîne. Sans appeler next() (et sans envoyer de réponse), la requête reste suspendue et le client attend indéfiniment. next(err) passe au middleware d\'erreur.' },
      { question: 'Quelle est la différence entre req.params et req.query ?', options: ['Aucune différence', 'params capture les segments d\'URL (:id), query capture les paramètres après ? (?key=val)', 'query est pour les requêtes POST seulement'], answer: 1, explanation: 'req.params contient les segments dynamiques de la route (/users/:id → req.params.id). req.query contient les paramètres de requête (/users?page=2 → req.query.page). req.body contient les données du corps (POST/PUT).' },
      { question: 'Pourquoi utiliser des variables d\'environnement (.env) pour les secrets ?', options: ['C\'est plus rapide que les constantes JS', 'Pour ne pas hardcoder les secrets dans le code versionné', 'Node.js ne peut pas lire les fichiers JS directement'], answer: 1, explanation: 'Les fichiers .env sont exclus du versioning (.gitignore). Cela évite d\'exposer des mots de passe, clés API ou secrets JWT dans l\'historique Git, visible par tous. En production, les variables sont injectées par l\'environnement de déploiement (Heroku, Railway, etc.).' },
      { question: 'Qu\'est-ce que CORS et pourquoi le configurer ?', options: ['Un format de compression des réponses', 'Une politique de sécurité qui bloque les requêtes cross-origin par défaut', 'Un système de cache HTTP'], answer: 1, explanation: 'CORS (Cross-Origin Resource Sharing) est une politique de sécurité des navigateurs qui bloque les requêtes depuis un domaine différent. Si votre API est sur api.example.com et votre frontend sur app.example.com, vous devez configurer CORS pour autoriser ces requêtes.' },
      { question: 'Comment gérer proprement les erreurs async dans Express ?', options: ['Avec un try/catch dans chaque route', 'Avec un wrapper asyncHandler + middleware d\'erreur global à 4 params', 'Express gère les erreurs async automatiquement'], answer: 1, explanation: 'Express ne catch pas automatiquement les erreurs async. Il faut soit un try/catch dans chaque route, soit un wrapper asyncHandler qui passe les erreurs à next(err). Le middleware d\'erreur (err, req, res, next) centralise la gestion des erreurs.' },
    ],
  },
  {
    id: 9,
    level: 'avance',
    emoji: '🗄️',
    titre: 'Bases de données',
    description: 'SQL, NoSQL, ORM, modélisation, requêtes avancées.',
    content: [
      { type: 'section', title: 'SQL vs NoSQL : choisir le bon outil' },
      { type: 'text', content: 'SQL (PostgreSQL, MySQL) : données structurées, relations complexes, transactions ACID. NoSQL (MongoDB, Redis) : flexibilité du schéma, scalabilité horizontale, cas d\'usage spécifiques.' },
      { type: 'list', items: [
        'PostgreSQL — relationnel open-source, JSONB, full-text search, extensions puissantes',
        'MySQL/MariaDB — populaire, performant, bien supporté',
        'SQLite — fichier local, parfait pour le développement et les petits projets',
        'MongoDB — documents JSON, schéma flexible, agrégations puissantes',
        'Redis — clé-valeur en mémoire, cache, sessions, pub/sub'
      ]},
      { type: 'section', title: 'SQL fondamental' },
      { type: 'code', language: 'sql', code: `-- Créer une table
CREATE TABLE users (
  id        SERIAL PRIMARY KEY,
  nom       VARCHAR(100) NOT NULL,
  email     VARCHAR(255) UNIQUE NOT NULL,
  age       INT CHECK (age >= 0),
  cree_le   TIMESTAMP DEFAULT NOW()
);

-- CRUD de base
INSERT INTO users (nom, email) VALUES ('Alice', 'alice@ex.com');
SELECT * FROM users WHERE age > 18 ORDER BY nom LIMIT 10;
UPDATE users SET nom = 'Alice Dupont' WHERE id = 1;
DELETE FROM users WHERE id = 1;

-- Jointures
SELECT u.nom, p.titre
FROM users u
INNER JOIN posts p ON p.user_id = u.id
WHERE u.age > 25
ORDER BY p.cree_le DESC;` },
      { type: 'section', title: 'Requêtes avancées' },
      { type: 'code', language: 'sql', code: `-- Agrégations
SELECT
  categorie,
  COUNT(*) AS nb_articles,
  AVG(prix) AS prix_moyen,
  MAX(prix) AS prix_max
FROM produits
GROUP BY categorie
HAVING COUNT(*) > 5
ORDER BY prix_moyen DESC;

-- Sous-requête
SELECT nom, email FROM users
WHERE id IN (
  SELECT DISTINCT user_id
  FROM commandes
  WHERE montant > 100
);

-- Window functions (PostgreSQL)
SELECT
  nom,
  salaire,
  RANK() OVER (PARTITION BY departement ORDER BY salaire DESC) AS rang,
  AVG(salaire) OVER (PARTITION BY departement) AS moy_dept
FROM employes;` },
      { type: 'section', title: 'ORM avec Prisma' },
      { type: 'code', language: 'javascript', code: `// schema.prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  nom   String
  posts Post[]
}

model Post {
  id      Int    @id @default(autoincrement())
  titre   String
  userId  Int
  user    User   @relation(fields: [userId], references: [id])
}

// Utilisation
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Créer avec relation
const user = await prisma.user.create({
  data: {
    email: 'alice@example.com',
    nom: 'Alice',
    posts: {
      create: [{ titre: 'Premier post' }]
    }
  },
  include: { posts: true }
});

// Requête complexe
const users = await prisma.user.findMany({
  where: { posts: { some: { titre: { contains: 'React' } } } },
  include: { posts: { orderBy: { createdAt: 'desc' }, take: 5 } }
});` },
      { type: 'section', title: 'Indexation et performance' },
      { type: 'list', items: [
        'Indexez les colonnes fréquemment utilisées dans WHERE, JOIN, ORDER BY',
        'Index composites pour les requêtes multi-colonnes fréquentes',
        'EXPLAIN ANALYZE pour analyser les requêtes lentes',
        'Évitez SELECT * en production — sélectionnez seulement les colonnes nécessaires',
        'N+1 problem : une requête par item dans une liste = catastrophe de performance',
        'Utilisez les includes/joins pour charger les relations en une seule requête'
      ]},
      { type: 'tip', content: 'Utilisez des migrations pour gérer les changements de schéma (Prisma Migrate, Flyway, Liquibase). Ne modifiez jamais une table de production directement — toujours via des migrations versionnées et testées.' },
      { type: 'warn', content: 'SQL Injection : ne jamais construire des requêtes par concaténation de chaînes ! Toujours utiliser des requêtes paramétrées ou un ORM. Une requête como "SELECT * FROM users WHERE id = " + userId est une faille critique.' },
      { type: 'project', title: 'Projet : API avec base de données', description: 'Créez une API blog avec Node.js + Prisma + PostgreSQL (ou SQLite) : modèles User, Post, Comment avec relations, CRUD complet, pagination, recherche full-text, et un script de seed pour les données de test.' },
    ],
    reference: [
      { type: 'section', title: 'SQL rapide' },
      { type: 'code', language: 'sql', code: `-- Structure
CREATE TABLE t (id SERIAL PRIMARY KEY, ...)
ALTER TABLE t ADD COLUMN col TYPE
DROP TABLE t

-- CRUD
INSERT INTO t (a,b) VALUES (1,'x')
SELECT a, b FROM t WHERE ... ORDER BY ... LIMIT ... OFFSET ...
UPDATE t SET a=1 WHERE ...
DELETE FROM t WHERE ...

-- Jointures
INNER JOIN  -- intersection
LEFT JOIN   -- tout de gauche + correspondances droite
RIGHT JOIN  -- tout de droite
FULL JOIN   -- tout des deux

-- Agréga
GROUP BY, HAVING, COUNT, SUM, AVG, MAX, MIN` },
    ],
    quiz: [
      { question: 'Que signifie ACID pour les transactions SQL ?', options: ['Atomicité, Cohérence, Isolation, Durabilité', 'Asynchrone, Concurrent, Indexé, Distribué', 'Agrégation, Contrainte, Index, Data'], answer: 0, explanation: 'ACID garantit la fiabilité des transactions : Atomicité (tout ou rien), Cohérence (état valide avant/après), Isolation (transactions indépendantes), Durabilité (données persistées même après crash). C\'est fondamental pour les données financières ou critiques.' },
      { question: 'Quelle est la différence entre INNER JOIN et LEFT JOIN ?', options: ['Aucune différence de résultat', 'INNER JOIN ne retourne que les lignes avec correspondance des 2 côtés, LEFT JOIN garde toutes les lignes de gauche', 'LEFT JOIN est plus lent'], answer: 1, explanation: 'INNER JOIN retourne seulement les lignes qui ont une correspondance dans les deux tables. LEFT JOIN retourne toutes les lignes de la table gauche + les correspondances droites (NULL si pas de correspondance). Utile pour trouver les éléments "sans" relation.' },
      { question: 'Qu\'est-ce que le problème N+1 en base de données ?', options: ['Une table avec N+1 colonnes', 'Exécuter 1 requête pour une liste + N requêtes pour chaque élément', 'Une erreur de syntaxe SQL'], answer: 1, explanation: 'N+1 : on fait 1 requête pour charger 100 posts, puis 100 requêtes individuelles pour charger l\'auteur de chaque post = 101 requêtes. Solution : JOIN ou include (Prisma/ORM) pour tout charger en 1-2 requêtes.' },
      { question: 'Pourquoi utiliser des requêtes paramétrées ?', options: ['Elles sont plus rapides', 'Elles empêchent les injections SQL', 'Elles permettent de cacher les données'], answer: 1, explanation: 'Les requêtes paramétrées séparent le code SQL des données. "WHERE id = $1" avec le paramètre 42 est sûr. "WHERE id = " + userInput permet à un attaquant d\'injecter du SQL arbitraire comme "1 OR 1=1" pour accéder à toutes les données.' },
      { question: 'Dans quel cas choisir Redis plutôt que PostgreSQL ?', options: ['Toujours, Redis est plus moderne', 'Pour le cache, les sessions, les données temporaires — pas pour les données persistantes critiques', 'Redis ne peut pas stocker de données'], answer: 1, explanation: 'Redis excelle pour : cache de requêtes coûteuses, sessions utilisateur, rate limiting, pub/sub temps réel. Ses données sont en mémoire (RAM) — rapide mais limité en taille. PostgreSQL est préférable pour les données métier persistantes et relationnelles.' },
    ],
  },
  {
    id: 10,
    level: 'expert',
    emoji: '🚀',
    titre: 'Performance Web',
    description: 'Core Web Vitals, optimisation, lazy loading, caching avancé.',
    content: [
      { type: 'section', title: 'Pourquoi la performance est critique' },
      { type: 'text', content: 'Google pénalise les sites lents dans son classement. Amazon a mesuré qu\'une seconde de latence supplémentaire coûte 1,6 milliard de dollars annuels. 53% des utilisateurs mobiles abandonnent si un site met plus de 3 secondes à charger.' },
      { type: 'section', title: 'Core Web Vitals (CWV)' },
      { type: 'list', items: [
        'LCP (Largest Contentful Paint) < 2.5s — temps de chargement du plus grand élément visible',
        'FID/INP (Interaction to Next Paint) < 200ms — réactivité aux interactions',
        'CLS (Cumulative Layout Shift) < 0.1 — stabilité visuelle (éviter les sauts de layout)',
        'FCP (First Contentful Paint) < 1.8s — premier contenu affiché',
        'TTFB (Time To First Byte) < 800ms — temps de réponse serveur'
      ]},
      { type: 'code', language: 'javascript', code: `// Mesurer les CWV avec la PerformanceObserver API
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('LCP:', entry.startTime, 'ms');
  }
}).observe({ entryTypes: ['largest-contentful-paint'] });

// Ou avec la bibliothèque web-vitals
import { getLCP, getFID, getCLS } from 'web-vitals';

getLCP(console.log);
getFID(console.log);
getCLS(console.log);` },
      { type: 'section', title: 'Optimisation des images' },
      { type: 'code', language: 'html', code: `<!-- Format moderne WebP/AVIF avec fallback -->
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero"
       width="1200" height="600"
       loading="lazy"
       decoding="async">
</picture>

<!-- Responsive images -->
<img
  src="small.jpg"
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 1200px"
  alt="Image responsive"
  loading="lazy">` },
      { type: 'section', title: 'Stratégies de caching' },
      { type: 'code', language: 'javascript', code: `// Service Worker — cache stratégique
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;  // Cache-first

      return fetch(event.request).then((response) => {
        const clone = response.clone();
        caches.open('v1').then((cache) => {
          cache.put(event.request, clone);
        });
        return response;
      });
    })
  );
});

// Cache HTTP côté serveur (Express)
app.use('/static', express.static('public', {
  maxAge: '1y',              // assets immuables
  immutable: true,
  etag: false,
}));

app.get('/api/data', (req, res) => {
  res.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=60');
  res.json(data);
});` },
      { type: 'tip', content: 'Utilisez Lighthouse (dans Chrome DevTools → Onglet Lighthouse) pour auditer automatiquement votre site. Il vous donne un score de 0 à 100 et des recommandations précises pour chaque problème détecté.' },
      { type: 'warn', content: 'Attention au "render-blocking" : les <script> dans <head> sans defer/async bloquent l\'affichage. Mettez les scripts non-critiques à la fin du body ou utilisez <script defer> pour charger après le parsing HTML.' },
      { type: 'project', title: 'Projet : Audit et optimisation', description: 'Prenez un site existant (le vôtre ou un site public), faites un audit Lighthouse, identifiez les 3 problèmes majeurs, et implémentez les corrections : optimisation d\'images, lazy loading, suppression du CSS inutilisé, et mise en place d\'un Service Worker de cache.' },
    ],
    reference: [
      { type: 'section', title: 'Checklist Performance' },
      { type: 'code', language: 'text', code: `Images
  [ ] Format WebP/AVIF
  [ ] Attribut loading="lazy"
  [ ] Dimensions explicites (width/height)
  [ ] Compression (TinyPNG, Squoosh)

JavaScript
  [ ] Code splitting (import dynamique)
  [ ] Tree shaking (bundler)
  [ ] Minification
  [ ] defer/async sur les scripts

CSS
  [ ] PurgeCSS (supprimer CSS inutilisé)
  [ ] Critical CSS inline
  [ ] Minification

Réseau
  [ ] Compression Gzip/Brotli
  [ ] HTTP/2 ou HTTP/3
  [ ] CDN pour les assets statiques
  [ ] Preconnect pour les domaines tiers` },
    ],
    checklist: [
      { id: 'perf-1', text: 'Toutes les images sont en WebP/AVIF avec loading="lazy"' },
      { id: 'perf-2', text: 'LCP < 2.5 secondes mesuré sur Lighthouse' },
      { id: 'perf-3', text: 'Score Lighthouse Performance > 90' },
      { id: 'perf-4', text: 'Code JavaScript splitté avec import() dynamique' },
      { id: 'perf-5', text: 'Compression Gzip/Brotli activée côté serveur' },
      { id: 'perf-6', text: 'En-têtes Cache-Control configurés correctement' },
      { id: 'perf-7', text: 'CLS < 0.1 (pas de sauts de layout)' },
      { id: 'perf-8', text: 'Aucun script render-blocking dans <head>' },
    ],
    quiz: [
      { question: 'Que mesure le LCP (Largest Contentful Paint) ?', options: ['La taille totale de la page', 'Le temps de chargement du plus grand élément visible dans le viewport', 'Le nombre de requêtes réseau'], answer: 1, explanation: 'LCP mesure quand le plus grand élément visible (souvent une image hero ou un titre) est affiché. < 2.5s = bon, 2.5-4s = à améliorer, > 4s = mauvais. C\'est un indicateur important de la perception de vitesse par l\'utilisateur.' },
      { question: 'Que fait l\'attribut "loading=lazy" sur une image ?', options: ['Compresse l\'image automatiquement', 'Charge l\'image seulement quand elle entre dans le viewport', 'Cache l\'image dans le Service Worker'], answer: 1, explanation: 'loading="lazy" reporte le chargement de l\'image jusqu\'à ce qu\'elle soit proche du viewport. Cela réduit la quantité de données téléchargées au chargement initial, améliorant le LCP et économisant la bande passante mobile.' },
      { question: 'Pourquoi utiliser <script defer> plutôt que <script> dans le <head> ?', options: ['defer rend le script plus rapide', 'defer charge le script sans bloquer le parsing HTML, exécution après le DOM', 'Cela n\'a aucun impact'], answer: 1, explanation: 'Sans defer, un <script> dans <head> bloque le parsing HTML jusqu\'à son téléchargement + exécution. defer télécharge en parallèle sans bloquer, puis exécute après que le DOM est construit. async télécharge en parallèle et exécute dès que disponible (peut couper le parsing).' },
      { question: 'Qu\'est-ce que le CLS (Cumulative Layout Shift) ?', options: ['La vitesse de chargement des CSS', 'Une mesure de la stabilité visuelle — les éléments qui "bougent" après le chargement', 'Le nombre de changements de couleur'], answer: 1, explanation: 'CLS mesure combien d\'éléments bougent inopinément pendant le chargement (une image sans dimensions réservées qui repousse le texte). < 0.1 = bon. Causé par : images sans width/height, fonts web, iframes, publicités chargées dynamiquement.' },
      { question: 'Quelle stratégie de cache Service Worker convient aux assets statiques immuables ?', options: ['Network-first (réseau en priorité)', 'Cache-first (cache en priorité, réseau en fallback)', 'Stale-while-revalidate'], answer: 1, explanation: 'Pour les assets immuables (CSS/JS versionnés avec hash dans le nom), Cache-first est optimal : on répond instantanément depuis le cache. Stale-while-revalidate convient aux API : on répond depuis le cache ET on met à jour en arrière-plan.' },
    ],
  },
  {
    id: 11,
    level: 'expert',
    emoji: '🔒',
    titre: 'Sécurité Web',
    description: 'OWASP Top 10, XSS, CSRF, injections, authentification sécurisée.',
    content: [
      { type: 'section', title: 'OWASP Top 10 : les failles les plus critiques' },
      { type: 'text', content: 'OWASP (Open Web Application Security Project) publie une liste des 10 failles de sécurité web les plus critiques. Les connaître est essentiel pour tout développeur.' },
      { type: 'list', items: [
        'A01 : Broken Access Control — contrôle d\'accès insuffisant',
        'A02 : Cryptographic Failures — mauvaise gestion des données sensibles',
        'A03 : Injection — SQL, NoSQL, LDAP, commandes OS',
        'A04 : Insecure Design — architecture fondamentalement non sécurisée',
        'A05 : Security Misconfiguration — configuration par défaut non sécurisée',
        'A06 : Vulnerable Components — dépendances avec vulnérabilités connues',
        'A07 : Auth Failures — mauvaise gestion des identités et sessions',
        'A08 : Software and Data Integrity Failures — CI/CD non sécurisé',
        'A09 : Security Logging Failures — logs insuffisants',
        'A10 : SSRF — Server-Side Request Forgery'
      ]},
      { type: 'section', title: 'XSS et protection' },
      { type: 'code', language: 'javascript', code: `// ❌ VULNÉRABLE : injection HTML directe
element.innerHTML = userInput;
document.write(userInput);

// ✅ SÛR : escape ou textContent
element.textContent = userInput;

// ✅ SÛR : sanitisation avec DOMPurify
import DOMPurify from 'dompurify';
element.innerHTML = DOMPurify.sanitize(userInput);

// Content Security Policy (en-tête HTTP)
// Bloque l'exécution de scripts non approuvés
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-{RANDOM}';
  style-src 'self' fonts.googleapis.com;
  img-src 'self' data: https:;` },
      { type: 'section', title: 'SQL Injection et protection' },
      { type: 'code', language: 'javascript', code: `// ❌ VULNÉRABLE : concaténation
const query = "SELECT * FROM users WHERE email = '" + email + "'";
// Attaque : email = "'; DROP TABLE users; --"

// ✅ SÛR : requêtes paramétrées (node-postgres)
const { rows } = await pool.query(
  'SELECT * FROM users WHERE email = $1',
  [email]
);

// ✅ SÛR : ORM (Prisma)
const user = await prisma.user.findUnique({
  where: { email }  // automatiquement paramétré
});` },
      { type: 'section', title: 'Authentification sécurisée' },
      { type: 'code', language: 'javascript', code: `import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Hachage du mot de passe (jamais en clair)
const SALT_ROUNDS = 12;
const hash = await bcrypt.hash(password, SALT_ROUNDS);
const valid = await bcrypt.compare(password, hash);

// JWT : courte durée + refresh token
const accessToken = jwt.sign(
  { userId: user.id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '15m' }  // court !
);

const refreshToken = jwt.sign(
  { userId: user.id },
  process.env.REFRESH_SECRET,
  { expiresIn: '7d' }
);

// Stocker le refresh token côté serveur (DB) pour pouvoir le révoquer
await saveRefreshToken(user.id, refreshToken);` },
      { type: 'section', title: 'En-têtes de sécurité HTTP' },
      { type: 'code', language: 'javascript', code: `// Avec Helmet.js (Express)
import helmet from 'helmet';
app.use(helmet());

// Ce que Helmet configure automatiquement :
// Strict-Transport-Security — force HTTPS
// X-Content-Type-Options: nosniff — empêche MIME sniffing
// X-Frame-Options: DENY — empêche le clickjacking
// Referrer-Policy — contrôle les infos de référent
// Content-Security-Policy — (à configurer manuellement)

// Rate limiting contre les attaques brute-force
import rateLimit from 'express-rate-limit';
app.use('/auth', rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 5,                      // 5 tentatives max
  message: 'Trop de tentatives, réessayez dans 15 minutes'
}));` },
      { type: 'tip', content: 'Auditez régulièrement vos dépendances : npm audit (Node.js), pip-audit (Python). Les failles dans les dépendances (comme Log4Shell) sont souvent plus dangereuses que les bugs dans votre propre code.' },
      { type: 'warn', content: 'Ne stockez jamais les mots de passe en clair ni en MD5/SHA1 (trop rapides à brute-forcer). Utilisez uniquement bcrypt, Argon2, ou scrypt — ils sont intentionnellement lents et résistants aux GPUs.' },
      { type: 'project', title: 'Projet : Audit de sécurité', description: 'Prenez une application web existante (la vôtre) et effectuez un audit : testez les injections avec des inputs malveillants, vérifiez les en-têtes HTTP avec securityheaders.com, auditez les dépendances (npm audit), et implémentez Helmet.js + rate limiting.' },
    ],
    reference: [
      { type: 'section', title: 'Checklist sécurité' },
      { type: 'code', language: 'text', code: `Authentification
  [ ] Mots de passe hachés avec bcrypt (cost ≥ 12)
  [ ] Tokens JWT à courte durée (15min)
  [ ] Rate limiting sur les endpoints d'auth
  [ ] 2FA pour les comptes sensibles

Données
  [ ] Requêtes SQL paramétrées / ORM
  [ ] Validation côté serveur de toutes les entrées
  [ ] Jamais de secrets dans le code/git

Frontend
  [ ] innerHTML remplacé par textContent ou DOMPurify
  [ ] Content-Security-Policy configuré
  [ ] Cookies avec Secure + HttpOnly + SameSite

Infrastructure
  [ ] En-têtes sécurité avec Helmet
  [ ] HTTPS obligatoire
  [ ] npm audit régulier
  [ ] Logs de sécurité actifs` },
    ],
    checklist: [
      { id: 'sec-1', text: 'Mots de passe hachés avec bcrypt (cost ≥ 12) — jamais en clair' },
      { id: 'sec-2', text: 'Toutes les requêtes SQL utilisent des requêtes paramétrées' },
      { id: 'sec-3', text: 'Aucun innerHTML avec des données utilisateur non sanitisées' },
      { id: 'sec-4', text: 'En-têtes de sécurité configurés (Helmet ou équivalent)' },
      { id: 'sec-5', text: 'Rate limiting sur les endpoints d\'authentification' },
      { id: 'sec-6', text: 'npm audit sans vulnérabilités critiques/hautes' },
      { id: 'sec-7', text: 'Tokens JWT avec expiration courte + refresh token' },
      { id: 'sec-8', text: 'Variables d\'environnement pour TOUS les secrets' },
    ],
    quiz: [
      { question: 'Qu\'est-ce qu\'une attaque XSS (Cross-Site Scripting) ?', options: ['Un virus qui infecte le serveur', 'L\'injection de code JavaScript malveillant dans une page vue par d\'autres utilisateurs', 'Une attaque sur le réseau DNS'], answer: 1, explanation: 'XSS permet d\'injecter du code JavaScript dans une page web consultée par d\'autres. Si le site affiche directement le commentaire d\'un utilisateur sans l\'échapper, un attaquant peut y mettre <script>volerCookies()</script> et compromettre tous les visiteurs.' },
      { question: 'Pourquoi ne pas utiliser MD5 pour hacher les mots de passe ?', options: ['MD5 ne supporte que les chiffres', 'MD5 est trop rapide, permettant des milliards de tentatives par seconde par GPU', 'MD5 produit des hachages trop longs'], answer: 1, explanation: 'Un GPU moderne peut tester 10 milliards de MD5 par seconde. bcrypt avec cost=12 ne permet que ~200 tentatives/seconde sur le même GPU. Cette lenteur intentionnelle rend le brute-force pratiquement impossible.' },
      { question: 'Qu\'est-ce qu\'une injection SQL ?', options: ['Un bug de performance dans les requêtes SQL', 'L\'insertion de code SQL malveillant via des entrées non validées pour manipuler la DB', 'Un problème de connexion à la base de données'], answer: 1, explanation: 'SQL injection : si email = "a\' OR \'1\'=\'1", la requête "WHERE email = \'a\' OR \'1\'=\'1\'" retourne tous les utilisateurs. Un attaquant peut lire, modifier, ou supprimer toutes vos données. Solution : requêtes paramétrées TOUJOURS.' },
      { question: 'À quoi sert un Content Security Policy (CSP) ?', options: ['À gérer les droits d\'accès aux fichiers', 'À spécifier les sources autorisées pour les scripts, styles et médias — empêche XSS', 'À chiffrer le contenu des pages'], answer: 1, explanation: 'CSP est un en-tête HTTP qui dit au navigateur "n\'exécute que les scripts venant de ces domaines". Un attaquant qui injecte <script src="evil.com/steal.js"> voit son script bloqué car evil.com n\'est pas dans la liste blanche.' },
      { question: 'Que fait l\'attribut HttpOnly sur un cookie ?', options: ['Il chiffre le contenu du cookie', 'Il empêche JavaScript d\'accéder au cookie, protégeant contre les vol via XSS', 'Il rend le cookie valable seulement en HTTP'], answer: 1, explanation: 'HttpOnly empêche document.cookie de lire ce cookie. Même si un attaquant réussit une injection XSS, il ne peut pas voler le cookie de session. À combiner avec Secure (HTTPS uniquement) et SameSite=Strict (protection CSRF).' },
    ],
  },
  {
    id: 12,
    level: 'expert',
    emoji: '⚙️',
    titre: 'DevOps',
    description: 'Docker, CI/CD, déploiement, monitoring, infrastructure as code.',
    content: [
      { type: 'section', title: 'DevOps : le mariage du Dev et des Ops' },
      { type: 'text', content: 'DevOps est une culture et un ensemble de pratiques qui raccourcissent le cycle de développement en automatisant le build, les tests et le déploiement. L\'objectif : livrer des logiciels plus rapidement et de manière plus fiable.' },
      { type: 'list', items: [
        'CI (Continuous Integration) : chaque commit déclenche build + tests automatiques',
        'CD (Continuous Deployment) : chaque commit validé part en production automatiquement',
        'Infrastructure as Code : votre infrastructure versionnée et reproductible',
        'Monitoring : mesurer le comportement réel en production',
        'Tout automatiser : zéro action manuelle sur les serveurs de prod'
      ]},
      { type: 'section', title: 'Docker : containeriser une application' },
      { type: 'code', language: 'dockerfile', code: `# Dockerfile multi-stage (optimisé)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Utilisateur non-root pour la sécurité
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000
CMD ["node", "src/server.js"]` },
      { type: 'code', language: 'yaml', code: `# docker-compose.yml
version: '3.9'
services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
    depends_on:
      db:
        condition: service_healthy
    restart: unless-stopped

  db:
    image: postgres:16-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: user
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d mydb"]
      interval: 10s

volumes:
  postgres_data:` },
      { type: 'section', title: 'CI/CD avec GitHub Actions' },
      { type: 'code', language: 'yaml', code: `# .github/workflows/deploy.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm test -- --coverage

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to Railway
        run: |
          curl -X POST "\${{ secrets.DEPLOY_WEBHOOK }}"` },
      { type: 'section', title: 'Monitoring et observabilité' },
      { type: 'list', items: [
        'Logs structurés (JSON) : facilite la recherche et l\'analyse (winston, pino)',
        'Métriques : CPU, mémoire, requêtes/seconde, taux d\'erreur, latence p99',
        'Traces distribuées : suivre une requête à travers plusieurs services',
        'Alertes : notification immédiate si taux d\'erreur > seuil, latence élevée',
        'Outils : Datadog, Grafana + Prometheus, Sentry (erreurs), Uptime Robot'
      ]},
      { type: 'code', language: 'javascript', code: `// Logging structuré avec pino
import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  formatters: {
    level: (label) => ({ level: label }),
  },
});

// Middleware de logging Express
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    logger.info({
      method: req.method,
      url: req.url,
      status: res.statusCode,
      duration: Date.now() - start,
      userAgent: req.get('user-agent'),
    });
  });
  next();
});` },
      { type: 'tip', content: 'Adoptez la règle des "12 Factor App" (12factor.net) pour créer des applications cloud-native : configuration par variables d\'environnement, logs vers stdout, processus stateless, dépendances déclarées explicitement.' },
      { type: 'warn', content: 'Ne jamais exécuter des containers Docker en root ! Créez un utilisateur dédié avec les droits minimaux. Un container compromis en root peut potentiellement s\'échapper et compromettre l\'hôte. Utilisez aussi --read-only et --no-new-privileges.' },
      { type: 'project', title: 'Projet : Pipeline CI/CD complet', description: 'Prenez une application Node.js, créez un Dockerfile multi-stage optimisé, un docker-compose pour le dev local avec la base de données, et un GitHub Actions workflow qui : lint → test → build image Docker → push sur Docker Hub → déploiement automatique.' },
    ],
    reference: [
      { type: 'section', title: 'Commandes Docker essentielles' },
      { type: 'code', language: 'bash', code: `# Build et run
docker build -t mon-app:latest .
docker run -p 3000:3000 --env-file .env mon-app

# Compose
docker compose up -d
docker compose down
docker compose logs -f api

# Inspecter
docker ps
docker logs <container>
docker exec -it <container> sh
docker stats

# Nettoyer
docker system prune -a
docker volume prune` },
    ],
    checklist: [
      { id: 'devops-1', text: 'Dockerfile multi-stage avec utilisateur non-root' },
      { id: 'devops-2', text: 'Pipeline CI qui bloque le merge si les tests échouent' },
      { id: 'devops-3', text: 'Variables d\'environnement via secrets CI, pas hardcodées' },
      { id: 'devops-4', text: 'Logs structurés (JSON) en production' },
      { id: 'devops-5', text: 'Health check endpoint (/health) sur l\'API' },
      { id: 'devops-6', text: 'Alertes configurées sur le taux d\'erreur et la latence' },
      { id: 'devops-7', text: 'Images Docker sans vulnérabilités critiques (docker scout)' },
      { id: 'devops-8', text: 'Déploiement zero-downtime (rolling update ou blue-green)' },
    ],
    quiz: [
      { question: 'Quelle est la différence entre CI et CD ?', options: ['Ce sont deux mots pour la même chose', 'CI automatise le build+tests, CD automatise le déploiement des versions validées', 'CD est plus lent que CI'], answer: 1, explanation: 'CI (Continuous Integration) : chaque commit déclenche automatiquement les tests. L\'objectif est de détecter les régressions rapidement. CD (Continuous Deployment/Delivery) : les builds CI réussis sont déployés automatiquement en production (Deployment) ou mis à disposition (Delivery).' },
      { question: 'Pourquoi utiliser Docker ?', options: ['Docker rend le code plus rapide', 'Il crée un environnement isolé et reproductible — "ça marche sur ma machine" disparaît', 'Docker remplace Node.js'], answer: 1, explanation: 'Docker empaquette l\'application et toutes ses dépendances dans un container. Le même container tourne identiquement en dev, en CI et en prod. Fini le syndrome "ça marche sur ma machine mais pas en prod".' },
      { question: 'Qu\'est-ce qu\'un build Docker multi-stage ?', options: ['Un Dockerfile avec plusieurs FROM, réduisant la taille de l\'image finale', 'Un build qui s\'exécute sur plusieurs machines en parallèle', 'Un Dockerfile avec des if/else'], answer: 0, explanation: 'Un build multi-stage utilise plusieurs FROM dans un Dockerfile. Les stages intermédiaires compilent/construisent le projet. Le stage final copie seulement les artefacts nécessaires — sans les outils de build (compilateur, tests). Résultat : images 10x plus petites.' },
      { question: 'Pourquoi les logs en production doivent-ils être en JSON ?', options: ['JSON est plus compact que le texte', 'Les logs JSON sont facilement parsables par les outils de monitoring (Datadog, ELK)', 'JSON est obligatoire pour Docker'], answer: 1, explanation: 'Les logs JSON structurés permettent aux outils de monitoring de filtrer, agréger et alerter sur des champs spécifiques (status, userId, duration). Un log texte "Error: user 42 not found" est illisible pour une machine ; {"level":"error","userId":42,"message":"not found"} est traitable.' },
      { question: 'Qu\'est-ce qu\'un "health check" d\'application ?', options: ['Une vérification manuelle par l\'équipe', 'Un endpoint /health qui retourne l\'état de l\'app — utilisé par l\'orchestrateur pour redémarrer si nécessaire', 'Un audit de sécurité automatique'], answer: 1, explanation: 'Un health check endpoint (GET /health) retourne 200 si l\'app est opérationnelle (DB connectée, mémoire OK) ou 503 si elle est en mauvais état. Kubernetes, Docker Compose et les load balancers utilisent ce check pour rediriger le trafic et redémarrer automatiquement les instances défaillantes.' },
    ],
  },
];

export const TOTAL_MAX_SCORE = MODULES.reduce((acc, m) => {
  const level = LEVELS[m.level];
  const quizPts = m.quiz.length * 10;
  return acc + level.pts + quizPts;
}, 0);
