// Contenu de toutes les leçons du cours
const LECONS = [

  // =====================================================================
  // MODULE 1 — HTML : La structure d'une page
  // =====================================================================

  {
    id: 1,
    module: 1,
    moduleNom: "Module 1 — HTML",
    titre: "Qu'est-ce qu'une page web ?",
    type: "html",
    explication: `
      <h2>Qu'est-ce qu'une page web ?</h2>
      <p>Une page web est un simple fichier texte écrit en <strong>HTML</strong>
      (HyperText Markup Language). Ton navigateur (Chrome, Firefox…) lit ce
      fichier et l'affiche à l'écran.</p>
      <p>Toute page HTML a cette <strong>structure de base</strong> :</p>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Titre de l'onglet&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    Ce que tu vois sur la page
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      <p>Les <strong>balises HTML</strong> s'écrivent entre <code>&lt;</code>
      et <code>&gt;</code>. La plupart fonctionnent par paires :</p>
      <ul>
        <li><code>&lt;body&gt;</code> &nbsp;→ ouvre la balise</li>
        <li><code>&lt;/body&gt;</code> → la ferme (remarque le <code>/</code>)</li>
      </ul>
      <p>Le contenu <em>visible</em> de ta page va entre
      <code>&lt;body&gt;</code> et <code>&lt;/body&gt;</code>.</p>
      <div class="exercice">
        <h3>🎯 Exercice</h3>
        <p>Écris un message entre les balises <code>&lt;body&gt;</code> et
        <code>&lt;/body&gt;</code>. Par exemple :</p>
        <p><strong>Bonjour, je m'appelle Marie !</strong></p>
        <p>Regarde l'aperçu à droite se mettre à jour en temps réel !</p>
      </div>
    `,
    codeDepart: `<!DOCTYPE html>
<html>
  <head>
    <title>Ma première page</title>
  </head>
  <body>
    <!-- Écris ton message ici, à la place de ce commentaire -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Ma première page</title>
  </head>
  <body>
    Bonjour, je m'appelle Marie !
  </body>
</html>`,
    valider: (code) => {
      const bodyMatch = code.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      if (!bodyMatch) return { ok: false, message: "Je ne trouve pas les balises &lt;body&gt;…&lt;/body&gt;. Vérifie ta structure HTML." };
      const content = bodyMatch[1].replace(/<!--[\s\S]*?-->/g, '').trim();
      if (!content) return { ok: false, message: "Écris quelque chose entre &lt;body&gt; et &lt;/body&gt; ! Par exemple : Bonjour !" };
      return { ok: true, message: "🎉 Bravo ! Tu viens de créer ta première page HTML !" };
    }
  },

  {
    id: 2,
    module: 1,
    moduleNom: "Module 1 — HTML",
    titre: "Titres et paragraphes",
    type: "html",
    explication: `
      <h2>Titres et paragraphes</h2>
      <p>En HTML tu peux créer des <strong>titres</strong> et des
      <strong>paragraphes</strong> facilement.</p>
      <p>Pour les <strong>titres</strong>, utilise <code>&lt;h1&gt;</code> à
      <code>&lt;h6&gt;</code> (h1 = le plus grand, h6 = le plus petit) :</p>
      <pre><code>&lt;h1&gt;Mon grand titre&lt;/h1&gt;
&lt;h2&gt;Un sous-titre&lt;/h2&gt;
&lt;h3&gt;Un sous-sous-titre&lt;/h3&gt;</code></pre>
      <p>Pour les <strong>paragraphes</strong>, utilise <code>&lt;p&gt;</code> :</p>
      <pre><code>&lt;p&gt;Voici un paragraphe de texte.&lt;/p&gt;
&lt;p&gt;Et voici un deuxième paragraphe.&lt;/p&gt;</code></pre>
      <div class="exercice">
        <h3>🎯 Exercice</h3>
        <p>Dans l'éditeur, ajoute :</p>
        <ol>
          <li>Un titre <code>&lt;h1&gt;</code> avec ton prénom</li>
          <li>Un paragraphe <code>&lt;p&gt;</code> qui te présente brièvement</li>
        </ol>
      </div>
    `,
    codeDepart: `<!DOCTYPE html>
<html>
  <head>
    <title>Mon profil</title>
  </head>
  <body>
    <!-- Ajoute ton titre h1 et ton paragraphe ici -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Mon profil</title>
  </head>
  <body>
    <h1>Marie</h1>
    <p>Bonjour ! Je m'appelle Marie et j'apprends à créer des sites web.</p>
  </body>
</html>`,
    valider: (code) => {
      const hasH1 = /<h[1-3][^>]*>[\s\S]*?<\/h[1-3]>/i.test(code);
      const hasP  = /<p[^>]*>[\s\S]*?<\/p>/i.test(code);
      if (!hasH1 && !hasP) return { ok: false, message: "Ajoute un titre &lt;h1&gt; ET un paragraphe &lt;p&gt; !" };
      if (!hasH1) return { ok: false, message: "Ajoute un titre avec &lt;h1&gt;Ton prénom&lt;/h1&gt;" };
      if (!hasP)  return { ok: false, message: "Ajoute un paragraphe avec &lt;p&gt;Ton texte&lt;/p&gt;" };
      return { ok: true, message: "🎉 Parfait ! Tu sais maintenant utiliser les titres et les paragraphes !" };
    }
  },

  {
    id: 3,
    module: 1,
    moduleNom: "Module 1 — HTML",
    titre: "Les liens",
    type: "html",
    explication: `
      <h2>Les liens hypertexte</h2>
      <p>Les liens permettent de naviguer d'une page à l'autre. En HTML, on
      les crée avec la balise <code>&lt;a&gt;</code> :</p>
      <pre><code>&lt;a href="https://www.google.com"&gt;Aller sur Google&lt;/a&gt;</code></pre>
      <p>L'attribut <code>href</code> contient l'adresse du lien (l'URL).
      Le texte entre les balises est ce que l'utilisateur voit et peut cliquer.</p>
      <p>Pour ouvrir le lien dans un <strong>nouvel onglet</strong>, ajoute
      <code>target="_blank"</code> :</p>
      <pre><code>&lt;a href="https://www.google.com" target="_blank"&gt;
  Ouvrir dans un nouvel onglet
&lt;/a&gt;</code></pre>
      <div class="exercice">
        <h3>🎯 Exercice</h3>
        <p>Ajoute un lien vers ton site préféré dans la page. Par exemple vers
        <code>https://www.youtube.com</code>. N'oublie pas l'attribut
        <code>href</code> !</p>
      </div>
    `,
    codeDepart: `<!DOCTYPE html>
<html>
  <head>
    <title>Mes liens</title>
  </head>
  <body>
    <h1>Mes sites préférés</h1>
    <!-- Ajoute un lien ici avec la balise <a> -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Mes liens</title>
  </head>
  <body>
    <h1>Mes sites préférés</h1>
    <a href="https://www.youtube.com">Aller sur YouTube</a>
  </body>
</html>`,
    valider: (code) => {
      const hasLink = /<a\s[^>]*href\s*=\s*["'][^"']+["'][^>]*>/i.test(code);
      if (!hasLink) return { ok: false, message: "Ajoute une balise &lt;a href=\"url\"&gt;texte du lien&lt;/a&gt; !" };
      return { ok: true, message: "🎉 Excellent ! Tu sais maintenant créer des liens !" };
    }
  },

  {
    id: 4,
    module: 1,
    moduleNom: "Module 1 — HTML",
    titre: "Les images",
    type: "html",
    explication: `
      <h2>Insérer des images</h2>
      <p>Pour afficher une image dans ta page, utilise la balise
      <code>&lt;img&gt;</code> :</p>
      <pre><code>&lt;img src="https://picsum.photos/300/200" alt="Une belle photo"&gt;</code></pre>
      <p>Cette balise a deux attributs importants :</p>
      <ul>
        <li><code>src</code> : l'adresse de l'image (URL ou chemin du fichier)</li>
        <li><code>alt</code> : une description de l'image (important pour l'accessibilité)</li>
      </ul>
      <p>Remarque : <code>&lt;img&gt;</code> n'a <strong>pas</strong> de balise
      fermante — c'est une balise auto-fermante.</p>
      <p>Tu peux définir la largeur avec <code>width</code> :</p>
      <pre><code>&lt;img src="photo.jpg" alt="Ma photo" width="400"&gt;</code></pre>
      <div class="exercice">
        <h3>🎯 Exercice</h3>
        <p>Ajoute une image dans la page en utilisant cette URL :<br>
        <code>https://picsum.photos/400/250</code></p>
        <p>N'oublie pas l'attribut <code>alt</code> !</p>
      </div>
    `,
    codeDepart: `<!DOCTYPE html>
<html>
  <head>
    <title>Ma galerie</title>
  </head>
  <body>
    <h1>Ma galerie photos</h1>
    <!-- Ajoute une image ici avec la balise <img> -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Ma galerie</title>
  </head>
  <body>
    <h1>Ma galerie photos</h1>
    <img src="https://picsum.photos/400/250" alt="Une belle photo">
  </body>
</html>`,
    valider: (code) => {
      const hasSrc = /<img[^>]+src\s*=\s*["'][^"']+["']/i.test(code);
      const hasAlt = /<img[^>]+alt\s*=\s*["'][^"']*["']/i.test(code);
      if (!hasSrc) return { ok: false, message: "Ajoute une balise &lt;img src=\"url\" alt=\"description\"&gt; !" };
      if (!hasAlt) return { ok: false, message: "N'oublie pas l'attribut alt ! Exemple : alt=\"Une belle photo\"" };
      return { ok: true, message: "🎉 Super ! Tu sais maintenant insérer des images !" };
    }
  },

  {
    id: 5,
    module: 1,
    moduleNom: "Module 1 — HTML",
    titre: "Les listes",
    type: "html",
    explication: `
      <h2>Créer des listes</h2>
      <p>HTML propose deux types de listes :</p>
      <p><strong>Liste non ordonnée</strong> (puces) avec <code>&lt;ul&gt;</code> :</p>
      <pre><code>&lt;ul&gt;
  &lt;li&gt;Pommes&lt;/li&gt;
  &lt;li&gt;Bananes&lt;/li&gt;
  &lt;li&gt;Cerises&lt;/li&gt;
&lt;/ul&gt;</code></pre>
      <p><strong>Liste ordonnée</strong> (numéros) avec <code>&lt;ol&gt;</code> :</p>
      <pre><code>&lt;ol&gt;
  &lt;li&gt;Premier&lt;/li&gt;
  &lt;li&gt;Deuxième&lt;/li&gt;
  &lt;li&gt;Troisième&lt;/li&gt;
&lt;/ol&gt;</code></pre>
      <p>Chaque élément de la liste utilise la balise <code>&lt;li&gt;</code>
      (list item = élément de liste).</p>
      <div class="exercice">
        <h3>🎯 Exercice</h3>
        <p>Crée une liste avec au moins <strong>3 choses que tu aimes</strong>
        (films, sports, musiques…). Utilise une liste non ordonnée
        <code>&lt;ul&gt;</code>.</p>
      </div>
    `,
    codeDepart: `<!DOCTYPE html>
<html>
  <head>
    <title>Mes préférences</title>
  </head>
  <body>
    <h1>Ce que j'aime</h1>
    <!-- Crée ta liste ici avec <ul> et <li> -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Mes préférences</title>
  </head>
  <body>
    <h1>Ce que j'aime</h1>
    <ul>
      <li>Le cinéma</li>
      <li>La musique</li>
      <li>Les voyages</li>
    </ul>
  </body>
</html>`,
    valider: (code) => {
      const hasList = /<ul[^>]*>[\s\S]*?<\/ul>/i.test(code) || /<ol[^>]*>[\s\S]*?<\/ol>/i.test(code);
      if (!hasList) return { ok: false, message: "Crée une liste avec &lt;ul&gt;…&lt;/ul&gt; et des &lt;li&gt; à l'intérieur !" };
      const liCount = (code.match(/<li/gi) || []).length;
      if (liCount < 3) return { ok: false, message: `Il te faut au moins 3 éléments &lt;li&gt;. Tu en as ${liCount} pour l'instant.` };
      return { ok: true, message: "🎉 Parfait ! Tu maîtrises les listes HTML. Module 1 terminé ! 🏆" };
    }
  },

  // =====================================================================
  // MODULE 2 — JavaScript : Rendre le site interactif
  // =====================================================================

  {
    id: 6,
    module: 2,
    moduleNom: "Module 2 — JavaScript",
    titre: "Qu'est-ce que JavaScript ?",
    type: "html",
    explication: `
      <h2>Qu'est-ce que JavaScript ?</h2>
      <p>Si HTML crée la <em>structure</em> de ta page,
      <strong>JavaScript</strong> (JS) lui donne vie ! Avec JavaScript tu peux :</p>
      <ul>
        <li>Réagir aux clics de l'utilisateur</li>
        <li>Afficher ou masquer des éléments</li>
        <li>Faire des calculs et afficher des résultats</li>
        <li>Et bien plus encore !</li>
      </ul>
      <p>Pour ajouter du JavaScript dans une page HTML, utilise la balise
      <code>&lt;script&gt;</code> :</p>
      <pre><code>&lt;script&gt;
  alert("Bonjour !");
&lt;/script&gt;</code></pre>
      <p>La fonction <code>alert()</code> affiche une petite fenêtre avec un
      message. Les guillemets autour du texte sont importants !</p>
      <div class="exercice">
        <h3>🎯 Exercice</h3>
        <p>Dans la balise <code>&lt;script&gt;</code>, utilise
        <code>alert()</code> pour afficher le message :</p>
        <p><strong>"Bonjour, je suis sur mon site !"</strong></p>
        <p><em>L'alerte apparaît dans l'aperçu à droite.</em></p>
      </div>
    `,
    codeDepart: `<!DOCTYPE html>
<html>
  <head>
    <title>Mon premier JS</title>
  </head>
  <body>
    <h1>JavaScript !</h1>

    <script>
      // Écris ton alert() ici

    </script>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Mon premier JS</title>
  </head>
  <body>
    <h1>JavaScript !</h1>

    <script>
      alert("Bonjour, je suis sur mon site !");
    </script>
  </body>
</html>`,
    valider: (code) => {
      const hasAlert = /alert\s*\(/.test(code);
      if (!hasAlert) return { ok: false, message: "Utilise alert(\"ton message\") à l'intérieur de la balise &lt;script&gt; !" };
      const alertContent = code.match(/alert\s*\(\s*["'`]([^"'`]*)["'`]\s*\)/);
      if (!alertContent || !alertContent[1].trim()) return { ok: false, message: "Mets un message entre guillemets dans ton alert() ! Ex : alert(\"Bonjour !\")" };
      return { ok: true, message: "🎉 Bravo ! Tu viens d'écrire ton premier JavaScript !" };
    }
  },

  {
    id: 7,
    module: 2,
    moduleNom: "Module 2 — JavaScript",
    titre: "Les variables",
    type: "html",
    explication: `
      <h2>Les variables</h2>
      <p>Une <strong>variable</strong>, c'est comme une boîte avec une étiquette
      où tu ranges une valeur.</p>
      <p>En JavaScript, on crée une variable avec <code>let</code> ou
      <code>const</code> :</p>
      <pre><code>let prenom = "Marie";
let age = 25;
const pays = "France";</code></pre>
      <ul>
        <li><code>let</code> : pour une valeur qui peut <em>changer</em></li>
        <li><code>const</code> : pour une valeur <em>fixe</em> qui ne change pas</li>
      </ul>
      <p>Pour afficher une variable avec <code>alert()</code>, combine du texte
      et la variable :</p>
      <pre><code>let prenom = "Marie";
alert("Bonjour " + prenom + " !");</code></pre>
      <div class="exercice">
        <h3>🎯 Exercice</h3>
        <p>Crée une variable <code>prenom</code> avec ton prénom, puis affiche-la
        avec <code>alert()</code>. Par exemple :</p>
        <p><strong>alert("Bonjour " + prenom + " !")</strong></p>
      </div>
    `,
    codeDepart: `<!DOCTYPE html>
<html>
  <head>
    <title>Les variables</title>
  </head>
  <body>
    <h1>Les variables JS</h1>

    <script>
      // Crée une variable prenom ici
      // Puis affiche-la avec alert()

    </script>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Les variables</title>
  </head>
  <body>
    <h1>Les variables JS</h1>

    <script>
      let prenom = "Marie";
      alert("Bonjour " + prenom + " !");
    </script>
  </body>
</html>`,
    valider: (code) => {
      const hasVar = /\b(let|const|var)\s+\w+\s*=/.test(code);
      if (!hasVar) return { ok: false, message: "Crée une variable avec : let prenom = \"TonPrénom\";" };
      const hasAlert = /alert\s*\(/.test(code);
      if (!hasAlert) return { ok: false, message: "Affiche ta variable avec alert() !" };
      return { ok: true, message: "🎉 Excellent ! Tu maîtrises maintenant les variables JavaScript !" };
    }
  },

  {
    id: 8,
    module: 2,
    moduleNom: "Module 2 — JavaScript",
    titre: "Les fonctions",
    type: "html",
    explication: `
      <h2>Les fonctions</h2>
      <p>Une <strong>fonction</strong>, c'est un bloc de code qu'on peut réutiliser.
      On la définit une fois et on l'appelle autant de fois qu'on veut !</p>
      <p>Pour <strong>créer</strong> une fonction :</p>
      <pre><code>function direBonjour() {
  alert("Bonjour !");
}</code></pre>
      <p>Pour <strong>appeler</strong> (exécuter) une fonction :</p>
      <pre><code>direBonjour();</code></pre>
      <p>Les fonctions peuvent aussi recevoir des <strong>paramètres</strong> :</p>
      <pre><code>function saluer(prenom) {
  alert("Bonjour " + prenom + " !");
}

saluer("Marie");  // → "Bonjour Marie !"
saluer("Paul");   // → "Bonjour Paul !"</code></pre>
      <div class="exercice">
        <h3>🎯 Exercice</h3>
        <p>Crée une fonction <code>direBonjour()</code> qui affiche un message
        de bienvenue avec <code>alert()</code>, puis <strong>appelle</strong>
        cette fonction.</p>
      </div>
    `,
    codeDepart: `<!DOCTYPE html>
<html>
  <head>
    <title>Les fonctions</title>
  </head>
  <body>
    <h1>Les fonctions JS</h1>

    <script>
      // Crée ta fonction direBonjour() ici
      // Puis appelle-la

    </script>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Les fonctions</title>
  </head>
  <body>
    <h1>Les fonctions JS</h1>

    <script>
      function direBonjour() {
        alert("Bienvenue sur mon site !");
      }

      direBonjour();
    </script>
  </body>
</html>`,
    valider: (code) => {
      const hasFunction = /\bfunction\s+\w+\s*\(/.test(code);
      if (!hasFunction) return { ok: false, message: "Crée une fonction avec : function direBonjour() { … }" };
      const hasCall = /\b\w+\s*\(\s*\)\s*;/.test(code);
      if (!hasCall) return { ok: false, message: "N'oublie pas d'appeler ta fonction ! Écris direBonjour(); après l'avoir définie." };
      return { ok: true, message: "🎉 Super ! Tu sais maintenant créer et appeler des fonctions !" };
    }
  },

  {
    id: 9,
    module: 2,
    moduleNom: "Module 2 — JavaScript",
    titre: "Modifier le HTML avec JS",
    type: "html",
    explication: `
      <h2>Modifier le HTML avec JavaScript</h2>
      <p>JavaScript peut <strong>changer le contenu</strong> de ta page en direct !
      Pour ça, on utilise <code>getElementById</code> :</p>
      <pre><code>document.getElementById("monId").innerHTML = "Nouveau texte";</code></pre>
      <p>Voici comment ça marche, étape par étape :</p>
      <ol>
        <li>Donne un <code>id</code> à un élément HTML :<br>
          <code>&lt;p id="message"&gt;Texte initial&lt;/p&gt;</code></li>
        <li>En JavaScript, sélectionne cet élément et change son contenu :<br>
          <code>document.getElementById("message").innerHTML = "Nouveau !";</code></li>
      </ol>
      <div class="exercice">
        <h3>🎯 Exercice</h3>
        <p>La page a déjà un <code>&lt;p id="resultat"&gt;</code>. Utilise
        JavaScript pour changer son texte en :</p>
        <p><strong>"JavaScript a modifié ce texte !"</strong></p>
      </div>
    `,
    codeDepart: `<!DOCTYPE html>
<html>
  <head>
    <title>Modifier le HTML</title>
  </head>
  <body>
    <h1>Modifier le HTML</h1>
    <p id="resultat">Ce texte va être modifié...</p>

    <script>
      // Utilise document.getElementById pour changer le texte du paragraphe

    </script>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Modifier le HTML</title>
  </head>
  <body>
    <h1>Modifier le HTML</h1>
    <p id="resultat">Ce texte va être modifié...</p>

    <script>
      document.getElementById("resultat").innerHTML = "JavaScript a modifié ce texte !";
    </script>
  </body>
</html>`,
    valider: (code) => {
      const hasGetById = /getElementById\s*\(/.test(code);
      if (!hasGetById) return { ok: false, message: "Utilise document.getElementById(\"resultat\") pour sélectionner l'élément !" };
      const hasContent = /innerHTML\s*=|textContent\s*=/.test(code);
      if (!hasContent) return { ok: false, message: "Utilise .innerHTML = \"nouveau texte\" pour changer le contenu !" };
      return { ok: true, message: "🎉 Excellent ! Tu peux maintenant modifier ta page avec JavaScript !" };
    }
  },

  {
    id: 10,
    module: 2,
    moduleNom: "Module 2 — JavaScript",
    titre: "Les événements (onclick)",
    type: "html",
    explication: `
      <h2>Réagir aux clics avec onclick</h2>
      <p>Les <strong>événements</strong> permettent d'exécuter du code quand
      l'utilisateur fait quelque chose. L'événement le plus courant :
      <code>onclick</code> (au clic) !</p>
      <pre><code>&lt;button onclick="maFonction()"&gt;Clique ici&lt;/button&gt;

&lt;script&gt;
  function maFonction() {
    alert("Tu as cliqué !");
  }
&lt;/script&gt;</code></pre>
      <p>Tu peux aussi changer le style avec JavaScript :</p>
      <pre><code>function changerCouleur() {
  document.getElementById("texte").style.color = "red";
}</code></pre>
      <div class="exercice">
        <h3>🎯 Exercice</h3>
        <p>Crée un bouton qui, au clic, change la couleur du titre
        <code>&lt;h1&gt;</code> en rouge. Tu as besoin de :</p>
        <ol>
          <li>Un <code>id</code> sur le titre (déjà fait : <code>id="titre"</code>)</li>
          <li>Un <code>&lt;button&gt;</code> avec <code>onclick="..."</code></li>
          <li>Une fonction JS qui change <code>.style.color</code></li>
        </ol>
      </div>
    `,
    codeDepart: `<!DOCTYPE html>
<html>
  <head>
    <title>Les événements</title>
  </head>
  <body>
    <h1 id="titre">Clique sur le bouton !</h1>

    <!-- Ajoute un bouton avec onclick ici -->

    <script>
      // Crée une fonction qui change la couleur du titre

    </script>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Les événements</title>
  </head>
  <body>
    <h1 id="titre">Clique sur le bouton !</h1>

    <button onclick="changerCouleur()">Changer la couleur</button>

    <script>
      function changerCouleur() {
        document.getElementById("titre").style.color = "red";
      }
    </script>
  </body>
</html>`,
    valider: (code) => {
      const hasOnclick = /onclick\s*=/.test(code);
      if (!hasOnclick) return { ok: false, message: "Ajoute un bouton avec onclick=\"taFonction()\" !" };
      const hasStyle = /\.style\./.test(code);
      if (!hasStyle) return { ok: false, message: "Utilise .style.color = \"red\" pour changer la couleur !" };
      return { ok: true, message: "🎉 Félicitations ! Tu as terminé le cours ! Tu es maintenant capable de créer des pages web interactives ! 🏆🎊" };
    }
  }

];
