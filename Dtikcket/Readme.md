# Dticket — Application de gestion de tickets

Dticket est une application web de **gestion de projets, clients et tickets** inspirée des outils de type Jira / GitHub Issues.  
Elle permet de centraliser les demandes clients, suivre l’avancement des tickets via un **Kanban**, et organiser le travail par projet.

---

## 🎯 Objectifs du projet

- Concevoir une interface **claire, moderne et responsive**
- Mettre en pratique :
  - HTML sémantique
  - CSS structuré (Design System)
  - JavaScript vanilla (sans framework)
- Implémenter une logique CRUD **côté front**
- Gérer correctement le **scroll**, la **responsivité** et l’accessibilité

---

## 🧱 Technologies utilisées

- **HTML5** (structure sémantique)
- **CSS3**
  - Variables CSS (Design System)
  - Grid / Flexbox
  - Responsive design
- **JavaScript Vanilla**
  - Manipulation du DOM
  - Gestion des modales
  - Ajout dynamique de données
- Aucun framework externe

---

## 🗂️ Structure du projet

# Dticket — Application de gestion de tickets

Dticket est une application web de **gestion de projets, clients et tickets** inspirée des outils de type Jira / GitHub Issues.  
Elle permet de centraliser les demandes clients, suivre l’avancement des tickets via un **Kanban**, et organiser le travail par projet.

---

## 🎯 Objectifs du projet

- Concevoir une interface **claire, moderne et responsive**
- Mettre en pratique :
  - HTML sémantique
  - CSS structuré (Design System)
  - JavaScript vanilla (sans framework)
- Implémenter une logique CRUD **côté front**
- Gérer correctement le **scroll**, la **responsivité** et l’accessibilité

---

## 🧱 Technologies utilisées

- **HTML5** (structure sémantique)
- **CSS3**
  - Variables CSS (Design System)
  - Grid / Flexbox
  - Responsive design
- **JavaScript Vanilla**
  - Manipulation du DOM
  - Gestion des modales
  - Ajout dynamique de données
- Aucun framework externe

---

## 🗂️ Structure du projet
# Dticket — Application de gestion de tickets

Dticket est une application web de **gestion de projets, clients et tickets** inspirée des outils de type Jira / GitHub Issues.  
Elle permet de centraliser les demandes clients, suivre l’avancement des tickets via un **Kanban**, et organiser le travail par projet.

---

## 🎯 Objectifs du projet

- Concevoir une interface **claire, moderne et responsive**
- Mettre en pratique :
  - HTML sémantique
  - CSS structuré (Design System)
  - JavaScript vanilla (sans framework)
- Implémenter une logique CRUD **côté front**
- Gérer correctement le **scroll**, la **responsivité** et l’accessibilité

---

## 🧱 Technologies utilisées

- **HTML5** (structure sémantique)
- **CSS3**
  - Variables CSS (Design System)
  - Grid / Flexbox
  - Responsive design
- **JavaScript Vanilla**
  - Manipulation du DOM
  - Gestion des modales
  - Ajout dynamique de données
- Aucun framework externe

---

## 🗂️ Structure du projet
/dticket
│
├── dashboard.html
├── projects.html
├── project_detail.html
├── tickets.html
├── ticket_detail.html
├── clients.html
├── settings.html
│
├── style.css
│
├── tickets.js
├── clients.js
├── projects.js
│
└── README.md


---

## 🧩 Pages principales

### 📊 Dashboard
- Vue globale de l’activité
- Statistiques rapides
- Accès aux projets et clients

---

### 📁 Projets
- Liste des projets
- Cartes avec progression
- Accès au détail d’un projet

---

### 📄 Détail d’un projet
- Informations générales
- Statistiques (tickets, progression, heures)
- Liste des tickets du projet
- Scroll limité uniquement à la liste des tickets

---

### 🎫 Tickets (Kanban)
- Vue Kanban :
  - Nouveau
  - En cours
  - À valider
  - Terminé
- Recherche de tickets
- Création de ticket via **modal**
- Scroll horizontal du board uniquement

---

### 📝 Détail d’un ticket
- Description complète
- Métadonnées (priorité, projet, date)
- Checklist
- Historique / commentaires
- Ajout de commentaires

---

### 👥 Clients
- Liste des clients
- Recherche simple
- Statistiques :
  - Total clients
  - Demandes en attente
- Ajout de client via modal
- **Scroll uniquement sur la liste**

---

### ⚙️ Paramètres
- Gestion des identifiants
- Notifications
- Sécurité
- Aucune zone scroll inutile (tout tient à l’écran)

---

## 🧠 Fonctionnement JavaScript

### Utilitaires
```js
function $(id) {
  return document.getElementById(id);
}
``` 
### Sécurite minimale 
function escapeHtml(str) { ... }

### 🚀 Améliorations possibles

Stockage des données (LocalStorage / API)
Drag & drop des tickets
Authentification réelle
Rôles utilisateurs
Backend (php voir le repository Dticket/php )