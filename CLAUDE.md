# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Présentation du projet

Site web statique d'un cours interactif en français pour apprendre HTML et JavaScript aux débutants. Aucun outil de build, aucun framework, aucune dépendance npm — les fichiers s'ouvrent directement dans un navigateur.

## Lancer le projet

```bash
# Option 1 — Python (disponible partout)
python3 -m http.server 8080

# Option 2 — Node.js
npx serve .
```

Ouvrir ensuite `http://localhost:8080` dans le navigateur. Il n'y a pas de compilation, de lint ou de suite de tests.

## Architecture

```
index.html      # Page d'accueil : liste des leçons + barre de progression
lecon.html      # Page de leçon : instructions | éditeur | aperçu (3 colonnes)
css/style.css   # Tous les styles des deux pages
js/lecons.js    # Contenu du cours : tableau global LECONS
js/app.js       # Logique de la page de leçon
```

### Flux de données

1. `lecons.js` est chargé en premier et expose le tableau global `LECONS`.
2. La navigation entre leçons se fait via le paramètre d'URL `?id=N`.
3. La progression est persistée dans le `localStorage` sous la clé `cours_progression` (objet `{ [id]: true }`).
4. L'aperçu en direct utilise `<iframe srcdoc>` — le code de l'éditeur est injecté directement.
5. CodeMirror 5 est chargé depuis un CDN (pas de dépendance locale).

### Structure d'un objet leçon (`LECONS`)

```js
{
  id: 1,                  // Identifiant unique (entier séquentiel)
  module: 1,              // Numéro de module
  moduleNom: "Module 1 — HTML",
  titre: "...",
  type: "html",
  explication: `...`,     // HTML affiché dans la colonne Instructions
  codeDepart: `...`,      // Code initial chargé dans l'éditeur
  solution: `...`,        // Code affiché si l'élève demande la solution
  valider: (code) => ({ ok: boolean, message: string })  // Validation par regex
}
```

### Ajouter une leçon

Ajouter un objet dans le tableau `LECONS` de `js/lecons.js` en respectant la structure ci-dessus. L'`id` doit être unique et séquentiel. La page d'accueil et la sidebar se mettent à jour automatiquement.

### Validation

La fonction `valider(code)` reçoit le code HTML saisi par l'élève (chaîne brute) et retourne `{ ok, message }`. Les validations utilisent des regex sur le code source — garder les tests simples et indulgents (ne pas être trop strict sur la syntaxe exacte).

## Conventions

- Tout le contenu utilisateur (instructions, messages de feedback, titres) est en **français**.
- Le CSS utilise des **variables CSS** (`:root`) pour les couleurs — ne pas écrire de valeurs hexadécimales en dur, utiliser les variables existantes.
- La page de leçon est en `overflow: hidden` avec un layout `grid` fixe — toute modification du CSS doit préserver le rendu sans défilement de la page principale.
