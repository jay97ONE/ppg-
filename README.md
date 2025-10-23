# 🌴 Papillon Guadeloupe SASU - Site Web Officiel

Site web professionnel de **PAPILLON GUADELOUPE SASU**, entreprise spécialisée dans l'architecture paysagère et la création de jardins d'exception en Guadeloupe.

> **Architecte paysagiste de jardins d'exception**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8.svg)](https://tailwindcss.com/)

---

## 📋 À Propos

**PAPILLON GUADELOUPE SASU** est une entreprise paysagiste implantée en Guadeloupe, spécialisée dans :

- 🏡 **Conception de jardins sur mesure** pour particuliers et professionnels
- 🎨 **Visualisation 3D** de vos projets avant réalisation
- 📐 **Plans techniques détaillés** et accompagnement complet
- 🌺 **Expertise des aménagements tropicaux** adaptés au climat guadeloupéen
- 🚜 **Location de matériel** (motoculteur)
- 🌿 **Entretien paysager** régulier et ponctuel

### Informations Légales

- **Raison sociale** : PAPILLON GUADELOUPE SASU
- **SIRET** : 830 230 603 00011
- **Email** : papillonguadeloupe1@gmail.com
- **Localisation** : Guadeloupe, France

---

## 🚀 Technologies Utilisées

### Frontend
- **React 18.3** - Framework JavaScript
- **TypeScript 5.3** - Typage statique
- **Vite 5.1** - Build tool ultra-rapide
- **React Router 6** - Navigation multi-pages

### Styling
- **Tailwind CSS 4.0** - Framework CSS utility-first
- **Motion/React 11** - Animations fluides
- **Shadcn/UI** - Composants UI modernes

### Fonctionnalités
- **Responsive Design** - Adapté mobile, tablette, desktop
- **Animations fluides** - Expérience utilisateur premium
- **Galerie interactive** - Modal plein écran pour images/vidéos
- **Formulaires de contact** - Validation et notifications
- **SEO optimisé** - Sitemap, robots.txt, meta tags

---

## 📦 Installation Locale

### Prérequis

- **Node.js** 18+ ([Télécharger](https://nodejs.org/))
- **npm** ou **yarn**

### Étapes d'installation

```bash
# 1. Cloner le repository
git clone https://github.com/VOTRE_USERNAME/papillon-guadeloupe.git

# 2. Accéder au dossier
cd papillon-guadeloupe

# 3. Installer les dépendances
npm install

# 4. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur : **http://localhost:5173**

---

## 🛠️ Scripts Disponibles

```bash
# Développement (avec hot reload)
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview

# Linter TypeScript
npm run lint
```

---

## 📁 Structure du Projet

```
papillon-guadeloupe/
├── public/                  # Fichiers statiques
│   ├── images/             # Images du site
│   ├── sitemap.xml         # Plan du site
│   ├── robots.txt          # Configuration SEO
│   └── manifest.json       # PWA manifest
│
├── components/             # Composants React réutilisables
│   ├── ui/                 # Composants Shadcn/UI
│   ├── BackButton.tsx      # Bouton retour
│   ├── ImageConfig.tsx     # Configuration des médias
│   ├── Layout.tsx          # Layout principal
│   ├── ScrollToTop.tsx     # Scroll automatique
│   └── VideoPlayer.tsx     # Lecteur vidéo
│
├── pages/                  # Pages du site
│   ├── Home.tsx           # Page d'accueil
│   ├── Services.tsx       # Services proposés
│   ├── Realisations.tsx   # Portfolio de projets
│   ├── Galerie.tsx        # Galerie photos/vidéos
│   ├── Contact.tsx        # Formulaire de contact
│   ├── About.tsx          # À propos
│   ├── FAQ.tsx            # Questions fréquentes
│   ├── Processus.tsx      # Méthodologie
│   ├── EntretienPaysager.tsx
│   ├── LocationMotoculteur.tsx
│   ├── MentionsLegales.tsx
│   └── NotFound.tsx       # Page 404
│
├── styles/
│   └── globals.css        # Styles globaux + Tailwind
│
├── App.tsx                # Composant principal + Router
├── main.tsx               # Point d'entrée
├── vite.config.ts         # Configuration Vite
├── tsconfig.json          # Configuration TypeScript
└── package.json           # Dépendances
```

---

## 🌐 Déploiement

### Option 1 : Vercel (Recommandé ⭐)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. **Connectez votre repository GitHub** à Vercel
2. Vercel détecte automatiquement la configuration Vite
3. Cliquez sur **"Deploy"**
4. Votre site est en ligne en 2 minutes !

**Configuration Vercel :**
- **Build Command** : `npm run build`
- **Output Directory** : `dist`
- **Install Command** : `npm install`

### Option 2 : Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. **Connectez votre repository GitHub** à Netlify
2. Configuration automatique détectée
3. Déploiement en un clic

**Configuration Netlify :**
- **Build command** : `npm run build`
- **Publish directory** : `dist`

### Option 3 : Build Manuel

```bash
# Créer le build de production
npm run build

# Le dossier 'dist/' contient le site prêt à déployer
# Uploadez ce dossier sur n'importe quel hébergeur statique
```

---

## 🔧 Configuration

### Images et Médias

Toutes les URLs d'images et vidéos sont centralisées dans :
```
/components/ImageConfig.tsx
```

Pour modifier les images, éditez ce fichier avec vos propres URLs (Unsplash, hébergement personnel, etc.).

### Informations de Contact

Modifiez les informations dans :
- `/pages/Contact.tsx` - Formulaire et coordonnées
- `/pages/MentionsLegales.tsx` - Informations légales
- `/components/Layout.tsx` - Footer

---

## 📱 Pages Disponibles

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Page d'accueil avec hero et présentation |
| `/services` | Services | Catalogue de services |
| `/realisations` | Réalisations | Portfolio de projets |
| `/galerie` | Galerie | Photos et vidéos |
| `/processus` | Processus | Méthodologie de travail |
| `/contact` | Contact | Formulaire de contact |
| `/a-propos` | À Propos | Histoire et équipe |
| `/faq` | FAQ | Questions fréquentes |
| `/entretien-paysager` | Entretien | Service d'entretien |
| `/location-motoculteur` | Location | Location de matériel |
| `/mentions-legales` | Mentions | Mentions légales |
| `*` | 404 | Page non trouvée |

---

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `/styles/globals.css` :

```css
--color-primary: #10b981;    /* Vert principal */
--color-secondary: #059669;  /* Vert foncé */
--color-accent: #34d399;     /* Vert clair */
```

### Typographie

Les polices sont configurées dans `/styles/globals.css` avec Google Fonts.

---

## 📞 Contact

- **Email** : [papillonguadeloupe1@gmail.com](mailto:papillonguadeloupe1@gmail.com)
- **SIRET** : 830 230 603 00011
- **Localisation** : Guadeloupe

---

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier `LICENSE` pour plus de détails.

---

## 🙏 Remerciements

- **Unsplash** - Images gratuites de qualité
- **Shadcn/UI** - Composants UI
- **Lucide** - Icônes
- **Vercel** - Hébergement

---

## 📊 Statut du Projet

✅ **En production** - Site prêt pour le déploiement

- [x] Design responsive
- [x] Multi-pages fonctionnel
- [x] Formulaires de contact
- [x] Galerie interactive
- [x] SEO optimisé
- [x] Performance optimisée
- [x] Mentions légales conformes

---

**Créé avec ❤️ en Guadeloupe**

🌴 **PAPILLON GUADELOUPE SASU** - Architecte paysagiste de jardins d'exception
