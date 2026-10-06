<div align="center">

# SaadiBou Restaurant

**Application web MERN de commande de repas en ligne, avec panneau d'administration**

![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-API-000000?logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-Vite-61DAFB?logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=nodedotjs&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-Paiement-635BFF?logo=stripe&logoColor=white)

</div>

---

## À propos

**SaadiBou Restaurant** est une application full stack permettant aux clients de parcourir le menu, composer leur panier et passer commande en ligne. Un panneau d'administration dédié permet au restaurant de gérer les plats et de suivre les commandes.

Le projet est composé de trois applications indépendantes :

| Application | Rôle | Technologies |
|---|---|---|
| `frontend/` | Site client | React, Vite, Context API |
| `admin/` | Panneau d'administration | React, Vite |
| `backend/` | API REST | Node.js, Express, MongoDB |

## Fonctionnalités

### Côté client
- Parcours du menu avec filtre par catégorie
- Inscription et connexion sécurisées (JWT)
- Panier dynamique (ajout, suppression, total)
- Passage de commande avec adresse de livraison
- Paiement en ligne et vérification du paiement
- Historique et suivi des commandes

### Côté administration
- Ajout de plats avec upload d'image
- Liste des plats et suppression
- Consultation de toutes les commandes
- Mise à jour du statut des commandes

## Stack technique

- **Frontend** : React, Vite, React Router, Axios, Context API
- **Admin** : React, Vite
- **Backend** : Node.js, Express, Mongoose
- **Base de données** : MongoDB Atlas
- **Authentification** : JSON Web Token, bcrypt
- **Upload d'images** : Multer
- **Paiement** : Stripe

## Structure du projet

```
SaadiBou-Restaurant/
├── frontend/             # Site client
│   └── src/
│       ├── components/   # Navbar, Header, ExploreMenu, FoodDisplay, Footer...
│       ├── pages/        # Home, Cart, PlaceOrder, MyOrders, Verify
│       ├── context/      # StoreContext (état global)
│       └── assets/
├── admin/                # Panneau d'administration
│   └── src/
│       ├── components/   # Navbar, Sidebar
│       └── pages/        # Add, List, Orders
└── backend/              # API REST
    ├── config/           # Connexion MongoDB
    ├── controllers/      # cart, food, order, user
    ├── middleware/       # Authentification JWT
    ├── models/           # foodModel, orderModel, userModel
    ├── routes/           # cartRoute, foodRoute, orderRoute, userRoute
    ├── uploads/          # Images des plats
    └── server.js
```

## Installation

### Prérequis

- [Node.js](https://nodejs.org/) 18 ou plus
- Un compte [MongoDB Atlas](https://www.mongodb.com/atlas) (ou MongoDB local)
- Un compte [Stripe](https://stripe.com/) en mode test (pour le paiement)

### 1. Cloner le dépôt

```bash
git clone https://github.com/nourelhoudaachour2/SaadiBou-Restaurant.git
cd SaadiBou-Restaurant
```

### 2. Configurer le backend

Créer le fichier `backend/.env` :

```env
MONGO_URL=votre_chaine_de_connexion_mongodb
JWT_SECRET=une_chaine_secrete_longue
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxx
```

> Le fichier `.env` n'est jamais versionné. Ne publiez jamais vos clés.

### 3. Installer les dépendances

```bash
cd backend && npm install && cd ..
cd frontend && npm install && cd ..
cd admin && npm install && cd ..
```

### 4. Lancer l'application

Ouvrir trois terminaux :

```bash
# Terminal 1 : API
cd backend
npm run server

# Terminal 2 : site client
cd frontend
npm run dev

# Terminal 3 : administration
cd admin
npm run dev
```

| Service | URL par défaut |
|---|---|
| API | http://localhost:4000 |
| Site client | http://localhost:5173 |
| Administration | http://localhost:5174 |

## Aperçu de l'API

| Méthode | Route | Description |
|---|---|---|
| POST | `/api/user/register` | Inscription |
| POST | `/api/user/login` | Connexion |
| GET | `/api/food/list` | Liste des plats |
| POST | `/api/food/add` | Ajouter un plat (admin) |
| POST | `/api/food/remove` | Supprimer un plat (admin) |
| POST | `/api/cart/add` | Ajouter au panier |
| POST | `/api/cart/remove` | Retirer du panier |
| POST | `/api/cart/get` | Récupérer le panier |
| POST | `/api/order/place` | Passer une commande |
| POST | `/api/order/verify` | Vérifier le paiement |
| POST | `/api/order/userorders` | Commandes d'un utilisateur |
| GET | `/api/order/list` | Toutes les commandes (admin) |
| POST | `/api/order/status` | Modifier le statut (admin) |

## Captures d'écran

<!-- Ajoutez vos images dans docs/screenshots puis décommentez -->
<!--
| Accueil | Panier |
|---|---|
| ![Accueil](docs/screenshots/home.png) | ![Panier](docs/screenshots/cart.png) |

| Administration |
|---|
| ![Admin](docs/screenshots/admin.png) |
-->

## Sécurité

- Les secrets (base de données, JWT, Stripe) sont stockés dans `.env` et exclus du dépôt via `.gitignore`.
- Les mots de passe sont hachés avant stockage.
- Les routes sensibles sont protégées par un middleware JWT.

## Feuille de route

- [x] Authentification et gestion du panier
- [x] Commande et paiement en ligne
- [x] Panneau d'administration
- [ ] Notifications de commande
- [ ] Déploiement (Render / Vercel)
- [ ] Tests automatisés

## Auteure

**Nour El Houda Achour**
Étudiante ingénieure en Génie Logiciel et Applications, IT Business School (ITBS) Nabeul

[![GitHub](https://img.shields.io/badge/GitHub-nourelhoudaachour2-181717?logo=github)](https://github.com/nourelhoudaachour2)

---

<div align="center">
Projet MERN Stack
</div>
